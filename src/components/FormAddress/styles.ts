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

export const AddressData = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 1rem;
    background-color: ${props => props.theme.colors.primary};
    margin: 1rem 0;
    flex-wrap: wrap;
    div{
        display: flex;
        flex-direction: column;
        margin: .5rem 1rem;
        width: calc(50% - 2rem);
        color: #fff;
        label{
            font-size: .8rem;
            font-weight: 700;
        }
        span{
            font-size: 1rem;
            flex-wrap: nowrap;
        }


        @media only screen and (max-width: 1024px){
            width: 100%;
            margin: .25rem 1rem;

            label{
                font-size: .7rem;
                font-weight: 700;
            }
            span{
                font-size: .85rem;
                flex-wrap: nowrap;
            }

        }
    }

`;