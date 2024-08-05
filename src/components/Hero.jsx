import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaUser, FaBell, FaShoppingBag, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const images = [
  '1.avif',
  '2.avif',
  '3.avif',
  '4.avif',
  '5.avif',
];

const MoissaniteRingsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const imageIndex = Math.floor(scrollPercentage * images.length);
      setCurrentImageIndex(Math.min(imageIndex, images.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen bg-cover bg-center bg-no-repeat">
      <header className="flex justify-between items-center p-4 bg-gray-900">
        <button className="text-yellow-600 z-50" onClick={toggleMenu}>
          <span className="mr-2">MENU</span>
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
        <div className="flex-1 flex justify-center">
          <img src="moissanite-logo.png" alt="Moissanite Engagement Rings" className="h-12" />
        </div>
        <div className="flex space-x-4 text-yellow-600">
          <FaSearch className="w-6 h-6" />
          <FaUser className="w-6 h-6" />
          <FaBell className="w-6 h-6" />
          <FaShoppingBag className="w-6 h-6" />
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <ul className="pt-20 px-4">
          <li className="mb-4"><a href="#" className="text-yellow-600 hover:text-white">Home</a></li>
          <li className="mb-4"><a href="#" className="text-yellow-600 hover:text-white">Collections</a></li>
          <li className="mb-4"><a href="#" className="text-yellow-600 hover:text-white">About Us</a></li>
          <li className="mb-4"><a href="#" className="text-yellow-600 hover:text-white">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-yellow-600 text-xl mb-2">MOISSANITE ENGAGEMENT RINGS</h2>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2">
            <motion.h1
              className="text-5xl font-serif mb-6 text-yellow-600"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              GET A BIGGER,<br />
              BRIGHTER STONE<br />
              AT 1/4 THE COST
            </motion.h1>
            <motion.p
              className="mb-6 text-yellow-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Environmentally Conscious and<br />
              Ethically Sourced
            </motion.p>
            <motion.button
              className="bg-yellow-600 text-gray-900 px-6 py-3 rounded-full font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              BROWSE COLLECTION
            </motion.button>
          </div>
          <div className="w-1/2 relative">
            <motion.img
              src={images[currentImageIndex]}
              alt="Moissanite Ring"
              className="w-full rounded-lg shadow-lg"
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-0 right-0 h-full flex flex-col justify-between items-center">
              <div className="flex flex-col items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <button 
                    key={i} 
                    className={`mb-4 ${currentImageIndex === i ? 'text-white' : 'text-yellow-600'}`} 
                    onClick={() => handleImageChange(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="writing-vertical-rl text-yellow-600 transform rotate-180">
                scroll down
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoissaniteRingsPage;