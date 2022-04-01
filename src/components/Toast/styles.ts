import styled, { keyframes } from 'styled-components';

interface IToastContainer {
    type: 'success' | 'warning' | 'error' | 'loading',
    open: boolean
}

const animateToast = keyframes`
    0%{
        opacity: 0;
        transform: translateX(1rem);
    }
    100%{
        transform: translateX(0);
        opacity: 1;

    }
`;

const animateToast2 = keyframes`
    0%{
        width: 100%;
    }
    100%{
        width: 0;
    }
`;


export const ToastContainer = styled.div`
    width: fit-content;
    height: fit-content;
    border: .15rem solid ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    top: 3rem;
    right: 3rem;
    display: ${(props: IToastContainer) => props.open === true ? 'grid' : 'none'};
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    border-radius: .1rem;
    animation: ${animateToast} .24s ease-in-out forwards;
    color: ${props => props.theme.colors.text};
    z-index: 1000 !important;
    svg{
        font-size: 3rem;
    }

    h1{
        font-size: 1.8rem;
    }

    p{
        font-size: 1.2rem;
    }


    @media only screen and (max-width: 1024px){
        top: 0;
        right: 0;
        width: 100%;
        height: auto;
        padding: 1rem;
        max-width: 26rem;
        svg{
            font-size: 2rem;
        }
        h1{
            font-size: 1.6rem;
            line-height: 1.2;
        }

        p{
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 375px){
      
        h1{
            font-size: 1.2rem;
        }

        p{
            font-size: .8rem;
        }
    }
`;

const animateLoader = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const animateDefaultToast = keyframes`
     0%{
        transform: rotate(300deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

interface ISvgContainer {
    type: 'success' | 'warning' | 'error' | 'loading',
}

export const SvgContainer = styled.div`
    svg{
        margin-right: 1rem;
        animation: ${(props: ISvgContainer) => props.type === 'loading' ? animateLoader : animateDefaultToast} ${(props: ISvgContainer) => props.type === "loading" ? '2s' : '.24s'} ${(props: ISvgContainer) => props.type === 'loading' ? 'infinite' : 'linear'};
        /* color: ${(props: ISvgContainer) => props.type === 'success' ? '#00cec9' : props.type === 'warning' ? '#fdcb6e' : props.type === 'error' ? '#d63031' : '#0984e3'}; */
    }
`;