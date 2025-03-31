import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import {
  serviceImg11,
  serviceImg17,
  serviceImg5,
  serviceImg6,
  serviceImg7,
} from "../../../public/assets";
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
            About Our Health Care Services
          </h2>
          <p className="text-gray-600 text-lg">
            At Aple Aarogya Health Care Center , we are dedicated to providing
            compassionate and professional home healthcare services to those in
            need. With a team of experienced caregivers, we specialize in
            patient care for dementia, paralysis, baby care, dressing, sponging,
            and RT feed patients. Our goal is to ensure comfort, dignity, and
            the highest standard of care in the familiar surroundings of home.
            <p className="text-gray-600 text-lg ">
              {" "}
              <br />
              In addition to our expert caregiving services, we also offer
              essential medical equipment for rent, including wheelchairs, ICU
              beds, oxygen machines, walkers, and Sakhsham machines. Our
              commitment is to improve the quality of life for patients and
              their families by providing reliable and affordable home
              healthcare solutions.
            </p>
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>24/7 emergency care.</li>
            <li>Personalized patient support.</li>
            <li>Advanced medical equipment.</li>
            <li>Affordable rentals & solutions.</li>
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
                src={serviceImg7}
                alt="Healthcare Service"
                className="rounded-lg w-80 h-80 "
              />
            }
          />
          <Card
            hoverable
            cover={
              <img
                src={serviceImg11}
                alt="Medical Staff"
                className="rounded-lg w-80 h-80"
              />
            }
          />
          <Card
            hoverable
            cover={
              <img
                src={serviceImg17}
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
