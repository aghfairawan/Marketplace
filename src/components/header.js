import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  
  const hideLogoutPaths = ['/login', '/register'];

  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marketplace Katering</h1>
        <nav>
          <Link to="/" className="text-white mx-4 hover:underline">Home</Link>
          <Link to="/cart" className="text-white mx-4 hover:underline">Cart</Link>
          {!hideLogoutPaths.includes(pathname) && (
            <Link to="/login" className="text-white mx-4 hover:underline">Logout</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
