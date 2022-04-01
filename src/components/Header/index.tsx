import React, { useContext, useEffect } from 'react';
import { Button, ButtonLink, Description, Title } from '../../../styles/GlobalComponents';
import { FiArrowRight } from 'react-icons/fi'
import { Container, DataContainer, PhotoContainer } from './styles';
import ShapePhoto from '../ShapePhoto';
import { ThemeContext } from 'styled-components'
import Link from 'next/link'

const Header: React.FC = () => {

    const { colors } = useContext(ThemeContext)

    return (
        <Container>
            <DataContainer>
                <Title fontSize={'3rem'}>Antecipe até 10 parcelas do seu saque aniversário FGTS
                </Title>
                <Description>
                    Tenha dinheiro na sua conta ainda hoje e em poucos minutos.
                </Description>
                <Link passHref href={'/simulacao'}>
                    <ButtonLink margin='1rem 0' backgroundColor={colors.primary} color={colors.text}>Contrate agora <FiArrowRight /></ButtonLink>
                </Link>
            </DataContainer>
            <PhotoContainer>
                <ShapePhoto />
            </PhotoContainer>
        </Container>
    )
}

export default Header;