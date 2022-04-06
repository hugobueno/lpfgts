import styled from 'styled-components';

export const TermosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    max-width: 1200px;
    padding: 4rem 2rem;

    color: ${props => props.theme.colors.text};

    h1{
        margin-top: 2rem;
    }
    p{
        margin-top: 1rem;
    }


`;