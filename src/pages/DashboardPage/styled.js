import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #5424af;
    color: white;
`;
export const Title = styled.div`
  height: 20%;
  padding: 26px;
  display: flex;
  align-items: center;
  h2{
    text-align:center;
  }
  div{
    padding: 15px;
  }
  button{
    padding: 0;
  }
`;

export const ListPageWrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  @media(max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;