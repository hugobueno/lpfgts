import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    min-height: 70vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    text-align: center;

    .accordion{
        width: 80%;
        border: .15rem solid ${props => props.theme.colors.text + 10};
        padding: 4rem;
        border-radius: 2rem;
        margin: 2rem 0;
        background-color: ${props => props.theme.colors.text_light};

        .accordion__button{
            border-radius: 1rem;
            border-bottom: .06rem solid ${props => props.theme.colors.primary};
            padding: 2rem;
            text-align: left;
            cursor: pointer;
            font-weight: 600;
            margin: 1rem 0;
            font-size: 1.3rem;
            background: linear-gradient(89.43deg, rgba(106, 213, 157, 0.2) 0.29%, #F4F4F4 61.21%, #F4F4F4 99.41%);
            transition: .3s ease-in-out;

            :hover{
                transition: .3s ease-in-out;
                background: linear-gradient(89.43deg, #6AD59D 0.29%, #F4F4F4 61.21%, #F4F4F4 99.41%);
            }
        }

        .accordion__panel{
            background-color: ${props => props.theme.colors.background};
            color: ${props => props.theme.colors.text};
            padding: 3rem 2rem;
            margin: 0rem 0;
            text-align: left;
            border-radius: 1.2rem;
        }
    }
     @media only screen and (max-width: 1000px) {
         .accordion{
             width: 95%;
             padding: .5rem;
             border-radius: 1rem;
         }

         .accordion__button{
             font-size: 1rem !important;
             border-radius: 1rem !important;
             padding: 1rem !important;

         }
     }
`;