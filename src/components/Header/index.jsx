import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import { Container, Background, Logo, ButtonLink, Feature, Title, Subtitle } from './styles'
import SignUpForm from '../EmailForm'

function Header({ children, bg = true }) {
    return (
        bg ?
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
            <Background>
                <Container>
                    <ReactRouterLink to={ROUTES.HOME}>
                        <Logo src="/images/misc/logo.svg" alt="Netflix" />
                    </ReactRouterLink>
                    <ButtonLink to={ROUTES.SIGN_IN}>
                        Sign In
                </ButtonLink>
                </Container>
                { children }
            </Background>
    )
}

export default Header
