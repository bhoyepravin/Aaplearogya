import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import galleryData from "../../constants/galleryData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Galleryimages = () => {
  return (
    <motion.div
      className="p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-3xl font-bold text-center mb-6"></h1>
      <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryData.length > 0 ? (
          galleryData.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative w-full"
            >
              <Card
                className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                cover={
                  <motion.img
                    src={image.src}
                    alt={image.alt || "Gallery Image"}
                    className="w-full object-cover h-[150px] md:h-[200px] lg:h-auto"
                    style={{ aspectRatio: "1/1" }}
                    whileHover={{ scale: 1.05 }}
                  />
                }
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No images available
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Galleryimages;
