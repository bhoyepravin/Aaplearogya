import React from "react";
import Herosection from "../Home/Herosection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Herosectionservices from "./Herosectionservices";
import Herocounter from "./Herocounter";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Herosectionservices />
      <Herocounter />
    </div>
  );
};

export default Home;
