import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import {
        Container,
        Background,
        Logo,
        ButtonLink,
        Feature,
        Title,
        Subtitle,
        FilmFeature,
        FeatureCallOut,
        Text,
        Link,
        Group,
        Picture,
        Dropdown,
        Profile
    } from './styles'

import SignUpForm from '../EmailForm'

function Header({ children, bg = true, src, user, firebase }) {
    return (
        src ?
            (
                <Background src={src} smallView>
                    <Container>
                        <Group>
                            <ReactRouterLink to={ROUTES.HOME}>
                                <Logo src="/images/misc/logo.svg" alt="Netflix" />
                            </ReactRouterLink>
                            <Link>Series</Link>
                            <Link>Films</Link>
                        </Group>
                        <Group>
                            <Profile>
                                <Picture src={user.photoURL} />
                                <Dropdown>
                                    <Group>
                                        <Picture src={user.photoURL} />
                                        <Link>{user.displayName}</Link>
                                    </Group>
                                    <Group>
                                        <Link onClick={_ => firebase.auth().signOut()}>Sing out</Link>
                                    </Group>
                                </Dropdown>
                            </Profile>
                        </Group>
                        {children}
                    </Container>
                    <FilmFeature>
                        <FeatureCallOut>Watch Joker Now</FeatureCallOut>
                        <Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                            futile attempt to feel like he's part of the world around him.
                            </Text>
                    </FilmFeature>
                </Background>
            )
            :
            (
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
                        {children}
                    </Background>
                    :
                    <Container>
                        <ReactRouterLink to={ROUTES.HOME}>
                            <Logo src="/images/misc/logo.svg" alt="Netflix" />
                        </ReactRouterLink>
                        {children}
                    </Container>
            )



    )
}

export default Header
