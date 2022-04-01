import React, { useContext } from 'react';
import { ButtonLink, Description, Title } from '../../../styles/GlobalComponents';
import Link from 'next/link'
import { Container } from './styles';
import { FiEdit3 } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
interface IProps {
    link: string,
    nome: string,
}

const FormLinkFormalization: React.FC<IProps> = ({ link, nome }) => {
    const fistName = nome.trim().split(' ')[0]
    const { colors } = useContext(ThemeContext)

    return (
        <Container>
            <Title>{fistName},seu contrato esta pronto!</Title>
            <Description>Para assina-lo acesse o link abaixo,
                tambem enviamos para você por SMS ta?.
            </Description>
            <Link href={link} passHref>
                <ButtonLink backgroundColor={colors.primary } target={'_blank'}>Assinar Contrato <FiEdit3 /></ButtonLink>
            </Link>
        </Container>
    )
}

export default FormLinkFormalization;