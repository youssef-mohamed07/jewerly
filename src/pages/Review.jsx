import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Popular = () => {
  const reviews = [
    {
      name: 'Luke Garnd',
      location: 'Georgetown, CA',
      image: '/path-to-image.jpg', // Replace with the actual path to the image
      text: 'I had no idea how to choose an engagement ring for my partner! Luckily, with the help of the friendly team, I was able to have the perfect ring designed and delivered without fuss!',
      rating: 5,
    },
    // Add more review objects as needed
  ];

  const publications = [
    { name: 'Martha Stewart', logo: '/path-to-martha-stewart-logo.jpg' }, // Replace with the actual path to the logo
    { name: 'Forbes', logo: '/path-to-forbes-logo.jpg' },
    { name: 'Vogue', logo: '/path-to-vogue-logo.jpg' },
    // Add more publication objects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sample Ring Section */}
      <div className="relative bg-gray-900 text-white text-center py-16">
        <img
          src="/path-to-hero-image.jpg" // Replace with the actual path to the hero image
          alt="Sample Ring"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-serif mb-4">Get A Sample Ring Delivered To Your Door</h2>
          <p className="mb-8">
            Pay a small deposit and we'll send you a ring that you can experience with your own eyes.
          </p>
          <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg">Get A Sample</button>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-serif mb-8">Customer Reviews</h3>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaChevronLeft className="text-gray-600" />
          </button>
          <div className="flex overflow-x-hidden">
            {reviews.map((review, index) => (
              <div key={index} className="w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-700 mb-4">{review.text}</p>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex justify-center mt-2">
                    {Array(review.rating).fill().map((_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* As Seen On Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-serif mb-8">As Seen On</h3>
        <div className="flex justify-center">
          {publications.map((publication, index) => (
            <div key={index} className="mx-4">
              <img src={publication.logo} alt={publication.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
