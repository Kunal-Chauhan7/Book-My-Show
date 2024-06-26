import React, { useEffect, useState , useContext } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MovieContext } from '../context/Movie.Context';
import Slider from 'react-slick';
import {FaCcVisa} from 'react-icons/fa'
import {FaCcApplePay} from 'react-icons/fa'
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from '../components/Casts/Cast.Component';

const MoviePage = () => {


  const {id} = useParams();
  
  const{movie,setMovie} = useContext(MovieContext);

  const [movieLink,setMovieLink] = useState("");
  const [cast , setCast] = useState([]);
  const[similarMovies,setSimilarMovies] = useState([]);
  const[recommendedMovies , setRecommendedMovies] = useState([]);

  useEffect(()=>{
    const request = async()=>{
      const getCast = await axios.get(`movie/${id}/credits?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setCast(getCast.data.cast);
    };

    request();
  },[id]);

  useEffect(()=>{
    const requestSimilarMovies = async()=>{
      const getSimilarMovies = await axios.get(`/movie/${id}/similar?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  },[id]);

  useEffect(()=>{
    const requestRecommndedMovies = async()=>{
      const getRecommendedMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7dbd84284e8f5b0288084cb828f125ed&language=en-US&page=1`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommndedMovies();
  },[id]);

  useEffect(()=>{
    const requestMovie = async()=>{
      const getMovieData = await axios.get(`/movie/${id}?api_key=7dbd84284e8f5b0288084cb828f125ed`);
      setMovie(getMovieData.data);
      let link = `https://vidsrc.xyz/embed/movie/${getMovieData.data.imdb_id}`;
      setMovieLink(link);
    }
    requestMovie()
  },[id])

  const settingCast = {
    infinite:false,
    speed:500,
    slidesToShow:6,
    slidesToScroll:4,
    initialSlide:0,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:4,
          slidesToScroll:4,
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:5,
          slidesToScroll:2,
          initialSlide:2,
        }
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        }
      }
    ]
  };

  const settings = {
    infinite:false,
    speed:500,
    slidesToShow:5,
    slidesToScroll:5,
    initialSlide:0,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:3,

        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
          initialSlide:3,
        }
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide:3,
        }
      }
    ]
  };
  


  return (
    <>
      <MovieHero/>
      <div className='my-12 container px-4 lg-ml-20'>
        <div className='flex flex-col items-start gap-3 '>
          <h1 className='text-gray-800 font-bold text-2xl'>
            About the movie 
          </h1>
          <p>
            {movie.overview}
          </p>
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-3'>
            Applicable Offers
          </h2>
          <div className='flex flex-col gap-3 lg:flex-row lg:w-2/4'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md w-full'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-startw'>
                <h3 className='text-gray-700 font-bold text-xl'>
                  Visa Stream Offer
                </h3>
                <p className='text-gray-600'>Get 50% off up to INR 150 on all Rupay card on BookMyShow Stream</p>
              </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md w-full'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-startw'>
                <h3 className='text-gray-700 font-bold text-xl'>
                  Film Pass
                </h3>
                <p className='text-gray-600'>Get 50% off up to INR 150 on all Rupay card on BookMyShow Stream</p>
              </div>
            </div>
          </div>
        </div>
        <div className='my-8'>
          <hr />
        </div>

        {/*{Cast Slider}*/}

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-4'>
            Cast And Crew
          </h2>
          <Slider {...settingCast}>
            {cast.map((castData) => {
              return (
                <Cast 
                  key={castData.id}
                  img={castData.profile_path} 
                  castName={castData.original_name} 
                  role={castData.character}
                />
              );
            })}
          </Slider>
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div>
        <iframe src={movieLink}
        className='w-full h-[100vh] ml-4' 
        referrerpolicy="origin" allowFullScreen>
        </iframe>
        </div>
        {/*Recomened movie Slider*/}
        <div>
          <PosterSlider
          config={settings}
          title="recommended Movies"
          posters={recommendedMovies}
          isDark={false}
          />
        </div>
        <div className='my-8'>
          <hr />
        </div>
      </div>
    </>
  )
}
export default MovieLayoutHoc (MoviePage);