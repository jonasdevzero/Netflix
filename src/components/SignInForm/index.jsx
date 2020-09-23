import React, { useState } from 'react'

import { Container, Form, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles'

function SignInForm() {
    const [emailAddres, setEmailAddres] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddres === ''

    const signinSubmit = event => {
        event.preventDefault()

        // ...
    }

    return (
        <Container>
            <Title>Sign In</Title> 
            {error && <Error>{error}</Error>}

            <Form onSubmit={signinSubmit} method="POST">
                <Input
                    placeholder="Email address"
                    value={emailAddres}
                    onChange={event => setEmailAddres(event.target.value)}
                />
                <Input
                    autoComplete="off"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <Submit disabled={isInvalid} type="submit">Sign In</Submit>

                <Text>New to Netflix? <Link to="/signup">Sign up now.</Link></Text>
                <TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </TextSmall>
            </Form>
        </Container>
    )
}

export default SignInForm