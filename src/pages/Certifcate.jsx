import React from 'react';
import { FaLeaf, FaCertificate, FaAward, FaStar } from 'react-icons/fa';

const CertificationsAndGuarantees = () => {
  const features = [
    {
      icon: <FaLeaf className="w-12 h-12 text-green-600" />,
      title: "Ethically Sourced and Made",
      description: "Lab grown provides less impact on the environment and supports fair work.",
      image: "/path-to-diamond-image.jpg"
    },
    {
      icon: <FaCertificate className="w-12 h-12 text-blue-600" />,
      title: "GRA Certified",
      description: "Recieve International Certification With Every Ring Purchase.",
      image: "/path-to-certification-image.jpg"
    },
    {
      icon: <FaAward className="w-12 h-12 text-yellow-600" />,
      title: "Lifetime Warranty",
      description: "Every Moissanite stone we sell comes with a lifetime warranty for repairs and re-sizing.",
      image: "/path-to-ring-on-finger-image.jpg"
    },
    {
      icon: <FaStar className="w-12 h-12 text-yellow-400" />,
      title: "Shines Brighter Than A Diamond",
      description: "Higher refractive index causes more lustre, fire, and brightness. Giving off more sparkle from your stone.",
      image: "/path-to-shiny-stone-image.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-serif text-center mb-2">Certifications and Our</h2>
      <h1 className="text-4xl font-serif text-center mb-12">LIFETIME GUARANTEES</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-6">
            <div className="w-1/2">
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsAndGuarantees;