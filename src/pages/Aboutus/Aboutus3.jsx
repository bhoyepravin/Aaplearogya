import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
// import img1 from "../src/assets/Images/img1";
// import img2 from "assets/Images/img2.jpg";
// import img3 from "assets/Images/img3.jpg";

const Aboutus3 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            About Our Healthcare Service
          </h2>
          <p className="text-gray-600 text-lg">
            We are dedicated to providing top-quality healthcare services with
            advanced medical technology and experienced professionals. Our
            mission is to ensure every patient receives the best possible
            treatment with compassion and care.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>24/7 Emergency Services</li>
            <li>Highly Qualified Doctors & Nurses</li>
            <li>State-of-the-art Equipment</li>
            <li>Personalized Patient Care</li>
          </ul>
        </motion.div>

        {/* Right Side - Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <Card
            hoverable
            cover={
              <img
                src="src/assets/Images/img1.jpeg"
                alt="Healthcare Service"
                className="rounded-lg w-80 h-80 "
              />
            }
          />
          <Card
            hoverable
            cover={
              <img
                src="src/assets/Images/img1.jpeg"
                alt="Medical Staff"
                className="rounded-lg w-80 h-80"
              />
            }
          />
          <Card
            hoverable
            cover={
              <img
                src="src/assets/Images/img1.jpeg"
                alt="Patient Care"
                className="rounded-lg w-80 h-80"
              />
            }
            className="col-span-2"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Aboutus3;
