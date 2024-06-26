import React, { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

function Navsm() {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here</h3>
        <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
          Delhi NCR <BiChevronDown />
        </span>
      </div>
      <div className="w-8 h-8">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
  );
}

function NavMd({ search, handleChange }) {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

function Navlg({ search, handleChange, handleSearch }) {
  return (
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
  );
}

// main component
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
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/*mobile screen navbar*/}
      <div className="md:hidden">
        <Navsm />
      </div>
      {/*Medium screen navbar*/}
      <div className="hidden md:flex lg:hidden">
        <NavMd search={search} handleChange={handleChange} />
      </div>
      {/*Large screen navbar*/}
      <div className="hidden md:hidden lg:flex">
        <Navlg search={search} handleChange={handleChange} handleSearch={handleSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
