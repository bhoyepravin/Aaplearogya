import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import AddressPhone from "../AddressPhone/AddressPhone";
import { navLogo } from "../../../public/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={navLogo} alt="NURSERA Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold text-gray-700 ml-2">
                  Aple Arogya Health Care Center
                </span>
              </a>
            </div>
            <div className="hidden md:flex space-x-4 space-x-8 font-bold">
              <a href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
              <a href="/aboutus" className="text-gray-700 hover:text-blue-500">
                About Us
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
              {/* <a
                href="/appointment"
                className="text-gray-700 hover:text-blue-500"
              >
                Appointment
              </a> */}
              <a href="/ourteam" className="text-gray-700 hover:text-blue-500">
                Our Team
              </a>
              <a href="/gallery" className="text-gray-700 hover:text-blue-500">
                Gallery
              </a>
              <a
                href="/contactus"
                className="text-gray-700 hover:text-blue-500"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0, y: -20 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          exit={{ height: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-blue-300 text-white font-bold shadow-md"
        >
          <div className="px-4 pt-4 pb-3 space-y-2">
            <a
              href="/"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="/aboutus"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              About Us
            </a>
            <a
              href="/services"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Services
            </a>
            {/* <a
              href="/appointment"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Appointment
            </a> */}
            <a
              href="/ourteam"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Our Team
            </a>
            <a
              href="/gallery"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Gallery
            </a>
            <a
              href="/contactus"
              className="block text-white hover:text-gray-200 transition-transform transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </nav>

      <AddressPhone />
    </div>
  );
};

export default Navbar;
