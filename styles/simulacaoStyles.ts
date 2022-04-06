import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "data form";

    @media only screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:  "form";

    }
`;

export const StepContainer = styled.div`
    grid-area: 'data';
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.title === 'light' ? props.theme.colors.background_gray : props.theme.colors.primary};
    padding: 2rem;

    @media only screen and (max-width: 1440px){
        padding: 1rem;
    }

    @media only screen and (max-width: 1024px){
        display: none;
    }
`;

export const StepImage = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1, p {
        /* width: 85%; */
    }

    img{
        width: 15rem !important;
    }

    @media only screen and (max-width: 1440px){
        h1{
            font-size: 1.4rem;
        }
        p{
            font-size: 1.1rem;
        }
    }

    @media only screen and (max-width: 1440px){
        h1{
            font-size: 1.4rem;
        }
        p{
            font-size: 1.1rem;
        }
    }
`;

export const GridForm = styled.div`
    grid-area: 'form';
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr;
    justify-content: center;
    align-items: center;
`;



export const AutorizationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;

    .row{
        flex-wrap: wrap;
        display: flex;
    }
   
    p{
        font-size: 1.2rem;
        margin: 1rem;
        color: ${prosp => prosp.theme.colors.text};
    }
    @media only screen and (max-width: 768px){
        padding: 1rem;
        width: 100%;
    }
`;

export const SimulationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 3rem;

    label{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 600px){
        padding:0rem 0 2rem 2rem;
    }

    @media only screen and (max-width: 375px){
        padding: 0rem 0 1rem 1rem;
    }
   
`;

export const SimulationHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};

    .money_available{
        color: ${props => props.theme.colors.primary};
    }

    @media only screen and (max-width: 1150px){
        h1{
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 600px){
        h1{
            font-size: 1.1rem;
        }
    }

`;

export const SimulationList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    
    @media only screen and (max-width: 560px){
        /* justify-content: center; */
        overflow-y: scroll;
        max-height: 50vh;

        ::-webkit-scrollbar{
            width: 0;
        }
    }
    
`;

interface ISimulationItem{
    isSelected: boolean;
    theme:{
        colors:{
            primary: string;
            background_gray: string;
            text: string;
        }
    }
}

export const SimulationItem = styled.div`
    display: flex;
    margin: .25rem .5rem .25rem 0;
    border: .15rem solid ${(props:ISimulationItem)=> props.isSelected ? props.theme.colors.primary : '#ffffff20'};
    background-color:  ${props => props.theme.colors.background};
    padding: .5rem 1rem;
    border-radius: 1rem;
    color: ${(props:ISimulationItem)=> props.isSelected ? props.theme.colors.text : '#ffffff50'};
    cursor: pointer;
    h1{
        font-size: 1.2rem;
        font-weight: 600
    }
    span{
        font-size: .8rem;
    }

    @media only screen and (max-width: 768px){
        h1{
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 560px){
        width: calc(50% - 1rem);
        
    }

    @media only screen and (max-width: 425px){
        h1{
            font-size: .9rem;
            font-weight: 600
        }
        span{
            font-size: .7rem;
        }
    }

    @media only screen and (max-width: 320px){
        h1{
            font-size: .9rem;
            font-weight: 600
        }
        span{
            font-size: .65rem;
        }
    }
`;

export const SimulationTaxes = styled.div`
    display: flex;
    width: 100%;
    /* background-color: #f0f; */

    @media only screen and (max-width: 425px){
        justify-content: space-evenly;
    }
`;

export const SimulationTaxesItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    color: ${props => props.theme.colors.text};

    @media only screen and (max-width: 1024px){
        h1{
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 600px ){
        span{
            font-size: .75rem;
        }
        h1{
            font-size: 1rem;
        }
        margin-right: 1rem;
    }

`;

export const SimulationHelp = styled.div`
    display: flex;
    margin: 2rem 0;
    justify-content: center;
    align-items: center;
    svg{
        margin-right: .5rem;
    }
`;

export const ButtonsSection = styled.div`
    display: flex;

    @media only screen and (max-width: 425px ){
        button{
            margin: .5rem .5rem .5rem .25rem;
        }
    }
`;

export const InputText = styled.input`
        width: auto;
        max-width: 15rem;
        background-color: transparent;
        border: .2rem solid transparent;
        border-bottom: .2rem solid ${props => props.theme.colors.text};
        padding: 1rem;
        font-size: 2rem;
        font-weight: 600;
        /* color: ${props => props.theme.colors.quaternary}; */
        :hover{
            background-color: #fff;
            border: .2rem solid #ccc;
        }

`;

export const HeaderSimulation = styled.div`
    width: 100%;
    display: flex;
    padding: 0 2rem ;
    justify-content: space-between;
    align-items: center;

    .btn_go_back{       
        height: 2.5rem;
        width: 2.5rem;
        color: ${props => props.theme.colors.text};
        border-radius: .5rem;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props => props.theme.title === 'light' ? props.theme.colors.background_gray : props.theme.colors.primary};
    }

    .secure_ambient{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;  
        color: ${props => props.theme.colors.text};
        
        svg{
            margin-right: .25rem;
        }
        }    
`;

