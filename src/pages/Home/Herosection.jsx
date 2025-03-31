import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  serviceImg42,
  serviceImg15,
  serviceImg41,
  serviceImg17,
} from "../../../public/assets/index";

const Herosection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Replace API call with dummy data
    const dummyData = [
      {
        image: serviceImg42,
        title: "Your Health Is Our Responsibility",
        description:
          "We are dedicated to providing top-quality home healthcare services, ensuring comfort and care for you and your loved ones.",
      },
      {
        image: serviceImg15,
        title: "",
        description: "",
      },
      {
        image: serviceImg41,
        title: "",
        description: "",
      },
      {
        image: serviceImg17,
      },
    ];

    setHeroContent(dummyData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (heroContent.length === 0) return null;

  const { image, title, description } = heroContent[currentIndex];

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden  ">
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></motion.div>

      <button onClick={prevImage} className="absolute left-10 md:left-20">
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button onClick={nextImage} className="absolute right-10 md:right-20">
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Herosection;
