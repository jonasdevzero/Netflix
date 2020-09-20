import styled from 'styled-components'

export const Body = styled.div `
    max-height: 1200px;
    font-size: 26px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: .8em 2.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 950px) {
        font-size: 16px;
        line-height: 22px;
    }

`