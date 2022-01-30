
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
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`