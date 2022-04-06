import React, { useContext, useEffect, useState } from 'react';

import { ItensContainer, NavBarContainer } from './styles';
import Hamburger from 'hamburger-react'
import { ThemeContext } from 'styled-components';
import Image from 'next/image';
import Logo from '/public/assets/logo.png';
import LogoLight from '/public/assets/logo_light.png';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { ToggleButton } from '../../../styles/GlobalComponents';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { useTheme } from '../../contexts/modeContext';

const NavMobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false)
    const { colors, title } = useContext(ThemeContext)
    const { mode, setMode } = useTheme()

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        if (isOpen) {
            disableScroll()
        } else {
            enableScroll()
        }
    }, [isOpen])

    return (
        <NavBarContainer>
            <div className='logo'>
                {!isOpen ? (
                    <Image alt='Logo da empresa virtuos cred' width={100} objectFit={'contain'} src={title === 'light' ? Logo : LogoLight} />
                ) : (
                    <ToggleButton
                        onClick={setMode}>{mode === 'light' ? <FiToggleLeft /> : <FiToggleRight  color={colors.primary} />}
                    </ToggleButton>
                )}
            </div>
            <Hamburger direction='right' size={40} color={colors.primary} toggled={isOpen} toggle={setOpen} />
            <ItensContainer isOpen={isOpen}>
                <Link passHref href='#'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Inicio</a>
                </Link>
                <Link passHref href='#sectionOne'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Como funciona?</a>
                </Link>
                <Link passHref href='#sectionTwo'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Vantagens</a>
                </Link>
                <Link passHref href='#sectionThree'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Quem pode?</a>
                </Link>
                <Link passHref href='#sectionFour'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Dúvidas</a>
                </Link>

                <div className='f_contact_item'>
                    <BsWhatsapp />
                    <p>
                        Fale conosco por Whatsapp: (xx) xxxx-xxxx
                        De segunda a sexta das 8h às 18h, exceto feriados
                    </p>
                </div>
            </ItensContainer>
        </NavBarContainer>
    )
}

export default NavMobile;