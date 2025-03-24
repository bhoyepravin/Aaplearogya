import React, { useState, useEffect } from "react";
import {
  SmileOutlined,
  HomeOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const Counter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.ceil(prevCount + increment);
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center p-4">
      <div className="text-4xl text-blue-500 mb-2">{icon}</div>
      <div className="text-4xl font-bold mb-2">{count}+</div>
      <div className="text-xl text-gray-600">{label}</div>
    </div>
  );
};

const Herocounter = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            target={2645}
            label="Happy Patients"
            icon={<SmileOutlined />}
          />
          <Counter
            target={4285}
            label="Successful Home Care"
            icon={<HomeOutlined />}
          />
          <Counter
            target={20}
            label="Years Of Experience"
            icon={<CalendarOutlined />}
          />
          <Counter
            target={50}
            label="Professional Nurses"
            icon={<TeamOutlined />}
          />
        </div>
      </div>
    </div>
  );
};

export default Herocounter;
