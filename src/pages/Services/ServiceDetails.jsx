import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import subservice from "../../constants/subservice2"; // Ensure this is the correct path

const ServiceDetails = () => {
  const { id } = useParams();
  const service = subservice.find((item) => item.id === parseInt(id));

  if (!service) {
    return <p className="text-center text-red-500">Service not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            {service.serviceDetails.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            {service.serviceDetails.description}
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            {service.serviceDetails.longDescription}
          </p>
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
              Looking for:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.serviceItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center text-gray-700 text-sm sm:text-base"
                >
                  <span className="mr-2 text-blue-500">•</span> {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            autoplay
            effect="fade"
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {service?.carouselImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Service ${index + 1}`}
                  className="w-full h-60 sm:h-96 object-cover"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>

      {/* Duration Options */}
      <motion.div
        className="mt-8 sm:mt-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          Available Service Durations
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {service.durationOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md border border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base">
                {option}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-10 sm:mt-16 bg-blue-600 text-white rounded-xl p-6 sm:p-8 text-center"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Call Now
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-lg sm:text-xl font-medium">
          <motion.a
            href="tel:+917743880977"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +91 7743880977
          </motion.a>
          <motion.a
            href="tel:+917020548562"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +91 7020548562
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetails;
