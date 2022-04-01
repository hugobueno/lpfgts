import styled from 'styled-components';

export const PhotoContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    position: relative;
    border-radius: 1rem;
    justify-content: center;
    align-items: flex-end;

    ::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: ${props => props.theme.colors.primary};
        z-index: -1;
        border-radius: 5rem 5rem 5rem 0;
    }
   
    ::before{
        content: '';
        position: absolute;
        bottom: 2rem;
        right: .5rem;
        width: 80%;
        height: 60%;
        background-color: ${props => props.theme.title === 'light'? props.theme.colors.text: props.theme.colors.secundary};
        z-index: -1;
        border-radius: 5rem;
    }
`;