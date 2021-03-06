import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    svg{
        font-size: 5rem !important;
        color: ${props => props.theme.colors.text};
    }
`;