import React, { useState } from 'react';
import { NavContainer, NavBar, NavItem, LinkButton } from './styles';
import ImageLog from 'next/image'
import Link from 'next/link'
import Logo from '/public/assets/logo.png'

const Nav: React.FC = () => {
    const [activeButton, setActiveButton] = useState({
        primary: true,
        secondary: false,
        ternary: false,
        quaternary: false,
        quinary: false,
    });

    return (
        <NavContainer>
            <NavBar>
                <ImageLog src={Logo} />
                <NavItem>
                    <ul>
                        <li>
                            <Link href="#">
                                <LinkButton
                                    onClick={() => setActiveButton({
                                        primary: true,
                                        secondary: false,
                                        ternary: false,
                                        quaternary: false,
                                        quinary: false,
                                    })}
                                    active={activeButton.primary} >Inicio</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="#sectionOne">
                                <LinkButton onClick={() => setActiveButton({
                                    primary: false,
                                    secondary: true,
                                    ternary: false,
                                    quaternary: false,
                                    quinary: false,
                                })} active={activeButton.secondary} >Como funciona?</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="#sectionTwo">
                                <LinkButton
                                    onClick={() => setActiveButton({
                                        primary: false,
                                        secondary: false,
                                        ternary: true,
                                        quaternary: false,
                                        quinary: false
                                    })}
                                    active={activeButton.ternary}>Vantagens</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="#sectionThree">
                                <LinkButton
                                    onClick={() => setActiveButton({
                                        primary: false,
                                        secondary: false,
                                        ternary: false,
                                        quaternary: true,
                                        quinary: false
                                    })}
                                    active={activeButton.quaternary}>Quem pode?</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="#sectionFour">
                                <LinkButton
                                    onClick={() => setActiveButton({
                                        primary: false,
                                        secondary: false,
                                        ternary: false,
                                        quaternary: false,
                                        quinary: true
                                    })}
                                    active={activeButton.quinary}>Dúvidas</LinkButton>
                            </Link>
                        </li>
                    </ul>
                </NavItem>

            </NavBar>
        </NavContainer>
    )
}

export default Nav;