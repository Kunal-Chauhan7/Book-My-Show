import React, { useContext, useState } from 'react'
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'
import { MovieContext } from '../../context/Movie.Context'
import { useNavigate } from 'react-router-dom';

const SmallnavBar = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>
            {movie.original_title}
          </h3>
        </div>
        <div className='w-8 h-8'>
        <BiShareAlt className='w-full h-full' />
      </div>
      </div>
    </>
  )
}

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
      <div className="flex items-center w-1/2 gap-3">
        <div className="w-10 h-10">
          <img
            src="https://i0.wp.com/siliconspectra.com/wp-content/uploads/2020/01/download-1579320495lcp48.jpg?fit=400%2C400&ssl=1"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search from movies, events, plays, sports and activities"
            value={search}
            onChange={handleChange}
          />
          <button 
          className="bg-red-600 text-white p-0.5 rounded-md text-md"
          onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Delhi NCR <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
    </>
  )
}
const MovienavBar = () => {
  return (
    <>
    <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
      <div className='lg:hidden'>
        <SmallnavBar/>
      </div>
      <div className='hidden w-full lg:flex'>
        <Navbar/>
      </div>
    </nav>
    </>
  )
}

export default MovienavBar;