import React from "react";
import MovienavBar from "../components/navbar/movienavbar.component";
import Footer from "../components/Footer/Footer.Component";

// Hoc
const MovieLayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <MovienavBar/>
      <Component {...props} />
      <Footer/>
    </div>
  );
};

export default MovieLayoutHoc;
