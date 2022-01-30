import React, { useContext } from 'react';
import { Button, Description, Title } from '../../../styles/GlobalComponents';
import {FiArrowRight} from 'react-icons/fi'
import { Container, DataContainer, PhotoContainer } from './styles';
import ShapePhoto from '../ShapePhoto';
import {ThemeContext}from 'styled-components'
const Header: React.FC = () => {

    const {colors} = useContext(ThemeContext)
    return (
        <Container>
            <DataContainer>
                <Title fontSize={'3.5rem'}>Antencipe até 07
                    saques aniversários
                    FGTS
                </Title>
                <Description>
                    Tenha dinheiro na sua conta ainda hoje e em poucos minutos.
                </Description>
                <Button color={colors.text} backgroundColor={colors.primary}>Contrate agora <FiArrowRight /></Button>
            </DataContainer>
            <PhotoContainer>
                <ShapePhoto>
                    
                </ShapePhoto>
            </PhotoContainer>
        </Container>
    )
}

export default Header;