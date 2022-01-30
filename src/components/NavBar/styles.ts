import styled, { DefaultTheme, keyframes } from 'styled-components';


export const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    min-height: 8rem;
    /* background-color: ${props => props.theme.colors.background}; */
    justify-content: center;
    align-items: center;
    border-bottom: .1rem solid ${props => props.theme.colors.border};
`;

export const NavBar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 2rem; */
    max-width: 1260px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ul{
        display: flex;  
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            /* margin: 0 .2rem; */
        }
    }

`;

interface ILinkButton {
    active?: boolean,
    theme: {
        colors: {
            primary: string,
            quaternary: string,
            text_button: string,
            text_light: string,
            text: string,
        }
    }
}

const animateLinkButton = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%) rotate(-45deg);
    }
    100% {
        opacity: 1;
        transform: translateX(50%) rotate(-45deg) scale(8);

    }
`;


export const LinkButton = styled.a`
    text-decoration: none;
    color: ${(props: ILinkButton) => props.active ? props.theme.colors.text : props.theme.colors.text_button};
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    background-color: ${(props: ILinkButton) => props.active ? props.theme.colors.primary : 'transparent'};
    cursor: pointer;
    padding: .5rem 1rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden !important;
    z-index: 1;
    border: none;
    margin: 0 .5rem;

`;