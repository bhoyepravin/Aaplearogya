import React from "react";
import { Card } from "antd";

const TeamOverlay = () => {
  const teamMembers = [
    { name: "John Doe", image: "src/assets/Images/demo.jpg" },
    { name: "Jane Smith", image: "src/assets/Images/demo.jpg" },
    { name: "Alice Johnson", image: "src/assets/Images/demo.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-red-400">Our Team</h2> <br />
        <p className="text-3xl text-gray-600">Meet Our Qualified Staff</p>{" "}
        <br />
        <p className="text-gray-500 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            hoverable
            className="transform transition duration-300 hover:scale-105 shadow-lg rounded-lg"
            cover={
              <img
                src={member.image}
                alt={member.name}
                className="rounded-t-lg"
              />
            }
          >
            <Card.Meta title={member.name} className="text-center" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamOverlay;
