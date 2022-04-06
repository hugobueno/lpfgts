import React, { useContext, useEffect, useState } from 'react';
import { FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { activeStep, IParcela, ISimulation } from '../../../pages/simulacao';
import { Button } from '../../../styles/GlobalComponents';
import { SimulationContainer, SimulationHeader, SimulationList, SimulationItem, SimulationTaxes, SimulationTaxesItem, ButtonsSection, SimulationHelp } from '../../../styles/simulacaoStyles';
import { useToast } from '../../contexts/ToastContext';
import { convertToBRL } from '../../utils/masks';
import { handleSimulationFGTS, IClient } from '../FormSearch';
import Modal from '../Modal';

interface IProps {
    simulation: ISimulation | undefined;
    setStep: (step: number) => void;
    setSimulation: (simulation: ISimulation | undefined) => void;
    dataClient: IClient
}

const FormSimulations: React.FC<IProps> = ({ simulation, setStep, setSimulation, dataClient }) => {
    const [modalUpdateValue, setModalUpdateValue] = useState(false)
    const { colors } = useContext(ThemeContext)
    const { setModal: Toast } = useToast()
    const [currencyValue, setCurrencyValue] = useState('')
    const [listParcelas, setListParcelas] = useState<IParcela[]>([])
    const totalSaque = listParcelas.reduce((acc, curr) => {
        if (curr.selected) {
            return acc + curr.valorParcela
        }
        return acc
    }, 0)


    useEffect(() => {
        if (simulation?.calculoParcelas) {
            setListParcelas(simulation?.calculoParcelas.map(item => {
                return { ...item, selected: true }
            }))
        }
    }, [simulation])

    const handleSelectParcela = (parcela: IParcela) => {

        if ((totalSaque - parcela.valorParcela) < 300 && parcela.selected) {
            return Toast({ type: 'warning', title: 'Valor mínimo para saque', mesage: 'O valor mínimo para saque é de R$ 300,00' })
        }
        const newList = listParcelas.map(item => {
            if (item.numeroParcela === parcela.numeroParcela) {
                return { ...item, selected: !item.selected }
            }
            return item
        })
        setListParcelas(newList)

    }
   
    return (
        <>
            <SimulationContainer>
                <SimulationHeader className='simulation_header'>
                    <h1>Total Pré-Aprovado</h1>
                    <h1 className='money_available'>{convertToBRL(totalSaque)}</h1>
                </SimulationHeader>
                <SimulationList className='simulation_header'>
                    {listParcelas.map(item => {
                        return (
                            <SimulationItem onClick={() => {
                                return
                                handleSelectParcela(item)
                            }} isSelected={item.selected} key={item.numeroParcela}>
                                <div>
                                    <span>Parcela {item.numeroParcela}</span>
                                    <h1>{convertToBRL(item.valorParcela || 0)}</h1>
                                    <span>Venc {item.dataParcela}</span>
                                </div>
                            </SimulationItem>
                        )
                    })}
                </SimulationList>
                <SimulationTaxes>

                    <SimulationTaxesItem>
                        <span>Qtd Parcelas</span>
                        <h1>{listParcelas?.filter(item => item.selected === true).length}x</h1>
                    </SimulationTaxesItem>
                    <SimulationTaxesItem>
                        <span>Taxa Juros</span>
                        <h1>{simulation?.taxaEfetivaMes}%</h1>
                    </SimulationTaxesItem>
                    <SimulationTaxesItem>
                        <span>IOF</span>
                        <h1>{convertToBRL(simulation?.valorIof || 0)}</h1>
                    </SimulationTaxesItem>
                    <SimulationTaxesItem>
                        <span>Total Liquido</span>
                        <h1>{convertToBRL(totalSaque - (simulation?.valorIof || 0))}</h1>
                    </SimulationTaxesItem>
                </SimulationTaxes>
                <ButtonsSection>
                    <Button onClick={async () => {
                        // const { data } = await handleSimulationFGTS({
                        //     ...dataClient,
                        //     list_parcelas: listParcelas.filter(item => item.selected).map(item => {
                        //         return item.selected ? { ...item, valor_parcela: item.valorParcela } : item
                        //     })
                        // })

                        setStep(activeStep.STEP_ADDRESS)
                    }} color={colors.text} backgroundColor={colors.primary}>Continuar <FiArrowRight /></Button>
                </ButtonsSection>
            </SimulationContainer>
            <Modal
                dataClient={dataClient}
                minValue={300}
                maxValue={simulation?.valorEmprestimo || 0}
                open={modalUpdateValue} setOpen={(value) => setModalUpdateValue(value)}
                setValue={(value) => setCurrencyValue(value)}
                currencyValue={currencyValue}
                setSimulation={setSimulation}
            />
        </>
    )
}

export default FormSimulations;