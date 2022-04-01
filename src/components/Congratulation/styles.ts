import styled from 'styled-components';

interface IContainerCongratulation{
    open: boolean
}

export const ContainerCongratulation = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    display: ${(props: IContainerCongratulation)=> props.open ? 'flex': 'none'};
`;