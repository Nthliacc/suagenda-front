import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #5424af;
    color: white;
`;
export const Header = styled.div`
  padding: 32px;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
  };
`;