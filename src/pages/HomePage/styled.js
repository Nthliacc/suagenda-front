import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #5424af;
    color: white;
`;
export const Logo = styled.div`
    padding: 32px;
    align-self: center;
`;
export const Buttons = styled.div`
    padding: 32px;
    display: flex;
    justify-content: space-evenly;
    
    @media(max-width: 800px) {
        padding: 26px;
        flex-direction: column;
        align-items: center;
        button{
            margin: 12px;
        }
    }
`;