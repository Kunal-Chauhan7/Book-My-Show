import React , {useState} from 'react'

// importing Componnent 
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import HeroClouser from '../components/HeroClouser/HeroClouser.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// importing  HOC
import DefaultPageHoc from '../layout/Default.layout';


const HomePage = () => {
  
  const [RecomendedMovies , setRecomenededMovies] = useState([]);
  const [Premiermovies , setPermierMovies] = useState([]);
  const [OnlineStreamEvents , setOnlineStreamEvents] = useState([]);


  return <>
  <HeroClouser/>
  <div className="container mx-auto px-4 md:px-12 my-8">
    <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best Of Entertainment</h1>
  <EntertainmentCardSlider/>
  </div>
  </>;
}

export default DefaultPageHoc (HomePage); // using Hoc and our component
