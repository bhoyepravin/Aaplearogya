import React from "react";
import { Card } from "antd";
//import galleryData from "constants/galleryData";

const Galleryimages = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryData.gallery.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            cover={
              <img
                src={image.src}
                alt={image.alt}
                className="h-40 w-full object-cover"
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Galleryimages;
