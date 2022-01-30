import styled, { DefaultTheme, keyframes } from 'styled-components';


export const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    min-height: 8rem;
    /* background-color: #f0f; */
    justify-content: center;
    align-items: center;
`;

export const NavBar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    max-width: 1260px;
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
            margin: 0 .8rem;
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


export const LinkButton = styled.button`
    text-decoration: none;
    color: ${(props: ILinkButton) => props.active ? props.theme.colors.text_light : props.theme.colors.text_button};;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    background-color: ${(props: ILinkButton) => props.active ? '#fff' : 'transparent'};
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden !important;
    z-index: 1;
    border: none;

    ::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${(props: ILinkButton) => props.active ? props.theme.colors.primary : 'transparent'};
        left: 0;
        top: 0;
        transform: translateX(60%) rotate(-45deg) scale(2);
        z-index: -1;
        animation:    ${(props: ILinkButton)=> props.active? animateLinkButton: ''} .35s ease-in-out forwards;
    }

`;