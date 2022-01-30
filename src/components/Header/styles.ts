import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    /* background-color: #ff0; */
    max-width: 1260px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
`;

export const DataContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    line-height: 5 !important;
`;

export const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;