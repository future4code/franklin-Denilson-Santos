import { Conatiner, MovieList, Movies } from "./styles";
import { APIKey } from "../../config/key";
import { Link } from 'react-router-dom';
import { BASE_URL, image_path } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { Pagination } from "../../components/Paginacao";
import { useState } from "react";

const limit = 1

function Home() {
  const [offset, setOffset] = useState(1)
  const [data, error, isLoading] = useRequestData(`${BASE_URL}popular?api_key=${APIKey}&language=pt-br&page=${offset}`)

  return (
    <Conatiner >
        <h1>Movies</h1>
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
        
        <Pagination limit={limit} total={5000} offset={offset} setOffset={setOffset}/>
    
    </Conatiner>
  );
}
  
export default Home;