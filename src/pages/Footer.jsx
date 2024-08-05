import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Follow Us on Instagram */}
      <div className="container mx-auto px-4 text-center mb-8">
        <div className="flex justify-center items-center space-x-4">
          <FaInstagram className="text-2xl" />
          <span className="text-lg">Follow Us on Instagram</span>
          <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg">@moissaniteengagementrings</button>
        </div>
      </div>

      {/* Quick Links and Newsletter */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Search</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500">Refund policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Association Membership */}
          <div>
            <p>We are members of the Jewellers Association of Australia and stock moissanite diamonds graded by the GIA.</p>
            <div className="flex space-x-4 mt-4">
              <img src="/path-to-jaa-logo.jpg" alt="JAA" className="h-8" /> {/* Replace with the actual path to the logo */}
              <img src="/path-to-gia-logo.jpg" alt="GIA" className="h-8" /> {/* Replace with the actual path to the logo */}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 md:mt-0">
          <h4 className="font-bold mb-4">Join Our Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="py-2 px-4 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-r-lg">Join</button>
          </div>
          <div className="flex space-x-2 mt-4">
            <img src="/path-to-visa-logo.jpg" alt="Visa" className="h-6" /> {/* Replace with the actual path to the logo */}
            <img src="/path-to-mastercard-logo.jpg" alt="Mastercard" className="h-6" /> {/* Replace with the actual path to the logo */}
            <img src="/path-to-paypal-logo.jpg" alt="PayPal" className="h-6" /> {/* Replace with the actual path to the logo */}
            {/* Add more payment logos as needed */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 text-center text-gray-500">
        &copy; 2022, moissaniteengagementrings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
