import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../../context/firebase'

import * as ROUTES from '../../../constants/routes'

import { Container, Form, Error, Title, Text, TextSmall, Link, Input, Submit } from '../styles'

function SignInForm() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const signInSubmit = event => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch(error => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <Container>
            <Title>Sign In</Title> 
            {error && <Error>{error}</Error>}

            <Form onSubmit={signInSubmit} method="POST">
                <Input
                    type="text"
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={event => setEmailAddress(event.target.value)}
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