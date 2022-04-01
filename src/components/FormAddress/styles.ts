import styled from 'styled-components';


export const ContainerStep = styled.form`
    width:  100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .wrap{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: .5rem;
        width: 50%;
        
    }

    .group{
        display: flex;
        flex-direction: column;
        margin: .5rem;
    }


    @media only screen and (max-width: 1024px){
        justify-content: flex-start;

    }
    
    @media only screen and (max-width: 768px){
        /* width: 85%; */
        .wrap{
            width: 100%;
        }
        
    }

    @media only screen and (max-width: 480px){
        padding: 1rem;
        width: 100%;
        h1{
            font-size: 1.2rem;
        }
    }
`;