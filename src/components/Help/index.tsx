import React from 'react';
import { Description, Title } from '../../../styles/GlobalComponents';
import { Container } from './styles';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const Help: React.FC = () => {

    const arrayHelp = [
        {
            title: 'Quem pode solicitar?',
            message: 'Maiores de 18 anos que possuem saldo FGTS.'
        },
        {
            title: 'Quais as vantagens do empréstimo com garantia de FGTS ?',
            message: `
                O empréstimo com garantia no FGTS permite a antecipação
                do saldo do FGTS, sem precisar esperar o mês do seu aniversário 
            pra resgatar. Você consegue antecipar seus próximos 
            saque-aniversários e recebe todo o dinheiro na hora.
            `
        },
        {
            title: 'Como é feito o pagamento das parcelas ?',
            message: `
            Ao fazer a contratação o saldo no qual foi acordado fica
            vinculado ao banco, portanto esse pagamento ja é feito
            automaticamente no primeiro dia útil do mês de seu
            aniversário.
            `
        },
        {
            title: 'Quais documentos preciso ter em mãos ?',
            message: `
            Você precisa ter o CPF e o RG para solicitar o empréstimo.
            `
        },

    ]

    return (
        <Container id='sectionFour'>
            <Title>Dúvidas frequentes</Title>
            <Description>Separamos alguns assuntos que você pode ficar em dúvida</Description>
            <Accordion>
                {
                    arrayHelp.map((item, index) => {
                        return (
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {item.title}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {item.message}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </Container>
    )
}
export default Help