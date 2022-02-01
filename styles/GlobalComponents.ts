import styled from 'styled-components';

export const GlobalContainer = styled.main`
    width: 100%;
    height: 100%;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #f0f; */

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

interface ITitle{
    fontSize?: string,
    color?: string,
}

export const Title = styled.h1`
    font-size: ${(props: ITitle) => props.fontSize || '2rem'};
    color: ${(props: ITitle) => props.color || '#000'};
    line-height: 1.2;
    width: 95%;
    margin: .5rem 0;
`;

export const Description = styled.p`
    font-size: ${(props: ITitle) => props.fontSize || '1.2rem'};
    color: ${(props: ITitle) => props.color || '#000'};
    line-height: 1.5;
    margin: .5rem 0;
    width: 95%;
`;

interface IButton{
    backgroundColor?: string,
}

export const Button = styled.button`
    background-color: ${(props: IButton) => props.backgroundColor || '#000'};
    color: ${props => props.color || '#fff'};
    font-size: 1.3rem;
    font-weight: 900 !important;
    transition: all 0.3s ease-in-out;
    padding: 1.5rem 3.2rem;
    border-radius: .8rem;
    cursor: pointer;
    margin: 1rem 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.15));

    svg{
        margin-left: .5rem;
    }

    :hover{
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.primary};
    }
`;