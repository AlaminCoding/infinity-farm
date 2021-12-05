import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black : #303030;
        --gray: #6a6a6a;
    }
    html{
        overflow-x: hidden;
    }
    body{
        margin: 0;
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
        padding: 8px 25px;
        border-radius: 10px;
        font-weight: 500;
        display: inline-block;
        border: 1px solid transparent;
        overflow: hidden;
        transition: 0.2s;
        &:hover{
            border: 1px solid #D53E47;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .outline-btn{
        color: var(--black);
        border: 1px solid #D53E47;
        padding: 8px 25px;
        border-radius: 10px;
        display: inline-block;
        overflow: hidden;
        transition: 0.2s;
        &:hover{
            color: white;
            background-image: linear-gradient(to left, #D9413E, #9C17CF);
        }
    }
    .blue-btn{
        color: white;
        background-image: linear-gradient(to left, #556DEE, #5DD6E9);
        padding: 10px 25px;
        border-radius: 10px;
        display: inline-block;
        overflow: hidden;
        &:hover{
            color: white;
        }
    }
`;
// font-size: calc(42px + (60 - 42) * ((100vw - 360px) / (1920 - 360)));
