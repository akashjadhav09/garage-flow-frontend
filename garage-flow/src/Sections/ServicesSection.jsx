// components/ServicesSection.jsx
import React from "react";
import CustomServiceCard from ".././Components/CustomServiceCard";

const services = [
  {
    title: "Oil Change",
    price: "₹ 799",
    image: "src/assets/Bike-3.jpg",
  },
  {
    title: "Repair",
    price: "₹ 1299",
    image: "src/assets/Bike-2.jpg",
  },
  {
    title: "Wash",
    price: "₹ 199",
    image: "src/assets/Bike wash.jpg",
  },
  {
    title: "General Service",
    price: "₹ 999",
    image: "src/assets/Bike-GS.jpg",
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {services.map((service, index) => (
        <CustomServiceCard
          key={index}
          image={service.image}
          title={service.title}
          price={service.price}
        />
      ))}
    </div>
  );
};

export default ServicesSection;