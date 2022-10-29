import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Containe = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Paginacao = styled.li`
    background-color: white;
    margin: 0.4em;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
        width: 40px;
        padding: 0.3em;
        margin: 0.4em;
        background-color: white;
        border: none;
        font-size: 1.2em;
    }

    .selected {
        background: none;
        font-weight: bold;
        color: red;
        border: none;
    }

`

export const Previous = styled.li`
    width: 95px;
    margin: 0.5em;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background-color: white; 
        border: none;
        padding: 0.4em;
        margin: 0.4em;
        font-size: 1.1em;
        font-weight: bold;
    }

    
`

