import React from "react";

const DefaultPageHoc = (Component = ({ ...props }) => {
  return (
    <div>
      <Component {...props} />
    </div>
  );
});

export default DefaultPageHoc;
