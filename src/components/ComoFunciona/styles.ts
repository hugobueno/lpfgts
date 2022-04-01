import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1.5rem;

    @media only screen and (max-width: 375px){
        padding: .5rem;
    }
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

    @media only screen and (max-width: 1024px) {
        justify-content: center;
        align-items: center;

        .header_data{
            display: flex;
            flex-direction: column;
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
    margin: 2rem 0 1rem 0;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 20rem;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2.5rem 1fr;
    background-color: ${props => props.theme.colors.background};
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem 1.5rem;
    border-radius: 2rem;
    margin: 2.5rem 1rem 2rem 0rem;
    min-height: 18rem;
    color: ${props => props.theme.colors.text};
    svg{
        color: ${props => props.theme.colors.text};
        font-size: 8rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-40%);

    }

    @media only screen and (max-width: 1024px) {
        font-size: 1rem !important;
        width: 100%;
        min-height: auto;
        margin-right: 0;
    }

    @media only screen and (max-width:320px){
        h1{
            font-size: 1.6rem !important;
        }
        p{
            font-size: .9rem !important;
        }
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


    @media only screen and (max-width: 1024px){
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;

        svg{
            font-size: 2rem;
        }
    }
`;