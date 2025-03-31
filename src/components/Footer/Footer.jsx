import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Aple Arogya Health Care Center
            </h2>
            <p className="text-gray-400">
              "We provide compassionate home healthcare services and
              high-quality medical equipment rentals to ensure the best care for
              your loved ones. Your health and comfort are our priority!"
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/aboutus" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/ourteam" className="text-gray-400 hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contactus" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Work Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Work Hours</h3>
            <p className="text-gray-400">10:00 AM – 6:00 PM , Mon – Sat</p>
            <p className="text-gray-400 mt-4">
              "Dedicated to providing expert home healthcare and reliable
              medical equipment rentals, ensuring comfort, care, and peace of
              mind for every patient."
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <HiLocationMarker className="text-red-500 text-4xl" />
              <a
                href="https://www.google.com/maps/place/Aaple+Aarogya+Health+Care+Centre/@19.9582349,73.729395,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdded0060ba914f:0x819c0520d9ea44fc!8m2!3d19.9582349!4d73.729395!16s%2Fg%2F11wxhf2xp2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Shiv Kripa Row House, Maruti Sankul, 1, Madhushil Rd, Ambedkar
                Nagar, Chunchale, Nashik, Maharashtra 422213, India
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <HiMail className="text-blue-400 text-xl" />
              <a
                href="mailto:chaudharihimmat758@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                aplearogyavikasbahuuddeshiyasa@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <HiPhone className="text-green-400 text-xl" />
              <a
                href="tel:+917743880977"
                className="text-gray-400 hover:text-white"
              >
                +91 7743880977 <br />
              </a>
              <a
                href="tel:+917020548562"
                className="text-gray-400 hover:text-white"
              >
                +91 7020548562 <br />
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com/share/1CBn9ZtYrf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/aaple_aarogya_healthcare?igsh=MWJmNmtyNWJkMWpndg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://jsdl.in/RSL-FWD1743152698"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright and Created By */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            Copyright © 2025. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Developed by{" "}
            <a href="https://www.richsol.com/" className="hover:text-white">
              RICH System Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
