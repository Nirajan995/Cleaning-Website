import Home from "../components/Home";

import React from 'react'
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

const HomeScreen = () => {
   return (
      <>
         <Home />
         <Slider slides={SliderData} />
      </>
   )
}

export default HomeScreen