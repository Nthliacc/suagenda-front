import React from 'react';
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

export const PageError = () => {
    return (
        <Container>
            <h1>Pagina não encontrada</h1>
            <h4>Error 404!</h4>
        </Container>
    );
};