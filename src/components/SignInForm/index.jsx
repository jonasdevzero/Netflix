import React from 'react'

import { Container, Input, Button, Text, Break } from './styles'

function SignInForm() {
    return (
        <Container>
            <Input placeholder="Email address" />
            <Button>Try it now <img src="/images/icons/chevron-right.png" alt=""/></Button>
            <Break />
            <Text>Ready to watch? Enter your email to create or restart your membersh</Text>
        </Container>
    )
}

export default SignInForm