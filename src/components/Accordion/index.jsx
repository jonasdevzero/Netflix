import React from 'react'

import faqsData from '../../assets/recurringQuestions.json'

import Item from './Item'
import { Container, Inner, Title, Frame } from './styles'

function Accordion({ children }) {
    return (
        <Container>
            <Inner>
                <Title>Frequently Asked Questions</Title>
                <Frame>
                    {faqsData.map(item => {
                        return (
                            <Item key={item.id} header={item.header} body={item.body} />
                        )
                    })}
                </Frame>
            </Inner>
            {children}
        </Container>
    )
}

export default Accordion
