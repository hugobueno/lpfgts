import React, { useContext } from 'react';
import Link from 'next/link';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { BsCardText, BsClockHistory, BsShieldLock } from 'react-icons/bs';
import { ThemeContext } from 'styled-components';
import { ButtonLink, Description, Title } from '../../../styles/GlobalComponents';
import { ButtonDown, Card, CardsContainer, Container, DataContainer } from './styles';

const ComoFunciona: React.FC = () => {
    const { colors } = useContext(ThemeContext)

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 100"><path fill={colors.primary} fillOpacity={'1'} d="M0,0L120,5.3C240,11,480,21,720,64C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <Container id='sectionOne' >
                <DataContainer>
                    <div className='header_data'>
                        <Title fontSize={'4rem'}>Como funciona?</Title>
                        <Description>O processo de contratação é feito 100% por você e em
                            poucos minutos seu saque é aprovado e disponibilizado na sua conta.
                        </Description>
                    </div>
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
                                <p>Agora só aguardar o dinheiro cair na sua conta
                                    Caso tenha algum problema pode nos contatar via  Chat ou Whatsapp</p>
                            </div>
                        </Card>
                    </CardsContainer>
                    <div className='row-right'>
                        <Link href={'/simulacao'}>
                            <ButtonLink aria-label='contrate agora' color={colors.text} backgroundColor={colors.background}>Contrate agora <FiArrowRight /></ButtonLink>
                        </Link>
                    </div>
                    <div className='row-center'>
                        <Link href="#sectionTwo">
                            <ButtonDown aria-label="vantagens"><FiArrowDown /></ButtonDown>
                        </Link>
                    </div>
                </DataContainer>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150"><path fill={colors.primary} fillOpacity={'1'} d="M0,64L120,69.3C240,75,480,85,720,106.7C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </>
    )
}

export default ComoFunciona;