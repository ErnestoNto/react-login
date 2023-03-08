import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Article = styled.article`
    width: 90%;
    max-width: 400px;
    height: 300px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 6px;
`

export const H1 = styled.h1`
    font-size: 3rem;

    @media (max-width: 450px) {
        font-size: 2rem;
        margin-bottom: 8px;
    }
`

export const LogoutButton = styled.button`
    padding: 8px;
    font-size: 1.2rem;
    border: 0;
    border-radius: 6px;
    background-color: #ff0045;
    color: #fafafa;
    border: 1px solid transparent;
    transition: all .5s ease-in-out;

    :hover{
        background-color: #fafafa;
        color: #ff0045;
        border: 1px solid #ff0045;
    }
`