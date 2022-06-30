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
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(false);

    
    //{id: 'NoIFVcOiSgTKTIPVZwXS', candidates: Array(4), approved: Array(0)}

    useEffect((id) => {
        setLoading(true)
        const token = localStorage.getItem('token') 

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denilson-santos-franklin/trip/${id}`, {
            headers: {
                auth: token
            }
        })
        .then( (res) => {
            console.log("Deu certo", res.data.trip)
            setCandidates(res.data.trip.candidates);
            setLoading(false);
            
        })
        .catch( (error) => {
            console.log("Deu erro", error.res)
        })

    }, [])

    

    // Mostra o personagem na tela

    const renderPersonagens = () => {
        return candidates.map(candidato => {
            return (
                <CardContainer key={candidato.name}>
                    <CardList>
                        <DescricaoList><StrongList>Nome:</StrongList> {candidato.name}</DescricaoList>
                        <DescricaoList><StrongList>Idade:</StrongList> {candidato.age}</DescricaoList>
                        <DescricaoList><StrongList>Texto de Candidatura:</StrongList> {candidato.applicationText}</DescricaoList>
                        <DescricaoList><StrongList>Pais:</StrongList> {candidato.country}</DescricaoList>
                        <DescricaoList><StrongList>Profissão:</StrongList> {candidato.profession}</DescricaoList>
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

