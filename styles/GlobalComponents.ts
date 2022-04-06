import styled from 'styled-components';

export const GlobalContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .test {
        width: 100%;
        background-color: #f0f;
        display: flex;
        justify-content: center;
        align-items: center;
        image{
            width: 100vw;
            object-fit: fill;  
        }
    }
`;

interface ITitle {
    fontSize?: string,
    color?: string,
    theme?: {
        colors: {
            text: string
        }
    }
}

export const Title = styled.h1`
    font-size: ${(props: ITitle) => props.fontSize || '2rem'};
    color: ${(props: ITitle) => props.color || props.theme?.colors.text};
    line-height: 1.2;
    width: 95%;
    margin: .5rem 0;

    @media only screen and (max-width: 1024px){
        font-size: 2rem;
    }

    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
    }

`;

export const Description = styled.p`
    font-size: ${(props: ITitle) => props.fontSize || '1.2rem'};
    color: ${(props: ITitle) => props.color || props.theme?.colors.text};
    line-height: 1.5;
    margin: .5rem 0;
    width: 95%;

    @media only screen and (max-width: 1024px){
        font-size: 1rem;
    }

    @media only screen and (max-width: 768px){
        font-size: .9rem;
    }
`;

interface IButton {
    backgroundColor?: string,
    margin?: string
}

export const Button = styled.button`
    background-color: ${(props: IButton) => props.backgroundColor || '#000'};
    color: ${props => props.color || '#fff'};
    font-size: 1.2rem;
    font-weight: 900 !important;
    transition: all 0.3s ease-in-out;
    /* padding: 1.1rem 3rem; */
    border-radius: .5rem;
    cursor: pointer;
    margin: ${(props: IButton) => props.margin || '.5rem .5rem .5rem .5rem'};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.05));
    height: 4rem;
    padding: 0 2rem;
    line-height: 1;
    width: fit-content;
    svg{
        margin-left: .5rem;
    }

    :hover{
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 1024px){
        font-size: 1rem;
        height: 3rem;
        padding: 0 1rem;
    }
    
    @media only screen and (max-width: 375px) {
        font-size: .9rem;
        margin:.5rem;
        padding: 0rem 1rem;
    }

`;

interface IInput {
    width?: string
}

export const Input = styled.input`
    width: ${(props: IInput) => props.width || '25vw'};
    height: 4rem;
    border-radius: 0.5rem;
    border: .2rem solid ${props => props.theme.colors.text};
    padding: 1rem;
    font-size: 1.2rem;
    outline-color: ${props => props.theme.colors.primary};

    :focus{
        border: .2rem solid ${props => props.theme.colors.primary};
    }
   
`;

export const ButtonLink = styled.a`
    background-color: ${(props: IButton) => props.backgroundColor || '#000'};
    color: ${props => props.color || '#fff'};
    font-size: 1.2rem;
    font-weight: 900 !important;
    transition: all 0.3s ease-in-out;
    border-radius: .5rem;
    cursor: pointer;
    margin: ${(props: IButton) => props.margin || '.5rem .5rem .5rem .5rem'};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.05));
    height: 4rem;
    padding: 0 2rem;
    line-height: 1;
    svg{
        margin-left: .5rem;
    }

    :hover{
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 1024px){
        font-size: 1rem;
        height: 3rem;
        padding: 0 1rem;
    }
    
    @media only screen and (max-width: 375px) {
        font-size: .9rem;
        margin:.5rem;
        padding: 0rem 1rem;
    }

`

export const ToggleButton = styled.button`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;