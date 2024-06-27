import React from "react";
import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/Footer/Footer.Component";

const DefaultPageHoc = (Component)=> ({...props}) => {
  return(
    <div>
      <Navbar/>
      <Component {...props}/>
      <Footer/>
    </div>
  );
};

export default DefaultPageHoc;
