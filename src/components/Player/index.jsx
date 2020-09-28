import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'

import { Container, Button, Overlay, Inner } from './styles'

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
                <video id="netflix-player" controls autoPlay={true}>
                    <source src={src} type="video/mp4" />
                </video>
            </Inner>
        </Overlay>,
        document.body
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
