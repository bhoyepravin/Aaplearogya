import {
  CheckCircleOutlined,
  DollarCircleOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const Section2 = () => {
  return (
    <div className="bg-[#574964] text-white flex flex-col items-center justify-center min-h-[300px] p-6 text-center">
      <ContentWrapper>
        <h2 className="text-3xl font-bold mb-4">Satisfaction Guarantee</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center">
            <CheckCircleOutlined className="text-5xl text-green-300 mb-2" />
            <p className="text-lg font-semibold">Professional Nurses</p>
            <p>
              Our skilled nurses deliver expert care with compassion and
              dedication. Your health and comfort are our top priorities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <DollarCircleOutlined className="text-5xl text-yellow-300 mb-2" />
            <p className="text-lg font-semibold">Low Cost Services</p>
            <p>
              We provide affordable healthcare solutions without compromising on
              quality. Accessible care for everyone, anytime.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <HeartTwoTone twoToneColor="#ff4d4f" className="text-5xl mb-2" />
            <p className="text-lg font-semibold">Caring Support</p>
            <p>
              Experience personalized and compassionate support throughout your
              health journey. We’re here to care for you every step of the way.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Section2;
