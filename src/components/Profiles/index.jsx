import React from 'react'

import Header from '../Header'
import { Container, Title, List, Item, Picture, Name } from './styles'

function Profiles({ user, setProfile }) {
    return (
        <>
            <Header browse={true} profile={true} />
            <Container>
                <Title>Who´s watching?</Title>
                <List>
                    <Item onClick={_ => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                        <Picture src={user.photoURL ? `/images/users/${user.photoURL}.png` : '/images/misc/loading.gif'} />
                        <Name>{user.displayName}</Name>
                    </Item>
                </List>
            </Container>
        </>
    )
}

export default Profiles
