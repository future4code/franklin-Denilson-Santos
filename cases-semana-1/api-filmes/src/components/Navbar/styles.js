import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    background-color: #121212;
    font-size: 1.5rem;

    h2 a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #6654da;
    }

    form {
        display: flex;
        gap: 0.5rem;
    }

    input {
        padding: 0.2rem 0.8rem;
        border-radius: 4px;
        border: none;
    }

    button {
        background-color: #6654da;
        border-radius: 4px;
        color: #000;
        padding: 0.3rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
`
