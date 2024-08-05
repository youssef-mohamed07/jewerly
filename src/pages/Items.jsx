import React, { useState } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight, FaSearch, FaShoppingCart } from 'react-icons/fa';

const PopularDesigns = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const rings = [
    { name: 'Oval Engagement Ring', price: 'AUD 1,995', image: '/path-to-ring-1.jpg', category: 'Engagement' },
    { name: 'Round Wedding Ring', price: 'AUD 2,500', image: '/path-to-ring-2.jpg', category: 'Wedding' },
    { name: 'Princess Diamond Ring', price: 'AUD 3,000', image: '/path-to-ring-3.jpg', category: 'Diamond' },
    { name: 'Gold Band', price: 'AUD 750', image: '/path-to-ring-4.jpg', category: 'Band' },
    // Add more ring objects as needed
  ];

  const filteredRings = rings.filter(ring =>
    (selectedCategory === 'All' || ring.category === selectedCategory) &&
    ring.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextSlide = () => {
    setStartIndex(prevIndex => (prevIndex + 1 >= filteredRings.length ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => (prevIndex - 1 < 0 ? filteredRings.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-serif text-center mb-8">MOST POPULAR DESIGNS</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          />
          <FaSearch className="absolute right-2 top-2 text-gray-500" />
        </div>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="ml-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
        >
          <option value="All">All</option>
          <option value="Engagement">Engagement</option>
          <option value="Wedding">Wedding</option>
          <option value="Diamond">Diamond</option>
          <option value="Band">Band</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <div className="flex overflow-x-hidden">
          {filteredRings.slice(startIndex, startIndex + 4).map((ring, index) => (
            <div key={index} className="w-1/4 px-2">
              <div className="bg-gray-100 p-4 rounded-lg relative">
                <img src={ring.image} alt={ring.name} className="w-full h-48 object-cover mb-4" />
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                  <FaHeart />
                </button>
                <h3 className="text-sm font-medium">{ring.name}</h3>
                <p className="text-sm font-bold">{ring.price}</p>
                <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center">
                  <FaShoppingCart className="mr-2" /> Buy
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PopularDesigns;
