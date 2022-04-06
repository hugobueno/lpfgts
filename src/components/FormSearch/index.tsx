import Link from 'next/link';
import React, { FormEvent, useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { activeStep, IParcela, ISimulation } from '../../../pages/simulacao';
import { Title, Description, Button } from '../../../styles/GlobalComponents';
import api from '../../configs/api';
import { useToast } from '../../contexts/ToastContext';
import InputField from '../InputField';
import { FormContainer } from './styles';


export interface IClient {
    cpf: string,
    phone: string,
    list_parcelas?: IParcela[],
}



interface IFormSearch {
    setStep: (value: number) => void,
    setSimulations: (value: ISimulation) => void,
    setClient: (value: IClient) => void,
}

const FormSearch: React.FC<IFormSearch> = ({ setStep, setSimulations, setClient }) => {
    const { setModal } = useToast()
    const [dataClient, setDataClient] = useState<IClient>({
        cpf: '',
        phone: '',
    })
    const { colors } = useContext(ThemeContext)

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (!dataClient.cpf || !dataClient.phone) {
            return setModal({ type: 'warning', title: 'Faltam Campos', mesage: 'todos os campos são obrigatórios' })
        }

        if(dataClient.phone.length < 11){
            return setModal({ type: 'warning', title: 'Telefone inválido', mesage: 'O telefone deve conter 11 dígitos' })
        }
        setModal({ type: 'loading', title: 'Simulando saque', mesage: 'aguarde um momento...' })

        const { data, status } = await handleSimulationFGTS(dataClient)

        if (status === 200) {
            setModal({ type: 'success', title: 'Oba, tem valor disponivel!', mesage: 'Encontramos um simulação para você' })
            setStep(activeStep.STEP_AVAILABLE)
            setSimulations(data)
            // setModalUpdateValue(false)
            return
        }

        if (status === 400 && data.error === 'Api Bank not response') {
            setModal({ type: 'warning', title: 'Haa!, O serviço esta offline no momento', mesage: 'tente novamente' })
            setStep(activeStep.STEP_NOT_AUTHORIZATE)
            return
        }

        if (status === 400 && data.error === 'Zero simularion found') {
            setModal({ type: 'warning', title: 'No momento você não tem saldo', mesage: 'Volte em alguns dias aqui para simular novamente' })
            setDataClient({ cpf: '', phone: '' })
            setStep(activeStep.STEP_INITIAL)
            return
        }

        if (status === 400 && data.error === 'Operação não autorizada na instituição financeira') {
            setModal({ type: 'warning', title: 'Ops!, falta autorizar um banco', mesage: 'Precisamos que você autorize um de nossos bancos' })
            setStep(activeStep.STEP_NOT_AUTHORIZATE)
            return
        }

        if (status === 400 && data.error === 'Saque aniversário não aderido') {
            setModal({ type: 'warning', title: 'Saque aniversário não aderido', mesage: 'preparamos um tutorial pra você.' })
            return
        }

        if (status === 400 && data.error === 'CPF inválido') {
            setModal({ type: 'warning', title: 'Cpf Inválido', mesage: 'Verifique e tente novamente' })
            // setStep(activeStep.STEP_NOT_AUTHORIZATE)
            return
        }

        if (status === 400 && data.error === 'Não possui saldo suficiente para realizar a simulação') {
            setModal({ type: 'warning', title: 'Saldo insuficiente', mesage: 'tente novamente em alguns dias' })
            return
        }

        if (status === 400 && data.error === 'Fail server') {
            setModal({ type: 'error', title: 'Falha na simulação', mesage: 'tente novamente' })
            return
        }

       return setModal({ type: 'error', title: 'Simulação indisponível', mesage: 'tente novamente' })

    }

    return (
        <FormContainer>
            <Title>Simulação saque FGTS</Title>
            <Description>Consulta do saldo disponível.</Description>
            <div className='form-container'>
                <form onSubmit={(event) => {
                    setClient(dataClient)
                    handleSubmit(event)
                }} >
                    <InputField
                        focus
                        mask='cpf'
                        title='Cpf'
                        maxLength={14}
                        value={dataClient?.cpf.trim() || ''}
                        setValue={(value) => {
                            setDataClient({ ...dataClient, cpf: value, })
                        }}
                    />
                    <InputField
                        mask='phone'
                        title='Telefone'
                        value={dataClient?.phone.trim() || ''}
                        setValue={(value) => {
                            setDataClient({ ...dataClient, phone: value })
                        }}
                    />
                    <div className='terms'>
                        <Link passHref  href="/termos">
                            <a target={'_blank'} >Politica de privacidade e termos de uso</a>
                        </Link>
                    </div>
                    <Button margin='.5rem .5rem .5rem 0' type='submit' color={colors.text} backgroundColor={colors.primary}>Aceitar e Continuar <FiArrowRight /></Button>
                </form>
            </div>
        </FormContainer>
    )
}

export default FormSearch;




export const handleSimulationFGTS = async (dataClient: IClient) => {
    try {
        const { data, status } = await api.get('/saldo', {
            params: {
                cpf: dataClient.cpf,
                phone: dataClient.phone,
                list_parcelas: JSON.stringify(dataClient.list_parcelas?.map(item => {
                    return {DataVencimento: item.dataParcela, valor : item.valorTotalParcela }
                })),
            },
            validateStatus: () => true,
            timeout: 180000
        })
        
        console.log(data, status);
        

        return { data, status }


    } catch (error) {
        console.log(`Falha na simulacao ${error}`)
        return { data: { error: 'Falha na simulacao' }, status: 400 }
    }
}