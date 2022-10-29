import { useEffect} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { APIKey } from "../../config/key";
import { image_path, URL_SEARCH } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { Conatiner, MovieList, Movies, Titulo } from "./styles";


const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [data, error, isLoading] = useRequestData(`${URL_SEARCH}?api_key=${APIKey}&language=pt-br&query=${query}`)

  useEffect(() => {
    
  }, [query]);

  return (
    <Conatiner>
      <Navbar/>
      <Titulo>
        Resultados para: <span>{query}</span>
      </Titulo>
      <MovieList>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro na sua busca</p>}
            {!isLoading && data && data.length > 0 && data.map(movie => {
                return (
                  <Movies key={movie.id}>
                    <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                    <span>{movie.title}</span>
                  </Movies>
                  )
                })}
      </MovieList>
    </Conatiner>
  );
};

export default Search;