import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: auto;
    padding: 70px 56px;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    font-size: 13px;
    margin-bottom: 28px;
`

export const Title = styled.div`
    font-size: 16px;
    color: #757575;
    margin-bottom: 48px;
`

export const Text = styled.div`
    font-size: 13px;
    color: #757575;
    margin: 24px 0px;
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0; 
`

export const  SignInFooterContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #0009;
    flex-direction: column;
    margin-top: 40px;
    padding-left: 10%;
    padding-top: 20px;
    padding-bottom: 50px;
`