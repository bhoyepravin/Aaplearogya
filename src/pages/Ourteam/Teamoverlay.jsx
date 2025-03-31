import React from "react";
import { Card } from "antd";
import { team1, team2 } from "../../../public/assets";

const TeamOverlay = () => {
  const teamMembers = [
    {
      name: "Mr. Himmat Chaudhari ",
      designation: "CEO & Director",
      image: team2,
    },
    {
      name: "Mr. Vivek Gangurde",
      designation: "Head of Marketing",
      image: team1,
    },
    // {
    //   name: "Alice Johnson",
    //   designation: "Home Care Specialist",
    //   image: "src/assets/Images/demo.jpg",
    // },
  ].filter((member) => member.image); // Filter out team members with missing images

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        {/* <p className="text-5xl font-bold text-gray-800 mb-6">Meet Our Team</p> */}
        <br />
        <p className="text-gray-500 max-w-full mx-auto text-xl">
          At Aple Aarogya Health Care Center, our team of dedicated healthcare
          professionals is committed to providing the highest standard of home
          healthcare services. With a passion for patient care and years of
          experience, our staff ensures comfort, dignity, and well-being for
          every individual we serve.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <Card
              key={index}
              hoverable
              className="transform transition duration-300 hover:scale-105 shadow-lg rounded-lg"
              cover={
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-t-lg object-cover w-full h-60"
                  onError={(e) => (e.target.style.display = "none")} // Hide broken images
                />
              }
            >
              <Card.Meta
                title={member.name}
                description={member.designation}
                className="text-center"
              />
            </Card>
          ))
        ) : (
          <p className="text-gray-600 text-xl">No team members available</p>
        )}
      </div>
    </div>
  );
};

export default TeamOverlay;
