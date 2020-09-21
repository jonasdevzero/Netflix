import styled from 'styled-components'

import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px
    }
`

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}) top left / cover no-repeat ;
`

export const Logo = styled.img`
    width: 108px;
    height: 32px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 140px 45px;

    @media (max-width: 550px) {
        padding: 40px 45px;
    }
`

export const Title = styled.h1`
    max-width: 640px;
    font-size: 50px;
    font-weight: 700;
    margin: auto;

    @media (max-width: 950px) {
        font-size: 45px;
    }
    @media (max-width: 550px) {
        font-size: 30px;
    }
`

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: 500;
    margin: 16px auto;

    @media (max-width: 950px) {
        font-size: 18px;
    }
`