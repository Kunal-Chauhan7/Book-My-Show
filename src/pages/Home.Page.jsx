import React, { useEffect, useState } from "react";
import axios from "axios";
// importing Componnent
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import HeroClouser from "../components/HeroClouser/HeroClouser.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// importing  HOC
import DefaultPageHoc from "../layout/Default.layout";

const HomePage = () => {
  const [RecomendedMovies, setRecomenededMovies] = useState([]);
  const [Premiermovies, setPermierMovies] = useState([]);
  const [OnlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async ()=>{
      const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1')
      setRecomenededMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies()
  },[])

  return (
    <>
      <HeroClouser />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best Of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommaned Movies"
          subtitle="List of Recommended Movies"
          posters={RecomendedMovies}
          isDark={false}
        />
      </div>
      <div className=" bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay Banner"
              className="w-full h-full"
            />
          </div>
            <PosterSlider
              title="Primers"
              subtitle="Brand new Release Every Friday"
              posters={Premiermovies}
              isDark={true}
            />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Event"
          subtitle=""
          posters={OnlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultPageHoc(HomePage); // using Hoc and our component
