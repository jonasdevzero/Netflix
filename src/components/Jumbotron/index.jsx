import React from 'react'

import { Container, Wrap, Title, Subtitle, Image, Item, Content } from './Styles'
import jumbotronData from '../../assets/jumbotronData.json'

function Jumbotron() {
    return (
        <Container>
            {jumbotronData.map(item => (
                <Item key={item.id}>
                    <Content direction={item.direction}>
                        <Wrap>
                            <Title>{item.title}</Title>
                            <Subtitle>{item.subTitle}</Subtitle>
                        </Wrap>
                        <Wrap>
                            <Image src={item.image} alt={item.alt} />
                        </Wrap>
                    </Content>
                </Item>
            ))}
        </Container>
    )
}

export default Jumbotron
