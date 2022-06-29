import axios from "axios";
import { useEffect, useState } from "react";
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



export const CardCandidato = () => {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token') 

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denilson-santos-franklin/trip/NoIFVcOiSgTKTIPVZwXS`, {
            headers: {
                auth: token
            }
        })
        .then( (res) => {
            console.log("Deu certo", res.data.trip.candidates)
            setPersonagens(res.data.trip.candidates);
            setLoading(false);
            
        })
        .catch( (error) => {
            console.log("Deu erro", error.res)
        })

    }, [])

    // Mostra o personagem na tela

    const renderPersonagens = () => {
        return personagens.map(personagem => {
            return (
                <CardContainer key={personagem.id}>
                    <CardList>
                        <DescricaoList><StrongList>Nome:</StrongList> {personagem.name}</DescricaoList>
                        <DescricaoList><StrongList>Idade:</StrongList> {personagem.age}</DescricaoList>
                        <DescricaoList><StrongList>Texto de Candidatura:</StrongList> {personagem.applicationText}</DescricaoList>
                        <DescricaoList><StrongList>Pais:</StrongList> {personagem.country}</DescricaoList>
                        <DescricaoList><StrongList>Profissão:</StrongList> {personagem.profession}</DescricaoList>
                    </CardList>
                </CardContainer>
            );

        }
        );
    }

    return (
        <div>
            {loading ? <p>Carregando...</p> : renderPersonagens()}
        </div>
    )
}

