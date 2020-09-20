import React from 'react'

import { Container, Input, Button, Text, Break } from './styles'

function SignUpForm() {
    return (
        <Container>
            <Text>Ready to watch? Enter your email to create or restart your membersh</Text>
            <Break />
            <Input placeholder="Email address" />
            <Button>Try it now <img src="/images/icons/chevron-right.png" alt=""/></Button>     
        </Container>
    )
}

export default SignUpForm