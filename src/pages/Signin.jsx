import React from 'react'

import Header from '../components/Header'
import SignInForm from '../components/SignInAndUpForm/SignInForm'
import Footer from '../components/Footer'

function Signin() {
    return (
        <>
            <Header emailForm={false}>
                <SignInForm />
                <Footer signInOrUp={true} />
            </Header>
            
           
        </>
    )
}

export default Signin
