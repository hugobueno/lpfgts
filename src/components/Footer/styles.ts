import styled from 'styled-components';

export const Container = styled.footer`
    background-color: ${props => props.theme.colors.background_gray};
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const DataContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .f_header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .social_icons{
        display: flex;
        a{
            margin: 0 1rem;
            font-size: 2.4rem;
        }
    }

    .f_contact{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 2rem;
        margin: 2rem 0;

    }

    .f_contact_item{
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            font-size: 6rem;
            margin-right: 1rem;
        }
    }

    .f_terms{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        border-top: .1rem solid ${props => props.theme.colors.border};
        width: 100%;
        padding: 2rem 0;
        
        a{
            font-size: 1.4rem;
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            margin: 0 1rem;
        }
    }

    @media only screen and (max-width: 1000px) {
        .social_icons{
            a{
                font-size: 1.8rem;
                margin: 0 .5rem;
            }
        }

        .f_contact{
            display: flex;
            flex-direction: column;
        }
    }
`;