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
                <StrongList>Nome:</StrongList>
                <DescricaoList>{props.name}</DescricaoList>

                <StrongList>Descrição:</StrongList>
                <DescricaoList>{props.description}</DescricaoList>

                <StrongList>Planeta:</StrongList>
                <DescricaoList>{props.planet}</DescricaoList>

                <StrongList>Duração:</StrongList>
                <DescricaoList>{props.duration} dias.</DescricaoList>

                <StrongList>Data:</StrongList>
                <DescricaoList>{props.date}</DescricaoList>
            </CardList>
        </CardContainer>
    )
} 