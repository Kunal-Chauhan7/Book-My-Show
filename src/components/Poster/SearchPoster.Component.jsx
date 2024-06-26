import React from 'react';
import { Link } from 'react-router-dom';

const Poster = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="w-full">
      <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
        <div className='h-40 md:h-80'>
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            alt="poster"
            className='w-full h-full rounded-sm' 
          />
        </div>
        <h3 className='text-lg font-bold'>
          {movie.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
