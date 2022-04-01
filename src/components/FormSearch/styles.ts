import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    width: 100%;

    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* padding: 1rem; */

          
            span{
                font-size: .8rem;
                /* color: #f22; */
                margin-bottom: 1rem;
            }

            a{
                font-size: .9rem;
                color: black;
                text-decoration: underline;
                /* padding: 1rem; */
                font-weight: 600;
                color: ${props => props.theme.colors.text};
                margin: 1rem 0;
            }
        }
    }

    .terms{
        margin: .5rem 0;
    }


    @media only screen and (max-width: 1024px){
        padding: 1rem;
    }
`;