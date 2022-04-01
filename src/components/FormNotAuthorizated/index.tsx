import React, { FormEvent, useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { activeStep, ISimulation } from '../../../pages/simulacao';
import { Button } from '../../../styles/GlobalComponents';
import { AutorizationContainer } from '../../../styles/simulacaoStyles';
import { useToast } from '../../contexts/ToastContext';
import { handleSimulationFGTS, IClient } from '../FormSearch';

interface IProps {
    dataClient: IClient;
    setStep: (value: number) => void;
    setSimulations: (value: ISimulation) => void;
    setStepFgts: (value: boolean) => void
}

const FormNotAuthorizated: React.FC<IProps> = ({ dataClient, setStep, setSimulations, setStepFgts }) => {
    const { colors } = useContext(ThemeContext);
    const { setModal } = useToast()

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (!dataClient.cpf || !dataClient.phone) {
            return setModal({ type: 'warning', title: 'Faltam Campos', mesage: 'todos os campos são obrigatórios' })
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
            // setDataClient({ cpf: '', phone: '' })
            setStep(activeStep.STEP_INITIAL)
            return
        }

        if (status === 400 && data.error === 'Bank not authorized') {
            setModal({ type: 'warning', title: 'Ops!, falta autorizar um banco', mesage: 'Precisamos que você autorize um de nossos bancos' })
            setStep(activeStep.STEP_NOT_AUTHORIZATE)
            return
        }

        if (status === 400 && data.error === 'Service not authorized') {
            setModal({ type: 'warning', title: 'Você não é optante pelo Saque Aniversario', mesage: 'xxxxxxxxxxxxx' })
            return
        }

        if (status === 400 && data.error === 'Invalid CPF') {
            setModal({ type: 'warning', title: 'Autorização não efetuada ou Cpf invalido', mesage: 'xxxxxxxxxxxxx' })
            setStep(activeStep.STEP_NOT_AUTHORIZATE)
            return
        }


    }

    return (
        <AutorizationContainer>
            <div className='row'>
                <Button onClick={(event) => handleSubmit(event)} color={colors.text} backgroundColor={colors.primary}>Já Autorizei <FiArrowRight /></Button>
                <Button onClick={() => setStepFgts(true)} color={colors.text} backgroundColor={colors.secundary}>Acesso guia <FiArrowRight /></Button>
            </div>
            <p>
                Caso precise de ajuda para autorizar um Banco,
                preparamos um passo a passo <strong>simplificado para você</strong>.
            </p>
        </AutorizationContainer>
    )
}

export default FormNotAuthorizated;