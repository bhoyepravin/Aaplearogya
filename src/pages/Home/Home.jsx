import React from "react";
import Herosection from "../Home/Herosection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Herosectionservices from "./Herosectionservices";
import Herocounter from "./Herocounter";
import Faq from "./Faq";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Section4 />
      <Section3 />
      <Herosectionservices />
      <Herocounter />
      <Feedback />
      <Section2 />
      <Faq />
    </div>
  );
};

export default Home;
