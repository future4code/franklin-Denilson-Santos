import styled from "styled-components";

// export const Container = styled.div`
//     text-align: center;

//     img {
//         margin-bottom: 1rem;
//     }

//     h2 {
//         margin-bottom: 1rem;
//         font-size: 2rem;
//     }

//     p {
//         margin-bottom: 1rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 0.4rem;
//     }
// `

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

