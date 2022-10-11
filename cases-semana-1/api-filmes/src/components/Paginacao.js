import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Containe = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Paginacao = styled.li`
    width: 40px;
    padding: 1em;
    margin: 1em;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        border: none;
        font-size: 1.3em;
    }
`

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({limit, total, offset, setOffset}) => {
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1)

    
    return <Conatiner>
        <Containe>
            {Array.from({ length: Math.min(MAX_ITEMS, pages)})
            .map( (_, index) => index + first)
            .map( (page) => (
                <Paginacao key={page}>
                    <button 
                        onClick={() => setOffset((page) * limit )}
                        >
                        {page}
                    </button>
                </Paginacao>
            ))}
        </Containe>
    </Conatiner>
}