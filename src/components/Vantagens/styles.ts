import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    /* background-color: #ff0; */
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    grid-gap: 1rem;

    .row-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1260px;
    padding: 0 2rem;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        padding: .5rem;
        img{
            width: 60% !important;

        }
    }
`;

export const CardItem = styled.div`
    width: 100%;
    height: 10rem;
    /* background-color: ${props => props.theme.colors.border}; */
    margin: 2rem 0;
    border-radius: 2rem;
    background: linear-gradient(89.43deg, ${props => props.theme.colors.primary + 29} 0.29%, ${props => props.theme.colors.background} 61.21%, ${props => props.theme.colors.background} 99.41%);
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.04);  
    display: grid;
    grid-template-columns: 6rem 1fr;
    grid-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    color: ${props => props.theme.colors.text};


    svg{
        font-size: 4rem;
    }

    div:nth-child(2){
        text-align: left;
    }
    

    h1, p{
        width: 90%;
    }

    @media only screen and (max-width: 1024px) {
        grid-template-columns: auto auto;
        height: auto;
        margin: 1rem 0;
        min-height: 8rem;
        h1{
            font-size: 1.2rem !important;
            line-height: 1.2;
        }

        p{
            font-size: .9rem !important;
        }
        svg{
            font-size: 2rem;
        }
    }
    
`;

