import React from "react";
import { CheckCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Herosection3 = ({ happyClients }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      {/* Left Side - Images & Happy Clients Box */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="relative flex gap-4 flex-col md:flex-row items-center">
          <img
            src="/src/assets/Images/img1.jpeg"
            alt="Image 1"
            className="w-50 h-50 md:w-80 md:h-100 rounded-2xl border-4 border-white shadow-lg"
          />
          <img
            src="/src/assets/Images/img2.jpeg"
            alt="Image 2"
            className="w-50 h-50 md:w-80 md:h-100 rounded-2xl border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          We Take Care of Your <br className="hidden md:block" /> Problems
          Carefully
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          At Aple Arogya, we prioritize your health and well-being, providing
          you with the best <br className="hidden md:block" /> care and support.
        </p>
        <div className="flex flex-col md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {[
            "Expert medical guidance",
            "24/7 customer support",
            "Advanced healthcare solutions",
            "Affordable and reliable services",
          ].map((point, index) => (
            <div
              key={index}
              className="flex items-center p-2 gap-2 justify-start flex-wrap"
            >
              <CheckCircleOutlined className="text-red-500" />
              <p className="text-gray-700 text-sm md:text-base">{point}</p>
            </div>
          ))}
        </div>
        <button className="bg-red-500 hover:bg-blue-500 text-white font-semibold rounded-full px-6 py-4 border-none text-lg md:text-xl">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default Herosection3;
