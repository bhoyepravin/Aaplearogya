import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const AddressPhone = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hide on mobile, show on tablets and larger screens */}
        <div className="hidden sm:flex flex-row justify-between items-center">
          {/* Address Section */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.google.com/maps/place/Aaple+Aarogya+Health+Care+Centre/@19.9582349,73.729395,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdded0060ba914f:0x819c0520d9ea44fc!8m2!3d19.9582349!4d73.729395!16s%2Fg%2F11wxhf2xp2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-green-500"
            >
              <FaLocationDot className="ml-2 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base">
                Shiv Kripa Row House, Maruti Sankul, 1, Madhushil Rd, <br />
                Ambedkar Nagar,Chunchale,Nashik - 422213, India
              </span>
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-2">
            <a
              href="tel:+62815485612"
              className="flex items-center text-gray-700 hover:text-green-500"
            >
              <IoCall className="ml-2 text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base">+91 7020548562</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPhone;
