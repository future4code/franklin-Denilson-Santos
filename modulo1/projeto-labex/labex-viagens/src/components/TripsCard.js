import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
`

const CardList = styled.div`
    width: 500px;
    background-color: #721B65;
    border: 2px solid pink;
    max-height: min-content;
    line-height: 7px;
    padding: 18px;
    margin: 0 auto;
    border-radius: 25px;
    margin-bottom: 10px;
    :hover{
       border: 4px #b6d4e3 solid;
    }
`
const StrongList = styled.strong`
    color:#fff;
    font-weight: bold;
    font-size: 18px;
`
const DescricaoList = styled.p`
    color: #ffd868;
    line-height: 25px;
    font-size: 16px;
    font-weight: bold;
`

export const TripsCard = (props) => {
    return (
        <CardContainer>
            <CardList>
                
                <DescricaoList><StrongList>Nome: </StrongList>{props.name}</DescricaoList>
                
                <DescricaoList><StrongList>Descrição: </StrongList>{props.description}</DescricaoList>
                
                <DescricaoList><StrongList>Planeta: </StrongList>{props.planet}</DescricaoList>
                
                <DescricaoList><StrongList>Duração: </StrongList>{props.duration} dias.</DescricaoList>

                <DescricaoList><StrongList>Data: </StrongList>{props.date}</DescricaoList>
            </CardList>
        </CardContainer>
    )
} 