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
`;

export const Card = styled.div`
    width: 31%;
    /* height: 100%; */
    /* min-height: 23rem; */
    display: grid;
    grid-template-rows: 7rem 1fr;
    /* background-color: ${props => props.theme.colors.text_light}; */
    justify-content: cefnter;
    align-items: flex-start;
    position: relative;
    padding: 4rem 1.5rem;
    border-radius: 2rem;
    margin: 2rem 0rem 2rem 0rem;
    text-align: left;
    /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.19); */
    transition: all 0.24s ease-in-out;
    background: linear-gradient(89.43deg, rgba(106, 213, 157, 0.1) 0.29%, #f4f4f4 61.21%, #f4f4f4 99.41%);

    
    svg{
        font-size: 5rem;
    }

    h1, p {
        width: 100%;
    }

`;