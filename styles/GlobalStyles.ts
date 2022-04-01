
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
     
    }
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        background-color: ${props => props.theme.colors.background};
        background-position:  6px 0, 6px 0, 0 0, 0 0;
        background-size: 6px 6px;
        background-repeat: repeat;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .css-1s2u09g-control{   
        min-width: 15rem;
        height: 4rem !important;
        border-radius: 0.5rem !important;
        border: .15rem solid ${props => props.theme.colors.text} !important;
        margin: 1rem 1rem 0rem 0 !important;
        background-color: transparent !important;

        @media only screen and (max-width: 1024px){
            margin: 1rem 0rem .5rem 0 !important;
        }

        @media only screen and (max-width:375px){
            height: 3rem !important;
        }
    }

    .w-100{
        width: 100% !important;
    }

    .css-1pahdxg-control{
        min-width: 15rem;
        height: 4rem !important;
        border-radius: 0.5rem !important;
        border: .15rem solid ${props => props.theme.colors.text} !important;
        margin: 1rem 1rem 0rem 0 !important;
        background-color: transparent !important;

        @media only screen and (max-width:375px){
            height: 3rem !important;
        }
    }

    .css-14el2xx-placeholder{
        color: ${props => props.theme.colors.text} !important;
        font-weight: 600;
    }

    .css-qc6sy-singleValue{
        font-weight: 600;
        color: ${props => props.theme.colors.text} !important;
    }

    .css-1okebmr-indicatorSeparator{
        background-color: ${props => props.theme.colors.text} !important;
    }

    .css-tlfecz-indicatorContainer{
        color: ${props => props.theme.colors.text} !important;
    }

   
`