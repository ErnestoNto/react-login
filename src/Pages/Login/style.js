import styled from 'styled-components'

export const FormContainer = styled.article`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
`

export const Form = styled.form`
    width: 90%;
    max-width: 400px;
    height: 300px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
    font-size: 2rem;
    text-align: center;
`

export const InputContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: left;
    padding: 8px 0;
`

export const Label = styled.label`
    font-size: 1.2rem;
`

export const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid #000;
    border-radius: 6px;
`

export const Button = styled.button`
    width: 90%;
    padding: 8px;
    margin-top: 8px;
    font-size: 1.2rem;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #26408B;
    color: #fff;
    transition: all .5s ease-in-out;

    :hover{
        background-color: #fafafa;
        border: 1px solid #26408B;
        font-size: 1.2rem;
        color: #26408B;
    }
`

export const Span = styled.span`
    margin-top: 8px;
    font-size: .8rem;
`

export const ErrorSpan = styled.span`
    margin-top: 8px;
    font-size: .8rem;
    color: #ff0045;
`