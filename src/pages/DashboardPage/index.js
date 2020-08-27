import React, { useEffect } from 'react';
import { HeaderContainer } from './HeaderContainer';
import { Section } from './Section';
import { Container } from './styled';
import { useHistory } from 'react-router-dom';

export const DashboardPage = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (token === null) {
    history.push("/");
  }

  useEffect(() => {
  }, [history, token]);

  return (
    <Container>
      <HeaderContainer />
      <Section />
    </Container>
  );
};