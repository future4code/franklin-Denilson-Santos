import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const SmallCardContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallCardContainerP = styled.p`
    margin-bottom: 2px;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardContainerImg src={ props.imagem } />
            <SmallCardContainerP>{props.linkedIn}</SmallCardContainerP>
            <SmallCardContainerP >{props.GitHub}</SmallCardContainerP> 
        </SmallCardContainer>
        
    )
}

export default CardPequeno;