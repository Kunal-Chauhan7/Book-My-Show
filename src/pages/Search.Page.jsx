import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";
import { useEffect, useState } from "react";
import axios from "axios";
import Poster from '../components/Poster/SearchPoster.Component';

const Search = () => {
  const [search, setSearch] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const requestSearch = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7dbd84284e8f5b0288084cb828f125ed&query=${query}&include_adult=true&language=en-US&page=1`);
        setSearch(res.data.results || []); 
    };
    requestSearch();
  }, [query]);

  const moviesWithPosters = search.filter(movie => movie.poster_path);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moviesWithPosters.length > 0 ? (
            moviesWithPosters.map((movie) => (
              <Poster key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="text-center mt-4">No results found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
