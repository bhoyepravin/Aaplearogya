import React, { useState, useEffect } from "react";
import { heroimg2 } from "../../../public/assets";

const Section4 = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(1); // Reset counter when component mounts
  }, []);

  return (
    <div className="bg-[#121C52] flex flex-col md:flex-row justify-center items-center min-h-11/12 p-4">
      {/* Left Content */}
      <div className="p-6 flex-1 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          10+ Years Experience in Home <br className="hidden md:block" />
          Care & Private Nursing
        </h2>
        <p className="mt-2 text-white text-center md:text-left">
          Providing exceptional care for individuals in need, ensuring comfort
          and medical attention.
        </p>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
          Our Services
        </h3>
        <div className="mt-2 text-xl md:text-2xl text-white flex flex-wrap justify-center md:justify-start gap-2">
          <span>{counter}. Baby Care Specialist</span>
          <span>{counter + 1}. Patient Care</span>
          <span>{counter + 2}. Paralysis Patient</span>
          <span>{counter + 3}. RT Feed Patient</span>
          <span>{counter + 4}. Dementia</span>
          <span>{counter + 5}. Dressing</span>
          <span>{counter + 6}. Hospital & Surgical Equipments On Rent</span>
        </div>
      </div>
      {/* Right Image */}
      <div className="relative flex-1 w-full md:w-auto flex justify-center">
        <img
          src={heroimg2} // Replace with actual image URL
          alt="Nursing Care"
          className="w-full max-w-xs md:max-w-md h-64 md:h-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default Section4;
