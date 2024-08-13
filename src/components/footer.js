import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Catering Marketplace. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="text-gray-400 hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
