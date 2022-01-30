import React, { useContext } from 'react';
import { FiArrowDown, FiArrowRight, FiClock } from 'react-icons/fi';
import { BsCardText, BsClockHistory, BsShieldLock } from 'react-icons/bs';
import { BiDetail } from 'react-icons/bi';
import { ThemeContext } from 'styled-components';
import { Button, Description, Title } from '../../../styles/GlobalComponents';

import { ButtonDown, Card, CardsContainer, Container, DataContainer } from './styles';

const ComoFunciona: React.FC = () => {
    const {colors} = useContext(ThemeContext)


    return (
        <Container>
            <DataContainer>
                <Title fontSize={'4rem'}>Como funciona?</Title>
                <Description>O processo de contratação é feito 100% por você e em
                    poucos minutos seu saque é aprovado e disponibilizado na sua conta.
                </Description>
                <CardsContainer>
                    <Card>
                        <BsShieldLock />
                        <div></div>
                        <div>
                            <h1>Autorização</h1>
                            <p>Primeiro vamos precisar da sua autorização para consultar seu Saldo FGTS ,
                                caso não saiba como fazer  Clique aqui</p>
                        </div>
                    </Card>
                    <Card>
                        <BsCardText />
                        <div></div>
                        <div>
                            <h1>Inclusão</h1>
                            <p>Agora vamos precisar dos seus dados para fazer a simulação e a
                                aprovação da proposta.</p>
                        </div>
                    </Card>
                    <Card>
                        <BsClockHistory />
                        <div></div>
                        <div>
                            <h1>Pagamento</h1>
                            <p>Agora só aguardar o dinheiro cair na sua conta :)
                                Caso tenha algum problema pode nos contatar via  Chat ou Whatsapp</p>
                        </div>
                    </Card>

                </CardsContainer>
                <div className='row-right'>
                    <Button color={colors.text} backgroundColor={colors.background}>Contrate agora <FiArrowRight /></Button>
                </div>
                <div className='row-center'>
                    <ButtonDown><FiArrowDown /></ButtonDown>
                </div>

            </DataContainer>
        </Container>
    )
}

export default ComoFunciona;