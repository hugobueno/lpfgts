import React, { useState } from 'react';
import { NextPage } from 'next';
import { Container, GridForm, HeaderSimulation, StepContainer, StepImage } from '../styles/simulacaoStyles';
import Image from 'next/image';
import { Description, Title } from '../styles/GlobalComponents';
import { FiArrowLeft, FiLock } from 'react-icons/fi';
import api from '../src/configs/api';
import { useToast } from '../src/contexts/ToastContext';
import { stepsToSimulation } from '../src/configs/stepsSimularion';
import AddressForm, { IAddress } from '../src/components/FormAddress';
import FormPessoal, { IPessoa } from '../src/components/FormPessoal';
import FormPessoalBank, { IBank } from '../src/components/FormPessoalBank';
import FormSearch, { IClient } from '../src/components/FormSearch';
import FormNotAuthorizated from '../src/components/FormNotAuthorizated';
import FormSimulations from '../src/components/FormSimulations';
import FormLinkFormalization from '../src/components/FormLinkFormalization';
import Congratulation from '../src/components/Congratulation';
import HelpAuthFGTS from '../src/components/HelpAuthFGTS';

export interface ISimulation {
  prazo: number,
  codigo_tabela_financiamento: string,
  descricao_tabela_financiamento: string,
  codigo_produto: string,
  descricao_produto: string,
  despesas: [],
  parcelas: [
    {
      num_parcela: number,
      valor_parcela: number,
      data_vencimento: string
    }
  ],
  taxa_apropriacao_anual: number,
  taxa_apropriacao_mensal: number,
  taxa_cet_anual: number,
  taxa_cet_mensal: number,
  taxa_referencia_anual: number,
  taxa_referencia_mensal: number,
  valor_bruto: number,
  valor_cliente: number,
  valor_financiado: number,
  valor_solicitado: number,
  valor_iof: number,
  valor_liquido: number,
  tipo_simulacao: 'ValorSolicitado'
}

export const activeStep = {
  STEP_INITIAL: 0,
  STEP_NOT_AUTHORIZATE: 1,
  STEP_AVAILABLE: 2,
  STEP_ADDRESS: 3,
  STEP_PESSOAL_DATA: 4,
  STEP_PESSOAL_BANK: 5,
  STEP_FORMALIZATION: 6
}

const pages: NextPage = () => {
  const [step, setStep] = React.useState(activeStep.STEP_INITIAL);
  const { setModal } = useToast()

  const [dataClient, setDataClient] = useState<IClient>({
    cpf: '',
    phone: '',
  })
  const [simulations, setSimulations] = useState<ISimulation>()
  const [clientAddress, setClientAddress] = useState<IAddress>()
  const [clientPessoalData, setClientPessoalData] = useState<IPessoa>()
  const [clientDataBank, setClientDataBank] = useState<IBank>()
  const [linkFormalization, setLinkFormalization] = useState<string>()
  const [congratulation, setCongratulation] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [helpAuth, setHelpAuth] = useState(false)

  const handleCreateOrder = async (dataBank: IBank) => {
    try {
      setModal({ type: 'loading', title: 'Gerando contrato', mesage: 'estamos gerando seu contrato digital' })
      const { data, status } = await api.post('/order', {
        cpf: dataClient.cpf,
        phone: dataClient.phone,
        nome: clientPessoalData?.nome,
        nascimento: clientPessoalData?.nascimento,
        mae: clientPessoalData?.mae,
        documento_rg: clientPessoalData?.documento_rg,
        banco: dataBank?.banco,
        agencia: dataBank?.agencia,
        conta: dataBank?.conta,
        tipo: dataBank?.tipo.value,
        logradouro: clientAddress?.logradouro,
        numero: clientAddress?.numero,
        bairro: clientAddress?.bairro,
        cidade: clientAddress?.cidade,
        uf: clientAddress?.uf,
        cep: clientAddress?.cep,
      }, {
        validateStatus: () => true,
        timeout: 200000
      })
      setIsDisabled(false)
      if (status === 200) {
        setModal({ type: 'success', title: 'Contato Gerado', mesage: 'Seu contrato esta pronto' })
        setCongratulation(true)
        setLinkFormalization(data)
        setStep(activeStep.STEP_FORMALIZATION)
        return
      }
      if (status === 400) {
        setModal({ type: 'warning', title: data.error, mesage: 'verifique e tente novamente' })
        return
      }
      if (status === 504) {
        setModal({ type: 'warning', title: 'Serviço Indisponível', mesage: 'tentando reconectar...' })
        return
      }
    } catch (error) {
      setModal({
        type: 'error',
        title: 'Falha na criacao da proposta',
        mesage: 'Tente novamente'
      })
    }
  }

  const handleGoBack = () => {
    if (step === activeStep.STEP_NOT_AUTHORIZATE) setStep(activeStep.STEP_INITIAL)
    if (step === activeStep.STEP_AVAILABLE) setStep(activeStep.STEP_INITIAL)
    if (step === activeStep.STEP_ADDRESS) setStep(activeStep.STEP_AVAILABLE)
    if (step === activeStep.STEP_PESSOAL_DATA) setStep(activeStep.STEP_ADDRESS)
    if (step === activeStep.STEP_PESSOAL_BANK) setStep(activeStep.STEP_PESSOAL_DATA)
  }

  return (
    <>
      <Container>
        <StepContainer>
          <StepImage>
            <Image src={stepsToSimulation[step].image} />
            <Title>{stepsToSimulation[step].title}</Title>
            <Description>{stepsToSimulation[step].description}</Description>
          </StepImage>
        </StepContainer>
        <GridForm>
          <HeaderSimulation >
            {step !== activeStep.STEP_INITIAL && step !== activeStep.STEP_FORMALIZATION ? (
              <button
                onClick={(event) => {
                  event.preventDefault()
                  handleGoBack()
                }}
                className='btn_go_back'><FiArrowLeft /></button>
            ) : null}
            <span className='secure_ambient'><FiLock /> Ambiente Seguro</span>
          </HeaderSimulation>
          {step === 0 && (
            <FormSearch
              setClient={(value) => setDataClient(value)}
              setSimulations={(value) => {
                setSimulations(value)
              }}
              setStep={(value) => {
                setStep(value)
              }}
            />
          )}
          {step === activeStep.STEP_NOT_AUTHORIZATE && (
            <FormNotAuthorizated
              setStepFgts={setHelpAuth}
              setStep={(value) => {
                setStep(value)
              }}
              setSimulations={(value) => {
                setSimulations(value)
              }}
              dataClient={dataClient}
            />
          )}
          {step === activeStep.STEP_AVAILABLE && (
            <FormSimulations
              dataClient={dataClient}
              simulation={simulations}
              setStep={(value) => {
                setStep(value)
              }}
              setSimulation={(value) => {
                setSimulations(value)
              }}
            />
          )}
          {step === activeStep.STEP_ADDRESS &&
            <AddressForm
              setCurrencyAddress={(value) => {
                setClientAddress(value)
              }}
              setStep={(value) => {
                value && setStep(activeStep.STEP_PESSOAL_DATA)
              }}
            />
          }
          {step === activeStep.STEP_PESSOAL_DATA &&
            <FormPessoal
              setClientPessoalData={(value) => {
                setClientPessoalData(value)
              }}
              setStep={(value) => {
                value && setStep(activeStep.STEP_PESSOAL_BANK)
              }}
            />
          }
          {step === activeStep.STEP_PESSOAL_BANK &&
            <FormPessoalBank
              lock={isDisabled}
              setStep={(value, dataBank) => {
                setIsDisabled(true)
                setClientDataBank(dataBank)
                handleCreateOrder(dataBank)
              }}
            />
          }
          {step === activeStep.STEP_FORMALIZATION &&
            <FormLinkFormalization link={linkFormalization || ''} nome={clientPessoalData?.nome || ''}>
            </FormLinkFormalization>
          }
        </GridForm>
      </Container>
      <Congratulation setOpen={(valeu) => {
        setCongratulation(valeu)
      }} open={congratulation} />
      <HelpAuthFGTS open={helpAuth} setOpen={(value) => setHelpAuth(value)} />
    </>
  )
}
export default pages;