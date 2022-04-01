import styled from 'styled-components';

export const GroupRadio = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: .5rem .5rem .5rem 0;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 600;
    
    div{
        display: flex;
        flex-wrap: wrap;
    }
    
    label{
        margin: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            height: 1.5rem;
            width: 1.5rem;
            margin-right: .25rem;
        }
    }
`;