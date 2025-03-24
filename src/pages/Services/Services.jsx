import { Card } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageSection from "../../components/Herosection/PageSection";
import services from "../../constants/Services";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageSection page="services" />

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => navigate(`/service/${service.id}`)}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={service.title}
                  src={service.image}
                  className="h-48 object-cover"
                />
              }
              className="rounded-2xl shadow-lg"
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
