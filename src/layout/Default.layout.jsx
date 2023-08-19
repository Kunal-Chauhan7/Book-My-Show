import React from "react";
import Navbar from "../components/navbar/navbar.component";

const DefaultPageHoc = (Component)=> ({...props}) => {
  return(
    <div>
      <Navbar/>
      <Component {...props}/>
      <div>Footer</div>
    </div>
  );
};

export default DefaultPageHoc;
