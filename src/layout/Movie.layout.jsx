import React from "react";

// Hoc
const MovieLayoutHoc = (Component = ({ ...props }) => {
  return (
    <div>
      <Component {...props} />
    </div>
  );
});

export default MovieLayoutHoc;
