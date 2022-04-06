import React, { FormEvent } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import { ThemeContext } from 'styled-components';
import { ISimulation } from '../../../pages/simulacao';
import { Button, Input } from '../../../styles/GlobalComponents';
import { useToast } from '../../contexts/ToastContext';
import { convertToBRL } from '../../utils/masks';
import { handleSimulationFGTS, IClient } from '../FormSearch';
import { ButtonClose, ContainerModal, LimitsSimularion, Wrapper } from './styles';

interface IModal {
    setOpen: (position: boolean) => void,
    open: boolean,
    minValue: number,
    maxValue: number,
    setValue: (value: string) => void,
    currencyValue: string,
    dataClient: IClient,
    setSimulation: (simulation: ISimulation) => void,
}

const Modal: React.FC<IModal> = ({ setOpen,
    open,
    maxValue,
    minValue,
    setValue,
    currencyValue,
    dataClient,
    setSimulation
}) => {
    const [openModal, setOpenModal] = useState(true)
    const { colors } = useContext(ThemeContext)
    const refInput = useRef<HTMLInputElement>(null)
    const { setModal } = useToast()
    useEffect(() => {
        if (openModal) {
            refInput.current?.focus()
        }
        console.log(open);
    }, [openModal, open])

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (!dataClient.cpf || !dataClient.phone) {
            return setModal({ type: 'warning', title: 'Faltam Campos', mesage: 'todos os campos são obrigatórios' })
        }
        setModal({ type: 'loading', title: 'Simulando saque', mesage: 'aguarde um momento...' })

        const { data, status } = await handleSimulationFGTS({ ...dataClient,  })
        console.log(data, status);

        if (status === 200) {
            setModal({ type: 'success', title: 'Oba, tem valor disponivel!', mesage: 'Encontramos um simulação para você' })
            setOpen(false)
            setSimulation(data)
            return
        }
    }

    return (
        <ContainerModal open={open}>
            <Wrapper>
                <ButtonClose onClick={() => setOpen(false)}><FiX /></ButtonClose>
                <h1>Alterar simulação</h1>
                <LimitsSimularion>
                    <div>
                        <label htmlFor=''>Valor min</label>
                        <p>{convertToBRL(minValue)}</p>
                    </div>
                    <div>
                        <label htmlFor=''>Valor Máx</label>
                        <p>{convertToBRL(maxValue)}</p>
                    </div>
                </LimitsSimularion>
                <NumberFormat getInputRef={refInput} aria-label={'valor do emprestimo'}
                    alt={'Valor do Empréstimo'} className={'simulator_input'}
                    onValueChange={(values) => {
                        const { formattedValue, value } = values;
                        setValue(value)
                    }}
                    value={currencyValue || ''}
                    thousandSeparator={true}
                    prefix={'R$ '}
                    decimalScale={2}
                    fixedDecimalScale
                />
                <Button onClick={(event) => {
                    const isMinimal = Number(currencyValue) >= 300
                    if (!isMinimal) {
                        return alert('Menor que 300 add toast depois')
                    }
                    handleSubmit(event)
                }} backgroundColor={colors.quaternary}>Recalcular </Button>
            </Wrapper>
        </ContainerModal>
    )
}

export default Modal;