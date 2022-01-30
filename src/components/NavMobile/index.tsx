import React, { useContext, useEffect, useState } from 'react';

import { ItensContainer, NavBarContainer } from './styles';
import Hamburger from 'hamburger-react'
import { ThemeContext } from 'styled-components';
import Image from 'next/image';
import Logo from '/public/assets/logo.png';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

const NavMobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false)
    const { colors } = useContext(ThemeContext)

    // disable scroll on body
    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    // enable scroll on body
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
            <Image src={Logo} />
            <Hamburger direction='right' size={40} color={colors.primary} toggled={isOpen} toggle={setOpen} />
            <ItensContainer isOpen={isOpen}>
                <Link href='#'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Inicio</a>
                </Link>
                <Link href='#sectionOne'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Como funciona?</a>
                </Link>
                <Link href='#sectionTwo'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Vantagens</a>
                </Link>
                <Link href='#sectionThree'>
                    <a onClick={() => {
                        enableScroll()
                        setOpen(!open)
                    }}>Quem pode?</a>
                </Link>
                <Link href='#sectionFour'>
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