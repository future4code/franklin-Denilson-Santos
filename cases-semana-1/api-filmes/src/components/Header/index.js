import { Container, Genero, Lista } from "./styles.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import { URL_GENRES } from "../../constants/urls";



export const Header = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [genre, setGenre] = useState("")

    useEffect(() => {
        axios.get(`${URL_GENRES}?api_key=${APIKey}&language=pt-br`)
        .then((response) => {
            setIsLoading(false)
            setGenre(response.data.genres)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error);
        })
    },[])

    console.log(genre)
   
    return ( 
        <Container>  
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
            {!isLoading && genre && genre.length > 0 && genre.map(genero => {
            return (
    
                <Lista key={genero.id}>
                    
                    <Genero>
                        <Link to={`/`}>
                            <button>{genero.name}</button>
                        </Link>
                    </Genero>
                </Lista> 
                 
            )
            })}
           
        </Container>
    )
}