import React from 'react'

import Header from '../components/Header'
import SignUpForm from '../components/SignInAndUpForm/SignUpForm'
import Footer from '../components/Footer'

function Signup() {
    return (
        <Header bg={false}>
            <SignUpForm />
            <Footer signInOrUp={true} />
        </Header>
    )
}

export default Signup
