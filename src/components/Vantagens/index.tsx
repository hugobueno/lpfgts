import React, { useContext } from 'react';
import { Button, ButtonLink, Description, Title } from '../../../styles/GlobalComponents';

import { CardItem, Container, GridRow } from './styles';
import Image from 'next/image';
import ImageCalc from '/public/assets/calc.svg';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import Link from 'next/link';

const Vantagens: React.FC = () => {
    const { colors } = useContext(ThemeContext);
    return (
        <Container id='sectionTwo'>
            <Title fontSize={'4rem'}>Vantagens pra você!</Title>
            <Description fontSize={'1.6rem'}>Use seu dinheiro como quiser, sem comprometer sua renda mensal:
                o desconto é feito somente uma vez ao ano, diretamente no saldo do FGTS
            </Description>
            <GridRow>
                <div>
                    <Image alt="imagem em desenho de uma pessoa se apoiando em uma calculadora" src={ImageCalc} />
                </div>
                <div>
                    <CardItem>
                        <div>
                            <FiCheckCircle />
                        </div>
                        <div>
                            <h1>O dinheiro cai na hora</h1>
                            <p>Após a aprovação, o dinheiro cai em minutos na sua conta.</p>
                        </div>
                    </CardItem>
                    <CardItem>
                        <div>
                            <FiCheckCircle />
                        </div>
                        <div>
                            <h1>Serve pra negativados</h1>
                            <p>Mesmo com restrição é possível solicitar o saque-aniversário.</p>
                        </div>
                    </CardItem>
                    <CardItem>
                        <div>
                            <FiCheckCircle />
                        </div>
                        <div>
                            <h1>Sem desconto de parcelas mensais</h1>
                            <p>O desconto ocorre uma vez ao ano direto no seu FGTS.</p>
                        </div>
                    </CardItem>

                </div>
            </GridRow>
            <div className='row-center'>
                <Link passHref href={'/simulacao'}>
                    <ButtonLink aria-label='contrate agora' color={colors.text} backgroundColor={colors.primary}>Contrate agora <FiArrowRight /></ButtonLink>
                </Link>
            </div>
        </Container>
    )
}

export default Vantagens;