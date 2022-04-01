import styled, { keyframes } from 'styled-components';

interface IProps {
  width?: string,
  textAling?: string
}

const animateInput = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props: IProps)=> props.width || '100%'};
    position: relative;
    height: 4rem;
    border-radius: 0.5rem;
    border: .15rem solid ${props => props.theme.colors.text};
    margin: 1rem 1rem 0rem 0;
    animation: ${animateInput} .24s linear forwards;

    input{
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        outline: 0;
        border: none;
        border-radius: 4px;
        background: ${props => props.theme.colors.background};
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
    }

    label{
        position: absolute;
        font-size: 1rem;
        padding: 0 1rem;
        color: ${props => props.theme.colors.text};
        pointer-events: none;
        top: 50%;
        left: .5rem;
        transform: translateY(-50%) ;
        transition: all 0.2s ease-out; 
        background-color: ${props => props.theme.colors.background};
        border-radius: 1rem;
        font-weight: 600;

        
    }

    :focus-within label{
        top: 0;
    }

    .active {
        transform: translateY(-50%) ;
        top: 0;
    }
    

    @media only screen and (max-width:1024px){
        width: 100%;
        margin: .5rem 0;
    }

    @media only screen and (max-width:375px){
        height: 3rem;
    }
    
`;