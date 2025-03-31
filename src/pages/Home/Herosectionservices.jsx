import React from "react";
import { Card } from "antd";
import {
  serviceImg22,
  serviceImg24,
  serviceImg27,
} from "../../../public/assets";

const Herosectionservices = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        What Service We Provide
      </h1>
      <p className="text-center mb-12">
        At Aple Aarogya Health Center , we offer compassionate and professional
        healthcare services tailored to meet the unique needs of every
        individual. Our trained caregivers provide specialized care with warmth,
        respect, and dedication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          hoverable
          className="transition-all duration-300 ease-in-out transform hover:scale-105"
          cover={
            <img
              alt="Home Care"
              src={serviceImg22}
              className="w-full h-48 object-cover"
            />
          }
        >
          <h2 className="text-xl font-semibold mb-2"> Baby Care Specialist</h2>
          <p className="text-gray-600 mb-4">
            Our expert caregivers provide nurturing care for newborns and
            infants, assisting with feeding, hygiene, and sleep routines. We
            ensure a loving and secure environment for your little one.
          </p>
        </Card>

        <Card
          hoverable
          className="transition-all duration-300 ease-in-out transform hover:scale-105"
          cover={
            <img
              alt="Senior Care"
              src={serviceImg27}
              className="w-full h-48 object-cover"
            />
          }
        >
          <h2 className="text-xl font-semibold mb-2">Dementia Care</h2>
          <p className="text-gray-600 mb-4">
            We offer personalized care for individuals with dementia, ensuring a
            safe and comfortable environment. Our caregivers provide cognitive
            stimulation, daily assistance, and emotional support to enhance the
            quality of life.
          </p>
        </Card>

        <Card
          hoverable
          className="transition-all duration-300 ease-in-out transform hover:scale-105"
          cover={
            <img
              alt="Intensive Care"
              src={serviceImg24}
              className="w-full h-48 object-cover"
            />
          }
        >
          <h2 className="text-xl font-semibold mb-2">Paralysis Patient Care</h2>
          <p className="text-gray-600 mb-4">
            We provide specialized care for paralysis patients, including
            mobility assistance, physiotherapy support, and personal hygiene
            care to improve their daily comfort and well-being.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Herosectionservices;
