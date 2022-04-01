import React, { useContext, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiCircle, FiX } from 'react-icons/fi';
import { Button, Description, Title } from '../../../styles/GlobalComponents';
import { ButtonClose } from '../Modal/styles';
import { Container, Footer, ItemCircle, SquareButton, StepsIcons, Wrapper } from './styles';
import Image from 'next/image'

import { ThemeContext } from 'styled-components';

import step1 from '../../../public/fgts/fgtsStep1.png'
import step2 from '../../../public/fgts/fgtsStep2.png'
import step3 from '../../../public/fgts/fgtsStep3.png'
import step4 from '../../../public/fgts/fgtsStep4.png'
import step5 from '../../../public/fgts/fgtsStep5.png'
import step6 from '../../../public/fgts/fgtsStep6.png'

interface IProps {
    open: boolean,
    setOpen: (value: boolean) => void
}

const HelpAuthFGTS: React.FC<IProps> = ({ open, setOpen }) => {
    const [step, setStep] = useState(0)
    const { colors } = useContext(ThemeContext)



    const stepsList = [
        {
            title: 'App FGTS',
            description: 'Acesse o aplicativo do FGTS com sua senha do GOV.BR',
            image: step1
        },
        {
            title: 'Saque Aniversário',
            description: 'Selecione a opção Saque Aniversário do FGTS no menu principal e aceite os termos.',
            image: step2
        },
        {
            title: 'Autorização de Consulta',
            description: 'Clique em “autorizar bancos a consultarem seu FGTS”.',
            image: step3
        },
        {
            title: 'Autorização para consulta Saque',
            description: 'Clique em “autorizar bancos a consultarem seu FGTS”.',
            image: step4
        },
        {
            title: 'Autorize nosso parceiro de Crédito',
            description: 'Clique no campo “ Instituições financeiras”, logo em eguida procure o no banco BANCO PAN S.A ',
            image: step5
        },
        {
            title: 'Concluído',
            description: 'Clique em continuar para finalizar a contratação',
            image: step6
        },
    ]

    const handleCloseModal = () => {
        setOpen(false)
    }

    const isPrev = step > 0
    const isNext = step < (stepsList.length - 1)
    const handleNextStep = () => {
        isNext && setStep(step + 1)
    }

    const handlePrevStep = () => {
        isPrev && setStep(step - 1)
    }

    return (
        <Container isOpen={open} >
            <ButtonClose onClick={handleCloseModal}><FiX /></ButtonClose>
            <Wrapper>
                <div>
                    <Title color={'#222'}>{step + 1} - {stepsList[step].title}</Title>
                    <Description color={'#222'}>{stepsList[step].description}</Description>
                </div>
                <Image src={stepsList[step].image} />
                {isNext ? (
                    <Footer>
                        <div>
                            <SquareButton active={isPrev} onClick={handlePrevStep}><FiChevronLeft /></SquareButton>
                            <StepsIcons >
                                {stepsList.map((item, index) => {
                                    return (
                                        <ItemCircle key={item.title} active={index === step} />
                                    )
                                })}
                            </StepsIcons>
                            <SquareButton active={isNext} onClick={handleNextStep}><FiChevronRight /></SquareButton>
                        </div>
                    </Footer>
                ): (
                    <div className='close_step_btn'>
                        <Button onClick={handleCloseModal} backgroundColor={colors.primary}>Fechar</Button>
                    </div>
                )}
            </Wrapper>
        </Container>
    )
}

export default HelpAuthFGTS;