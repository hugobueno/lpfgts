import React from 'react';
import { ButtonLink, Description, Title } from '../../../styles/GlobalComponents';
import { Container } from './styles';
import { FiCheck, FiEdit3 } from 'react-icons/fi';

const FormLinkFormalization: React.FC = () => {

    return (
        <Container>
            <FiCheck />
            <Title>Proposta Concluída</Title>
            <Description>Em até 5 min, você receberá o contrato <strong> via SMS e Email</strong> para você assinar digitalmente ta? </Description>
        </Container>
    )
}

export default FormLinkFormalization;