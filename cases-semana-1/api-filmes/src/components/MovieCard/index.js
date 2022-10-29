import { Link } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL, image_path } from "../../constants/urls";
import { APIKey } from "../../config/key";
import { MovieList, Movies } from "./styles";



const MovieCard = ({ offset }) => {
  const [data, error, isLoading] = useRequestData(`${BASE_URL}popular?api_key=${APIKey}&language=pt-br&page=${offset}`)

  return (
    <div>
      <MovieList> 
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
            {!isLoading && data && data.length > 0 && data.map(movie => {
                return (
                  <Movies key={movie.id}>
                    {console.log(movie.genre_ids)}
                    <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                    <span>{movie.title}</span>
                  </Movies>
                    
                )
            })}
      </MovieList>
    </div>
  );
};

export default MovieCard;
