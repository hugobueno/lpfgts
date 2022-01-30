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
        quaternary: false
    });

    return (
        <NavContainer>
            <NavBar>
                <ImageLog src={Logo} />
                <NavItem>
                    <ul>
                        <li>
                            <Link href="/">
                                <LinkButton
                                    onClick={() => setActiveButton({
                                        primary: true,
                                        secondary: false,
                                        ternary: false,
                                        quaternary: false
                                    })}
                                    active={activeButton.primary} >Inicio</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <LinkButton onClick={() => setActiveButton({
                                    primary: false,
                                    secondary: true,
                                    ternary: false,
                                    quaternary: false
                                })} active={activeButton.secondary} >O que é?</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <LinkButton
                                 onClick={() => setActiveButton({
                                    primary: false,
                                    secondary: false,
                                    ternary: true,
                                    quaternary: false
                                })}
                                active={activeButton.ternary}>Como contratar</LinkButton>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <LinkButton
                                 onClick={() => setActiveButton({
                                    primary: false,
                                    secondary: false,
                                    ternary: false,
                                    quaternary: true
                                })}
                                active={activeButton.quaternary}>Ajuda</LinkButton>
                            </Link>
                        </li>
                    </ul>
                </NavItem>

            </NavBar>
        </NavContainer>
    )
}

export default Nav;