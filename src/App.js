import "./App.css";
import axios from "axios";
// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Routing System
import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/Home.Page";
import PlaysPage from "./pages/Plays.Page";
import MoviePage from "./pages/Movie.Page";
import Search from './pages/Search.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Movie/:id" element={<MoviePage />} />
      <Route path="/Plays" element={<PlaysPage />} />
      <Route path="/Search/:query" element={<Search/>}/>
    </Routes>
  );
}

export default App;
