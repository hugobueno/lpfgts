import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    /* background-color: ${props => props.theme.colors.background}; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
`;

export const DataContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
    padding: 2rem 0;

    h1, p {
        width: 85%;
    }

    .row-right{
        display: flex;
        justify-content: flex-end !important;
        align-items: center;
    }

    .row-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 2rem 0;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
    }
`;

export const Card = styled.div`
    width: 31%;
    display: grid;
    grid-template-rows: 7rem 1fr;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    padding: 4rem 1.5rem;
    border-radius: 2rem;
    margin: 2rem 0rem 2rem 0rem;
    text-align: left;
    transition: all 0.24s ease-in-out;
    background: linear-gradient(89.43deg, ${props => props.theme.colors.primary + 20} 0.29%, ${props => props.theme.colors.background} 61.21%, ${props => props.theme.colors.background} 99.41%);
    color: ${props => props.theme.colors.text};
    
    svg{
        font-size: 5rem;
    }

    h1, p {
        width: 100%;
    }

    @media only screen and (max-width: 1024px) {
        width: 90%;
        margin: 1rem 0;

        h1{
            font-size: 1.4rem !important;
            line-height: 1.4;
            margin-bottom: .5rem;
        }
        p{
            font-size: .9rem !important;
        }
    }

`;