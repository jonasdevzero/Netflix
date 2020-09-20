import styled from 'styled-components/macro'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    padding: 70px 45px;

`
export const Inner = styled.div `
    display: flex;
    padding: 70px 45px 0px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;

    @media (max-width: 950px) {
        font-size: 35px;
    }
`

export const Frame = styled.div `
    margin-bottom: 40px;
`