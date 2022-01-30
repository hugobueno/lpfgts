import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    /* background-color: #ff0; */
    background-color: #fff;
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
    max-width: 1200px;
    /* background-color: #f00; */

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        padding: 1rem;
        img{
            width: 60% !important;

        }
    }
`;

export const CardItem = styled.div`
    width: 100%;
    height: 10rem;
    background-color: ${props => props.theme.colors.border};
    margin: 2rem 0;
    border-radius: 2rem;
    background: linear-gradient(89.43deg, rgba(106, 213, 157, 0.2) 0.29%, #F4F4F4 61.21%, #F4F4F4 99.41%);
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.04);  
    display: grid;
    grid-template-columns: 6rem 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;


    svg{
        font-size: 4rem;
    }

    div:nth-child(2){
        text-align: left;
    }
    

    h1, p{
        width: 90%;
    }

    @media only screen and (max-width: 1000px) {
        grid-template-columns: auto auto;
        height: 8rem;
        margin: 1rem 0;
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

