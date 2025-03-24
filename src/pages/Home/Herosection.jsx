import { useState } from "react";
import { Button, Modal } from "antd";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
const Herosection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-16"
      style={{
        backgroundImage: "url('src/assets/Images/patientcarenurse.jpg')",
      }}
    >
      {/* Text Section */}
      <div className="text-center md:text-left">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-950 leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We Provide Home <br className="hidden md:block" /> Care Service For{" "}
          <br className="hidden md:block" />
          Your Family
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-blue-950 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          We provide professional and personalized home care services{" "}
          <br className="hidden md:block" />
          to ensure your loved ones receive the attention, support,{" "}
          <br className="hidden md:block" />
          and medical assistance they need—all in the comfort of their home.{" "}
          <br className="hidden md:block" />
          Our trained caregivers are dedicated to improving their quality{" "}
          <br className="hidden md:block" />
          of life with compassion and expertise.
        </motion.p>

        {/* Button & Play Icon Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
          {/* Contact Us Button */}
          <button className="bg-red-500 hover:bg-blue-500 text-white font-semibold rounded-full px-6 py-4  border-none text-3xl">
            Contact Us
          </button>

          {/* Video Play Icon */}
          <div className="relative flex items-center justify-center group w-14 h-14 md:w-16 md:h-16 border-2 border-red-500  hover:bg-red-500  rounded-full cursor-pointer transition transform group-hover:scale-110">
            <FaPlay
              className="text-white text-4xl md:text-5xl"
              onClick={() => setIsModalVisible(true)}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        title="Watch Video"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        centered
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default Herosection;
