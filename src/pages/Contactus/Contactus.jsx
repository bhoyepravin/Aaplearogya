import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import emailjs from "emailjs-com";
import PageSection from "../../components/Herosection/PageSection";

const Contactus = () => {
  const sendMessage = (values) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", values, "YOUR_USER_ID")
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });

    const whatsappMessage = `Name: ${values.name}%0AEmail: ${values.email}%0APhone: ${values.phone}%0ASubject: ${values.subject}%0AMessage: ${values.message}`;
    window.open(
      `https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div>
      <PageSection page={"contact"} />
      <div className="container mx-auto px-4 py-10 bg-gradient-to-b from-teal-100 to-white">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Contact Details */}
          <div className="w-full md:w-1/3 bg-teal-500 text-white p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-white">
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-lg" />
                <div className="flex flex-col">
                  <a href="tel:+917743880977" className="hover:underline">
                    +91 7743880977
                  </a>
                  <a href="tel:+917020548562" className="hover:underline">
                    +91 7020548562
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-wrap">
                <MailOutlined className="text-lg" />
                <a
                  href="mailto:aplearogyavikasbahuuddeshiyasa@gmail.com"
                  className="hover:underline"
                >
                  aplearogyavikasbahuuddeshiyasa@
                  <br />
                  gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-lg" />
                <a
                  href="https://maps.app.goo.gl/Jk26RRwJmpeeNcLc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Shiv Kripa Row House, Maruti Sankul, Nashik, India
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full h-250 mt-10 flex justify-center items-center p-4">
            <iframe
              src="https://whatsform.com/6hkb6g"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* WhatsForm Embed */}

        {/* <Button
          type="primary"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 text-lg mt-4"
          onClick={() => window.open("https://whatsform.com/6HKb6G", "_blank")}
        >
          Open WhatsForm
        </Button> */}

        {/* Google Map */}
        <div className="w-full h-96 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5303.557263306367!2d73.72950387871944!3d19.958876087905825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded0060ba914f%3A0x819c0520d9ea44fc!2sAaple%20Aarogya%20Health%20Care%20Centre!5e0!3m2!1sen!2sin!4v1742705222350!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
