import React, { useState } from 'react';
import logo from "../assets/logo-no-background.png"
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 px-32 font-bold text-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="PaySync Logo" className="h-8" />
        <ul className="hidden md:flex space-x-6">
          <li><Link to={"https://www.npmjs.com/package/paysync"} className="hover:text-gray-300">Guide</Link></li>
          <li><Link to={"/installation"} className="hover:text-gray-300">Installation</Link></li>
          <li><Link to={"/test"} className="hover:text-gray-300">Test</Link></li>
          <li><Link to={"/blog"} className="hover:text-gray-300">Blog</Link></li>
        </ul>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="https://www.npmjs.com/package/paysync" className="block py-2 px-4 text-sm hover:bg-purple-600">Guide</a>
          <a href="/installation" className="block py-2 px-4 text-sm hover:bg-purple-600">Installation</a>
          <a href="/test" className="block py-2 px-4 text-sm hover:bg-purple-600">Test</a>
          <a href="/blog" className="block py-2 px-4 text-sm hover:bg-purple-600">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;