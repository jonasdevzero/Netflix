import styled from 'styled-components'


export const Header = styled.div `
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 8px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: .8em 1.2em .8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 950px) {
            font-size: 16px;
        }
    }
`