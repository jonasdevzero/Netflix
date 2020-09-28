import React from 'react'

import Header from '../components/Header'
import SignInForm from '../components/SignInAndUpForm/SignInForm'
import Footer from '../components/Footer'

function Signin() {
    return (
        <>
            <Header form={false}>
                <SignInForm />
            </Header>
            
            <Footer signInOrUp={true} />

        </>
    )
}

export default Signin
