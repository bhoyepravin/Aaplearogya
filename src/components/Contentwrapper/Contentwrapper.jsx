const ContentWrapper = ({ title, description }) => {
  return (
    <div className="text-center md:text-left max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default ContentWrapper;
