import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 80vh;
    /* background-color: #ff0; */
    max-width: 1260px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'data' 'photo';
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
    padding: 2rem;

    @media only screen and (max-width: 1024px) {
        grid-template-areas: 'photo' 'data';

        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        padding: 1rem;
        grid-gap: 0rem;
    }
`;

export const DataContainer = styled.div`
    grid-area: data;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    line-height: 5 !important;

    @media only screen and (max-width: 1024px) {
        align-items: center;
    }

   
`;

export const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    grid-area: 'photo';
`;