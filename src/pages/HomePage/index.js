import React from 'react';
import { Login } from './Login';
import { Signup } from './Signup';
import { Container, Logo, Buttons } from './styled';
import logo from '../../components/Images/logo.png';

export const HomePage = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Buttons>
                <Login />
                <Signup />
            </Buttons>
        </Container>
    );
};