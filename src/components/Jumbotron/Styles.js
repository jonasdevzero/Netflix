import styled from 'styled-components/macro'

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`

export const Wrap = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 950px) {
        font-size: 35px;
    }
`

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 950px) {
        font-size: 18px;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`