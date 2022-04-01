import styled, { keyframes } from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    height: 6rem;
    padding: 0 1.5rem;
    display: none;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1rem solid ${props => props.theme.colors.border};
    position: relative;

    .logo{
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
    }

    @media only screen and (max-width: 1024px){
        display: flex;
    }
`;

interface IItensContainer {
    isOpen: boolean;
}

const AnimateItensContainer = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-1rem);
    }
    100% {
        opacit: 1;
        transform: translateX(0);
    }
`


export const ItensContainer = styled.div`
    display: ${(props: IItensContainer) => props.isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 92vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 6rem;
    left: 0;
    z-index: 4;
    animation: ${AnimateItensContainer} .3s ease-in-out;
    flex-direction: column;
    padding: 2rem;

    a{
        height: 10vh;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 1.5rem;
        margin: .25rem 0;
        border: .1rem solid ${props => props.theme.colors.border};
        font-weight: 600;
        border-radius: .5rem;
    }

    .f_contact_item{
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.text};

        p{
            font-size: .8rem !important;
        }
        
        svg{
            font-size: 6rem;
            margin-right: 1rem;
        }
    }

`;