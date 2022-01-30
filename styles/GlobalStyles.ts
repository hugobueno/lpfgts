
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
        background-color: #fff;
        /* overflow: hidden; */

        
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    @media only screen and (max-width: 1000px) {
        h1{
            font-size: 1.8rem !important;
        }
        p{
            font-size: 1rem !important;
        }

    }
`