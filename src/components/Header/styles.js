import styled from 'styled-components/macro'

import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    margin: 0 40px;
    height: 64px;
    padding-bottom: 18px;
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
    border-bottom: ${({ src }) => src ? 'none' : '8px solid #222'};
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}) top left / cover no-repeat ;

    @media (max-width: 1100px) {
        ${({ smallView }) => smallView && 'background: none'}
    }
`

export const Logo = styled.img`
    /* width: 158px;
    height: 72px; */
    width: ${({ width }) => width ? width : '167px'};
    height: ${({ height }) => height ? height : '45px'};
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 95px;
        width: 207px;
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

export const FilmFeature = styled(Container)`
    padding: 150px 0 550px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Text = styled.p`
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
    margin: 0;
`

export const FeatureCallOut = styled.h2`
    font-size: 50px;
    font-weight: bold;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
    margin: 0;
    margin-bottom: 20px;
`

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => active === 'true' ? '700' : 'normal'};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    } 
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Picture = styled.button`
    background: url(${({ src }) => `/images/users/${src}.png`});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 5px;
    outline: none;
`

export const Dropdown = styled.div`
    display: none;
    background-color: #000;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    &:hover {
        display: flex;
        flex-direction: column;
    }

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }

        p {
            font-size: 12px;
            margin-bottom: 0;
            margin-top: 0;
        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const SearchInput = styled.input`
    background: #44444459;
    transition: width .5s;
    height: 30px;
    font-size: 14px;
    outline: none;
    margin-left: ${({ active }) => active === true ? '10px' : 'o'};
    width: ${({ active }) => active === true ? '200px' : '0px'};
    padding: ${({ active }) => active === true ? '0 10px' : '0px'};
    opacity: ${({ active }) => active === true ? '1' : '0'};
`

export const PlayButton = styled.button`
    border: none;
    outline: none;
    box-shadow: 0 .6vw 1vw -.4vw rgba(0, 0, 0, .35);
    background-color: #e6e6e6;
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 20px;
    max-width: 110px;
    margin-top: 35px;
    cursor: pointer;
    transition: background-color .5s ease;

    &:hover {
        background: #ff1e1e;
        color: #fff;
    }
`