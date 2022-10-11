import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { APIKey } from "../../config/key"
import { BASE_URL, image_path } from "../../constants/urls"
import { Conatiner } from "./styles"

export function Details() {
    const [movie, setMovie] = useState({})

    const { id } = useParams()

    useEffect( () => {
        fetch(`${BASE_URL}${id}?api_key=${APIKey}&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                const { title, poster_path, overview, release_date} = data
                const movie = {
                    id,
                    title: title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }
               console.log(movie)
               setMovie(movie) 
            }) 
    }, [id])

    return (
        <Conatiner>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Data de Lancamento: {movie.releaseDate}</span>
                    <Link to={`/`}><button>Go Back</button></Link>                    
                </div>
            </div>
        </Conatiner> 
    )
}