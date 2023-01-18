import Home from "../components/Home";
import Instagram from "../components/Instagram";

import React from 'react'
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import { Projects } from "../components/Projects";

const HomeScreen = () => {
   return (
      <>
         <Home />
         <Slider slides={SliderData} />
         <Projects />
         <Instagram />
      </>
   )
}

export default HomeScreen