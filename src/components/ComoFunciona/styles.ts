import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const DataContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    .row-right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .row-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 1000px) {
        justify-content: center;
        align-items: center;

        .header_data{
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 20rem;
    height: auto;
    min-height: 18rem;
    display: grid;
    grid-template-rows: 1fr 2.5fr;
    background-color: ${props => props.theme.colors.background};
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1.5rem;
    border-radius: 2rem;
    margin: 6rem 0rem 2rem 0rem;
    svg{
        font-size: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-40%);
    }

    @media only screen and (max-width: 1000px) {
        font-size: 5rem !important;
    }
`;

export const ButtonDown = styled.button`
    width: 6rem;
    height: 6rem;
    background-color: ${props => props.theme.colors.background};
    border-radius: 2rem;
    border: none;
    filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.15));
    cursor: pointer;
    svg{
        font-size: 3rem;
        color: ${props => props.theme.colors.primary};
    }
`;