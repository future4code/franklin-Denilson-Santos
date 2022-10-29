import styled from 'styled-components';

export const Conatiner = styled.div`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin: 2rem 0 1rem;

`
export const Titulo = styled.h2`
    
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 1rem; 

    span {
        color: #f7d354;
    }

`

export const MovieList =styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`
export const Movies = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 250px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        margin-bottom: 1rem;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`
