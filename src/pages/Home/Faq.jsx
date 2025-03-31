import React from "react";
import { Collapse } from "antd";
import { motion } from "framer-motion";

const { Panel } = Collapse;

const faqData = [
  {
    question: "What services do you offer for home healthcare?",
    answer:
      "We provide patient care for dementia, baby care, paralysis patients, dressing, sponging, RT feed patients, and more. Additionally, we offer medical equipment rentals like wheelchairs, ICU beds, oxygen machines, and walkers.",
  },
  {
    question: "How can I book a healthcare service at home?",
    answer:
      "You can book our services through our website by filling out a simple form, calling our helpline, or chatting with our support team.",
  },
  {
    question: "Do you provide emergency medical services at home?",
    answer:
      "Yes, we offer urgent patient care services. Contact us for immediate assistance.",
  },
  {
    question: "Do your caregivers provide 24/7 services?",
    answer:
      "Yes, we offer round-the-clock care services, including daytime and night shifts.",
  },
];

const Faq = () => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <Collapse accordion className="bg-white rounded-lg shadow">
        {faqData.map((faq, index) => (
          <Panel
            header={faq.question}
            key={index}
            className="text-lg font-medium"
          >
            <p className="text-gray-600">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </motion.div>
  );
};

export default Faq;
