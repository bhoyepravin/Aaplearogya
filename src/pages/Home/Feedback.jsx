import React, { useRef } from "react";
import { Carousel, Card, Button } from "antd";
import { motion } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import feedbacks from "../../constants/feedbacks";

const Feedback = () => {
  const carouselRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 bg-gray-100"
    >
      {/* Centered Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 sm:mb-6"
      >
        WHAT OUR PATIENTS SAY
      </motion.h2>

      {/* Feedback Card */}
      <Card className="w-full max-w-3xl sm:max-w-6xl p-4 sm:p-6 shadow-2xl rounded-xl bg-white relative">
        <Carousel
          ref={carouselRef}
          autoplay
          dots={{ className: "custom-dots" }}
        >
          {feedbacks.map((item, index) => (
            <div key={index} className="p-4 sm:p-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl font-medium text-gray-700"
              >
                "{item.feedback}"
              </motion.p>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-md text-gray-500 mt-3 sm:mt-4"
              >
                - {item.name}
              </motion.h4>
            </div>
          ))}
        </Carousel>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            onClick={() => carouselRef.current.prev()}
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
          <Button
            shape="circle"
            icon={<RightOutlined />}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default Feedback;
