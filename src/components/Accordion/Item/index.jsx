import React, { useState, createContext } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import { Item } from './styles'

const ToggleContext = createContext()

function ItemAccordion({ body, header }) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item>
                <Header context={ToggleContext}>{header}</Header>
                <Body context={ToggleContext}>{body}</Body>
            </Item>
        </ToggleContext.Provider>
    )
}

export default ItemAccordion
