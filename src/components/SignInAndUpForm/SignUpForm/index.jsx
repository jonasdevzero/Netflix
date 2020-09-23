import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../../context/firebase'

import * as ROUTES from '../../../constants/routes'

import { Container, Form, Error, Title, Text, TextSmall, Link, Input, Submit } from '../styles'

function SignUpForm() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const signUpSubmit = event => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(result => 
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(_ => {
                    history.push(ROUTES.BROWSE)
                })    
            ).catch(error => {
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <Container>
            <Title>Sign Up</Title>
            {error && <Error>{error}</Error>}


            <Form onSubmit={signUpSubmit} method="POST">
                <Input 
                    placeholder="First Name"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
                <Input 
                    placeholder="Email Address"
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
                <Submit disabled={isInvalid} type="submit">
                    Sing Up
                </Submit>

                <Text>
                    Already a user? <Link to="/signin">Sign In now.</Link>
                </Text>
                <TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </TextSmall>
            </Form>
        </Container>
    )
}

export default SignUpForm