import React from 'react';
import { FaHeart } from 'react-icons/fa';

const EthicalRingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left section with images */}
        <div className="md:w-1/2 relative mb-8 md:mb-0">
          <img 
            src="/path-to-your-background-image.jpg" 
            alt="Hands holding ring" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img 
            src="/path-to-your-ring-image.jpg" 
            alt="Moissanite ring" 
            className="absolute bottom-0 right-0 w-1/3 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right section with text content */}
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
          <FaHeart className="text-4xl text-gray-800 mb-4" />
          <h2 className="text-3xl font-serif mb-4 text-gray-800">
            CELEBRATE YOUR LOVE<br />
            WITHOUT SACRIFICING<br />
            MOTHER EARTH.
          </h2>
          <p className="mb-4 text-gray-600">
            Moissanite Engagement Rings only source ethically made lab-grown gems and recycled gold that does not encourage harmful mining techniques.
          </p>
          <p className="mb-6 text-gray-600">
            This allows ensures workers can be paid fairly and avoids encouraging blood diamond production in developing countries.
          </p>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
            LET'S PICK A RING
          </button>
        </div>
      </div>
    </div>
  );
};

export default EthicalRingsPage;