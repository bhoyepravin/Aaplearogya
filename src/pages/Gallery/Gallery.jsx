import React from "react";
import Galleryimages from "./Galleryimages";
import PageSection from "../../components/Herosection/PageSection";

const Gallery = () => {
  return (
    <div>
      <PageSection page={"gallery"} />
      <Galleryimages />
    </div>
  );
};

export default Gallery;
