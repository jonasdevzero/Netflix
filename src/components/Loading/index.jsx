import React from 'react'

import { Spinner, LockBody, Picture, ReleaseBody } from './styles'

function Loading({ src }) {
    return (
        <Spinner>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
} 

export default Loading
