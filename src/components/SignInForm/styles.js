import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 300px;
    background-color: rgba(0,0,0,.75);
    padding: 60px 68px 40px;
    border-radius: 5px;
    min-height: 560px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 00 16px;
    padding: 15px 20px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 28px;
`

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`

export const TextSmall = styled.small`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`

export const Link = styled(ReactRouterLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: underline;
    }
`

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    outline: none;

    &:last-of-type {
        margin-bottom: 30px;
    }
`

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 0 12px;
    padding: 16px;
    border: 0;
    cursor: pointer;
    color: #fff;

    &:disabled {
        opacity: .5;
    }
`