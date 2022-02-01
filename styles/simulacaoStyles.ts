import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "data form";
`;

export const StepContainer = styled.div`
    grid-area: data;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 1fr;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    padding: 2rem 5rem;
`;

export const StepImage = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1, p {
        width: 85%;
    }

    img{
        width: 15rem !important;
    }
`;

export const GridForm = styled.div`
    grid-area: form;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.text_light};
    padding: 3rem;
    width: 30vw;

    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 1rem;


            label{
                font-size: .9rem;
                font-weight: 600;
            }

            input{
                width: 25vw !important;
                height: 4rem;
                border-radius: 0.5rem;
                border: .2rem solid ${props => props.theme.colors.text};
                padding: 1rem;
                margin-bottom: 1rem;
                font-size: 1.2rem;
                margin: 0.5rem 0;
            }

            span{
                font-size: .8rem;
                color: #f22;
                margin-bottom: 1rem;
            }

            a{
                font-size: .9rem;
                color: black;
                text-decoration: underline;
                /* padding: 1rem; */
                font-weight: 600;

            }
        }
    }
`;

export const AutorizationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    div{
        display: flex;
        button{
            margin: .5rem;
        }
    }

    p{
        /* width: 50%; */
        font-size: 1.5rem;
        margin: 1rem
    }
    
`;

