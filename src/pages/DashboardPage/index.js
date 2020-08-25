import React from 'react';
import { Section } from './Section';
import { Container, Header } from './styled';

export const DashboardPage = () => {
  return (
    <Container>
      <Header>
          <h2>Bem vind@, "Pessoa"!</h2>
      </Header>
      <Section />
    </Container>
  );
};