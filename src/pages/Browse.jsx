import React from 'react'

import BrowseComponent from '../components/Browse'

import useContent from '../hooks/useContent'
import filterData from '../utils/filterData'

function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = filterData({ series, films })

    return (
        <BrowseComponent slides />
    )
}

export default Browse
