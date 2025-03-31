const Visionmission = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Our Vision & Mission
        </h2>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600 text-xl">
            To be the most trusted home healthcare provider, offering
            compassionate, high-quality, and accessible care that enhances the
            well-being of our patients and their families.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h3>
          <ul className="text-gray-600 space-y-2 text-xl">
            <li>
              ✅ Provide 24/7 emergency services with expert doctors and nurses.
            </li>
            <li>
              ✅ Offer personalized patient care that ensures comfort and
              dignity
            </li>
            <li>
              ✅ Utilize state-of-the-art medical equipment for effective
              treatment.
            </li>
            <li>
              ✅ Support families with affordable medical equipment rentals and
              healthcare solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Visionmission;
