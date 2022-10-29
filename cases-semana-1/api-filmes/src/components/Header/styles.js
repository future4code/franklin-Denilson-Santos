import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
	margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
	margin-bottom: 30px;
	flex-wrap: wrap;
    background-color: #121212;
    padding: 2em 0.1em 2em 0em;
`

export const Lista = styled.ul`
	margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
	text-align: center;
	margin: 0.9%;
	transition: .3s;
	
    
`
export const Genero = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.3rem;

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 1.3rem 2rem;
        font-size: 100%;
        transition: all 0.3s;
        max-height: 55px;
        max-width: 250px;  
    
    }

    button:hover {
        background-color: #5848c2;
    }

`