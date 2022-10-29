import React from "react";
import { Containe, Container, Paginacao, Previous } from "./styles";


const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({limit, total, offset, setOffset}) => {
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 2)

    function onPageChange(page) {
        setOffset((page - 1) * limit )
    }

    console.log(current)
    return <Container>
        <Previous>
            <button 
                onClick={() => onPageChange(current - 1)}
                disabled={ current === 2}
            >
                Anterior
            </button> 
        </Previous>
        <Containe>
            {Array.from({ length: Math.min(MAX_ITEMS, pages)})
            .map( (_, index) => index + first)
            .map( (page) => (
                <Paginacao key={page}>
                    <button 
                        onClick={() => onPageChange(page)}
                        className={ page === current ? 'selected' : null}
                        >
                        {page}
                    </button>
                </Paginacao>
            ))}
        </Containe>
        <Previous>
            <button 
                onClick={() => onPageChange(current + 1)}
                disabled={ current === total}
            >
                Próximo
            </button> 
        </Previous>
    </Container>
}