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
            {/* <p className="mb-4">
            We’ll create high-quality reliable content and build at least 3
            high-authority
          </p> */}
            <div className="space-y-3 text-white">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-lg" />
                <a href="tel:+917743880977" className="hover:underline">
                  +91 7743880977
                </a>
                <a href="tel:+917020548562" className="hover:underline">
                  +91 7020548562
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <MailOutlined className="text-lg" />
                <a
                  href="aplearogyavikasbahuuddeshiyasa@gmail.com
"
                  className="hover:underline"
                >
                  support@yourbusiness.com
                </a>
              </div>

              {/* Google Maps */}
              <div className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-lg" />
                <a
                  href="https://maps.app.goo.gl/Jk26RRwJmpeeNcLc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Shiv Kripa Row House, Maruti Sankul, 1, Madhushil Rd, Ambedkar
                  Nagar, Chunchale, Nashik, Maharashtra 422213, India
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 p-8">
            <Form
              layout="vertical"
              onFinish={sendMessage}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Your Full Name" className="p-2" />
                </Form.Item>
                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    placeholder="hello@example.com"
                    type="email"
                    className="p-2"
                  />
                </Form.Item>
              </div>
              <Form.Item
                label="Your Contact No"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact number",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your contact number"
                  type="tel"
                  className="p-2"
                />
              </Form.Item>
              <Form.Item
                label="Your Subject"
                name="subject"
                rules={[{ required: true, message: "Please enter subject" }]}
              >
                <Input placeholder="Enter subject" className="p-2" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  placeholder="Write here your message"
                  rows={4}
                  className="p-2"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 text-lg"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </div>

        {/* Full-Width Map */}
        <div className="w-full h-96 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5303.557263306367!2d73.72950387871944!3d19.958876087905825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded0060ba914f%3A0x819c0520d9ea44fc!2sAaple%20Aarogya%20Health%20Care%20Centre!5e0!3m2!1sen!2sin!4v1742705222350!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
