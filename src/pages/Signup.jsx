import React from 'react'

import Header from '../components/Header'
import SignUpForm from '../components/SignInAndUpForm/SignUpForm'
import Footer from '../components/Footer'

function Signup() {
    return (
        <>
            <Header form={false}>
                <SignUpForm />
            </Header>
            <Footer signInOrUp={true} />
        </>
    )
}

export default Signup
