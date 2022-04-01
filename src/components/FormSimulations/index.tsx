import React, { useContext, useState } from 'react';
import { FiArrowRight, FiHelpCircle } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { activeStep, ISimulation } from '../../../pages/simulacao';
import { Button } from '../../../styles/GlobalComponents';
import { SimulationContainer, SimulationHeader, SimulationList, SimulationItem, SimulationTaxes, SimulationTaxesItem, ButtonsSection, SimulationHelp } from '../../../styles/simulacaoStyles';
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
    const [currencyValue, setCurrencyValue] = useState('')



    return (
        <>
            <SimulationContainer>
                <SimulationHeader className='simulation_header'>
                    <h1>Total Pré-Aprovado</h1>
                    <h1 className='money_available'>{convertToBRL(simulation?.valor_cliente || 0)}</h1>
                </SimulationHeader>
                <SimulationList className='simulation_header'>
                    {simulation?.parcelas?.map(item => {
                        return (
                            <SimulationItem key={item.data_vencimento}>
                                <div>
                                    <span>Parcela {item.num_parcela}</span>
                                    <h1>{convertToBRL(item.valor_parcela || 0)}</h1>
                                    <span>Venc {item.data_vencimento}</span>
                                </div>
                            </SimulationItem>
                        )
                    })}
                </SimulationList>
                <SimulationTaxes>
                    <SimulationTaxesItem>
                        <span>Qtd Parcelas</span>
                        <h1>{simulation?.parcelas?.length}x</h1>
                    </SimulationTaxesItem>
                    <SimulationTaxesItem>
                        <span>Taxa Juros</span>
                        <h1>{simulation?.taxa_cet_mensal?.toFixed(2)}%</h1>
                    </SimulationTaxesItem>
                    <SimulationTaxesItem>
                        <span>Taxa Cet Anual</span>
                        <h1>{simulation?.taxa_cet_anual?.toFixed(2)}%</h1>
                    </SimulationTaxesItem>
                </SimulationTaxes>
                <ButtonsSection>
                    <Button margin='.5rem .5rem .5rem 0rem' onClick={() => setModalUpdateValue(!modalUpdateValue)} >Mudar valor</Button>
                    <Button onClick={() => setStep(activeStep.STEP_ADDRESS)} color={colors.text} backgroundColor={colors.primary}>Continuar <FiArrowRight /></Button>
                </ButtonsSection>
            </SimulationContainer>
            <Modal
                dataClient={dataClient}
                minValue={300}
                maxValue={simulation?.valor_cliente || 0}
                open={modalUpdateValue} setOpen={(value) => setModalUpdateValue(value)}
                setValue={(value) => setCurrencyValue(value)}
                currencyValue={currencyValue}
                setSimulation={setSimulation}
            />
        </>
    )
}

export default FormSimulations;