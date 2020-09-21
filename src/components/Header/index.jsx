import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import { Container, Background, Logo, ButtonLink, Feature, Title, Subtitle } from './styles'
import SignUpForm from '../SignUpForm'

function Header({ children, background = true }) {
    return (
        background ?
        <Background>
            <Container>
                <ReactRouterLink to={ROUTES.HOME}>
                    <Logo src="/images/misc/logo.svg" alt="Netflix" />
                </ReactRouterLink>
                <ButtonLink to={ROUTES.SIGN_IN}>
                    Sign In
                </ButtonLink>
            </Container>
            <Feature>
                <Title>Unlimited films, TV programmes and more.</Title>
                <Subtitle>Watch any where, Cancel at any time.</Subtitle>
                <SignUpForm />
            </Feature>
        </Background>
        :
        children
    )
}

export default Header
