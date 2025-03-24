import {
  CheckCircleOutlined,
  DollarCircleOutlined,
  HeartTwoTone,
} from "@ant-design/icons";

const Section2 = () => {
  return (
    <div className="bg-blue-300 text-white flex flex-col items-center justify-center min-h-[300px] p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Satisfaction Guarantee</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <CheckCircleOutlined className="text-5xl text-green-300 mb-2" />
          <p className="text-lg font-semibold">Professional Nurses</p>
        </div>
        <div className="flex flex-col items-center">
          <DollarCircleOutlined className="text-5xl text-yellow-300 mb-2" />
          <p className="text-lg font-semibold">Low Cost Services</p>
        </div>
        <div className="flex flex-col items-center">
          <HeartTwoTone twoToneColor="#ff4d4f" className="text-5xl mb-2" />
          <p className="text-lg font-semibold">Caring Support</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
