import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 3px 10px;
    background-color: ${({bgColor, theme}) => bgColor ? theme.color[bgColor] : theme.color.grey_100 };
    color: ${({theme}) => theme.color.white};
    cursor: pointer;
    border: none;
    border-radius: 5px;
    ${({theme}) => theme.typography.b2};
    ${({size}) => size === "large" && css`
        padding: 6px 16px;
    `};

`;

export default Button;