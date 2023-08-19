import React from "react";
import MovienavBar from "../components/navbar/movienavbar.component";

// Hoc
const MovieLayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <MovienavBar/>
      <Component {...props} />
      <div>Footer</div>
    </div>
  );
};

export default MovieLayoutHoc;
