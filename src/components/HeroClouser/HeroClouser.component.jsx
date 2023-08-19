import React, { useState } from "react";
import HeroSlider from "react-slick";

const HeroClouser = () => {
  const [Images, setImages] = useState([]);
  return <>
    <div className="lg:hidden ">
      <HeroSlider>
        {
          Images.map((img) =>(
            <div className="w-full h-56 md:h-80 py-3">
              <img src="" alt="" className=""/>
            </div>
          ))
        }
      </HeroSlider>
    </div>
    <div className="hidden lg:block">

    </div>
  </>;
};

export default HeroClouser;
