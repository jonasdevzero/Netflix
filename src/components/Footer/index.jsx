import React from 'react'

import { Container, Row, Column, Link, Title, Text, Break, SignInFooterContainer } from './Styles'

function Footer({ signInOrUp = false }) {
    return (
        !signInOrUp ?
            <Container>
                <Title>Questions? Contact us.</Title>
                <Break />
                <Row>
                    <Column>
                        <Link href="#">FAQ</Link>
                        <Link href="#">Investor Relations</Link>
                        <Link href="#">Ways to Watch</Link>
                        <Link href="#">Coporate Information</Link>
                        <Link href="#">Netflix Origials</Link>
                    </Column>
                    <Column>
                        <Link href="#">Help Center</Link>
                        <Link href="#">Jobs</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Contact Us</Link>
                    </Column>
                    <Column>
                        <Link href="#">Account</Link>
                        <Link href="#">Redem Gift</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Speed Test</Link>
                    </Column>
                    <Column>
                        <Link href="#">Media Center</Link>
                        <Link href="#">Buy Gift Cards</Link>
                        <Link href="#">Cookie Preferences</Link>
                        <Link href="#">Legal Notices</Link>
                    </Column>
                </Row>
                <Break />
                <Text>Netflix Brasil</Text>
            </Container>
            :
            <SignInFooterContainer signInOrUp={signInOrUp}>
                <Title>Questions? Contact us.</Title>
                <Break />
                <Row>
                    <Column>
                        <Link href="#">FAQ</Link>
                        <Link href="#">Coockie Preferences</Link>
                    </Column>
                    <Column>
                        <Link href="#">Help Center</Link>
                        <Link href="#">Corporate Information</Link>
                    </Column>
                    <Column>
                        <Link href="#">Terms of Use</Link>
                    </Column>
                    <Column>
                        <Link href="#">Privacy</Link>
                    </Column>
                </Row>
            </SignInFooterContainer>
    )
}

export default Footer
