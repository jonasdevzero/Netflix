import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'

import { Container, Button, Overlay, Inner, Close } from './styles'

export const PlayerContext = createContext()

function Player({ children, ...rest }) {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...rest}>
                {children}
            </Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={_ => setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="vide/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>
    )
        :
        null
}

Player.Button = function PlayerButton({ ...rest }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return (
        <Button onClick={_ => setShowPlayer(!showPlayer)}>
            Play
        </Button>
    )
}

export default Player
