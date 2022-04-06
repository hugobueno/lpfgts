import React, { useContext, useState } from 'react';
import { NavContainer, NavBar, NavItem, LinkButton } from './styles';
import ImageLog from 'next/image'
import Link from 'next/link'
import Logo from '/public/assets/logo.png';
import LogoLight from '/public/assets/logo_light.png'
import { useTheme } from '../../contexts/modeContext';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { ToggleButton } from '../../../styles/GlobalComponents';
import NavMobile from '../NavMobile';

const Nav: React.FC = () => {

    const [activeButton, setActiveButton] = useState({
        primary: true,
        secondary: false,
        ternary: false,
        quaternary: false,
        quinary: false,
    });

    const { mode, setMode } = useTheme()
    const { colors, title } = useContext(ThemeContext)

    return (
        <>
            <NavMobile />
            <NavContainer>
                <NavBar>
                    <div className='logo'>
                        <ImageLog width={150} objectFit={'contain'} src={title === 'light' ? Logo : LogoLight} />
                    </div>
                    <NavItem>
                        <ul>
                            <li>
                                <Link passHref href="#">
                                    <LinkButton
                                        onClick={() => setActiveButton({
                                            primary: true,
                                            secondary: false,
                                            ternary: false,
                                            quaternary: false,
                                            quinary: false,
                                        })}
                                        active={activeButton.primary}  >Inicio</LinkButton>
                                </Link>
                            </li>
                            <li>
                                <Link passHref href="#sectionOne">
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
                                <Link passHref href="#sectionTwo">
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
                                <Link passHref href="#sectionThree">
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
                                <Link passHref href="#sectionFour">
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
                    <ToggleButton
                        onClick={setMode}>{mode === 'light' ? <FiToggleLeft /> : <FiToggleRight color={colors.primary} />}
                    </ToggleButton>
                </NavBar>
            </NavContainer>
        </>

    )
}

export default Nav;