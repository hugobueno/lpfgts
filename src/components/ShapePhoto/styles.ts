import styled from 'styled-components';

export const PhotoContainer = styled.div`
    width: 32rem;
    height: auto;
    display: flex;
    position: relative;
    border: .5rem solid ${props => props.theme.colors.primary};
    border-radius: 3rem;
    justify-content: center;
    align-items: center;

    .shape_square{
        width: 10rem;
        height: 10rem;
        background-color: ${props => props.theme.colors.ternary};
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 1.5rem;
        border: .5rem solid ${props => props.theme.colors.ternary};
        color: ${props => props.theme.colors.text_light};

        svg{
            font-size: 2rem;
        }

        span{
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
            margin: .5rem 0;
        }
    }


    .image_shape{
        background-color: ${props => props.theme.colors.primary};
        width: 32rem;
        height: auto;
        overflow: hidden;
        object-fit: cover;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            object-fit: cover;
            /* background-color: #f0f; */

        }
        
    }

    .shape_circle{
        border: .25rem solid ${props => props.theme.colors.ternary};
        position: absolute;
        top: 2rem;
        left: 2rem;
        z-index: 0;
        width: 32rem;
        height: 100%;
        border-radius: 2rem;
    }

    @media screen and (max-width: 1000px){
        width: 12rem;
        margin: 5rem 0;

        .shape_circle{
            width: 100%;
        }

        .shape_square{
            width: 8rem;
            height: 6rem;
        }

    }

    
`;