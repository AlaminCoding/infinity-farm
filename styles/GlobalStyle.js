import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black : #303030;
        --gray: #6a6a6a;
    }
    body{
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
    }
    h2,
    p,
    ul{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: black;
        text-decoration: none;
        
    }
    .grad-btn{
        color: white;
        background-image: linear-gradient(to left, #D9413E, #9C17CF);
        padding: 10px 25px;
        border-radius: 10px;
        font-weight: 500;
        display: inline-block;
        &:hover{
            color: white;
        }
    }
    .outline-btn{
        color: var(--black);
        border: 1px solid #D53E47;
        padding: 8px 25px;
        border-radius: 10px;
        display: inline-block;
        &:hover{
            color: var(--black);
        }
    }
    .blue-btn{
        color: white;
        background-image: linear-gradient(to left, #556DEE, #5DD6E9);
        padding: 10px 25px;
        border-radius: 10px;
        font-weight: 500;
        display: inline-block;
        &:hover{
            color: white;
        }
    }
`;
// font-size: calc(42px + (60 - 42) * ((100vw - 360px) / (1920 - 360)));
