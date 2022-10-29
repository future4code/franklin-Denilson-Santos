import { Conatiner } from "./styles";
import { useState } from "react";
// import { Header } from "../../components/Header";
import { Pagination } from "../../components/Paginacao";
import { Navbar } from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";

const limit = 1

function Home() {
  const [offset, setOffset] = useState(1);

  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <Conatiner >
        <MovieCard offset={offset}/>
        <Pagination limit={limit} total={5000} offset={offset} setOffset={setOffset}/>
      </Conatiner>
    </div>
  );
}
  
export default Home;