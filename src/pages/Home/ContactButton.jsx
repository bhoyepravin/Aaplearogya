import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-red-500 hover:bg-blue-500 text-white font-semibold rounded-full px-6 ml-6 py-4 w-50 border-none text-2xl"
      onClick={() => navigate("/contactus")}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
