import React, { useContext } from 'react'

import { Body } from './styles'

function AccordionBody({ children, context }) {
    const { toggleShow } = useContext(context)

    return toggleShow ? <Body>{children}</Body> : null
}

export default AccordionBody
