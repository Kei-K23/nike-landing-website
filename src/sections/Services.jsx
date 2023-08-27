import ServicesCard from "../components/ServicesCard";
import { services } from "../constants/index";
const Services = () => {
  return (
    <section id="services">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 ">
        {services.map((service, index) => (
          <div key={index}>
            <ServicesCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
