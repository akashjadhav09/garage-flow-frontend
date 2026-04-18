// components/ServicesSection.jsx
import React from "react";
import CustomServiceCard from ".././Components/CustomServiceCard";

const services = [
  { title: "Oil Change",      price: "₹999",  image: "src/assets/Bike-3.jpg"     },
  { title: "Repair",          price: "₹1499", image: "src/assets/Bike-2.jpg"     },
  { title: "Car Wash",        price: "₹499",  image: "src/assets/Bike wash.jpg"  },
  { title: "General Service", price: "₹1999", image: "src/assets/Bike-GS.jpg"    },
];

const ServicesSection = () => {
  return (
    <section className="py-2 my-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <CustomServiceCard
            key={index}
            image={service.image}
            title={service.title}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;