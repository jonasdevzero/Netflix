import React, { useContext } from 'react'

import { Header } from './styles'

function HeaderAccordion({ children, context }) {
    const { toggleShow, setToggleShow } = useContext(context) 

    return (
        <Header onClick={() => setToggleShow(!toggleShow)}>
            {children}
            {toggleShow ? (<img src="/images/icons/close-slim.png" alt="Close"></img>) : (<img src="/images/icons/add.png" alt="Open" />)}
        </Header>
    )
}

export default HeaderAccordion
