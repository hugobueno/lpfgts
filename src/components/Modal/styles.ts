import styled, { keyframes } from 'styled-components';

interface IContainerModal {
    open: boolean
}

const animationModal = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const ContainerModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: ${(props: IContainerModal) => props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    animation: ${animationModal} .24s ease-in-out forwards;
    background-color: #222222AA;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    border: transparent;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    background-color: #d63031cc;
    color: #fff;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: #d63031;
    }

    @media only screen and (max-width: 1024px){
        width: 3rem;
        height: 3rem;
    }
`;

const animateWrapper = keyframes`
    0%{
        transform: translateX(2rem);
    }
    100%{
        transform: translateX(0);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 40vw ;
    min-height: 50vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    position: relative;
    padding: 3rem;
    line-height: 2;
    animation: ${animateWrapper} .24s ease-out forwards;
    border-radius: .5rem;

    input{
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
        border: .2rem solid ${props => props.theme.colors.text};
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        margin: 0.5rem 0;
    }

    @media only screen and (max-width: 1024px){
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        min-width: 60%;
        justify-content: center;
        padding: 2rem;
        h1{
            font-size: 1.2rem;
        }
        margin: .5rem;

        input{
            height: 3rem;
            font-size: 1.1rem;
        }
    }
`;


export const LimitsSimularion = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    div{
        margin-right: 2rem;
    }

    label{
        font-size: 1rem;
        font-weight: 600;
    }
    p{
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 1024px){
        div{
            margin-left: 0rem;
        }
       label{
           font-size: .8rem;
       }
       p{
           font-size: 1rem;
       }
    }
`;