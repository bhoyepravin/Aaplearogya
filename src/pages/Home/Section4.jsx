import React, { useState, useEffect } from "react";

const Section4 = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(1); // Reset counter when component mounts
  }, []);

  return (
    <div className="bg-blue-950 flex flex-col md:flex-row justify-center items-center min-h-screen p-4">
      {/* Left Content */}
      <div className="p-6 flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          10+ Years Experience in Home <br className="hidden md:block" />
          Care & Private Nursing
        </h2>
        <p className="mt-2 text-white">
          Providing exceptional care for individuals in need, ensuring comfort
          and medical attention.
        </p>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
          Our Services
        </h3>
        <ul className="list-disc pl-5 text-gray-600 mt-2 text-xl md:text-2xl text-white">
          <li>{counter}. Dementia</li>
          <li>{counter + 1}. Baby Care</li>
          <li>{counter + 2}. Paralysis patient</li>
          <li>{counter + 3}. R T Feed Patient</li>
          <li>{counter + 4}. Patient Care</li>
          <li>{counter + 5}. Dressing</li>
        </ul>
      </div>
      {/* Right Image */}
      <div className="relative flex-1 w-full md:w-auto">
        <img
          src="./src/assets/Images/img3.jpeg" // Replace with actual image URL
          alt="Nursing Care"
          className="w-full h-64 md:h-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default Section4;
