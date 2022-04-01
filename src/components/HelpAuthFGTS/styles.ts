import styled, { keyframes } from 'styled-components';

interface IContainer {
    isOpen: boolean
}


const animateContainer = keyframes`
    from{
        opacity: 0;
        transform: translateX(-1rem);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background + 'ee'};
    z-index: 1000;
    display: ${(props: IContainer) => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    animation: ${animateContainer} .24s ease-in-out forwards;
    justify-content: center;
    align-items: center;
`;


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 90vh;
    background-color: #fff;
    max-width: 45rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: fit-content 50vh 5rem;
    grid-gap: 1rem;
    padding: 2rem;

    img{
        object-fit: contain;
    }

    .close_step_btn{
        button{
            width: 100%;
        }
    }

    @media only screen and (max-width: 1024px){
        max-height: 100vh;
    }
`;

export const Footer = styled.div`
    display: flex;
    /* background-color: #f0f; */
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

interface ISquareButton {
    active: boolean,
    theme?: {
        colors: {
            primary: string
        }
    }
}

export const SquareButton = styled.button`
    height: 2rem;
    width: 2rem;
    background-color: ${(props: ISquareButton) => props.active ? props.theme?.colors.primary : props.theme?.colors.primary + '10'};
    border: none;
    outline: none;
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
`;


export const StepsIcons = styled.div`
    svg{
            margin: .2rem;
        }
`;


interface IItemCircle {
    active: boolean,
    theme: {
        colors: {
            primary: string,
        }
    }
}


export const ItemCircle = styled.div`
    height:1rem;
    width:1rem;
    background-color: ${(props: IItemCircle) => props.active ? props.theme.colors.primary : 'transparent'} ;
    border-radius: 50%;
    border: .15rem solid ${(props: IItemCircle) => props.active ? props.theme.colors.primary : '#222'} ;
    margin: .15rem;
`;