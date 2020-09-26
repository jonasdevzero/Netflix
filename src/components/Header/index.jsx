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
    Profile,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from './styles'

import SignUpForm from '../EmailForm'

function Header({ children, src, browser = false, bg = true }) {
    return (
        browser ?
            (
                <Background src={src} smallView>
                    {children}
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

Header.Container = function HeaderContainer({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...rest }) {
    return <Group {...rest}>{children}</Group>
}

Header.Link = function HeaderLink({ children, ...rest }) {
    return <Link {...rest}>{children}</Link>
}

Header.Search = function HeaderSearch({ children, ...rest }) {
    return <Search {...rest}>{children}</Search>
}

Header.SearchIcon = function HeaderSearchIcon({ children, ...rest }) {
    return <SearchIcon {...rest}>{children}</SearchIcon>
}

Header.SearchInput = function HeaderSearchInput({ children, ...rest }) {
    return <SearchInput {...rest}>{children}</SearchInput>
}

Header.Profile = function HeaderProfile({ children, ...rest }) {
    return <Profile {...rest}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ children, ...rest }) {
    return <Picture {...rest}>{children}</Picture>
}

Header.Dropdown = function HeaderDropdown({ children, ...rest }) {
    return <Dropdown {...rest}>{children}</Dropdown>
}

Header.Feature = function HeaderFeature({ children, ...rest }) {
    return <Feature {...rest}>{children}</Feature>
}

Header.FilmFeature = function HeaderFilmFeature({ children, ...rest }) {
    return <FilmFeature {...rest}>{children}</FilmFeature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...rest }) {
    return <FeatureCallOut {...rest}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...rest }) {
    return <Text {...rest}>{children}</Text>
}

Header.PlayButton = function HeaderPlayButton({ children, ...rest }) {
    return <PlayButton {...rest}>{children}</PlayButton>
}

export default Header
