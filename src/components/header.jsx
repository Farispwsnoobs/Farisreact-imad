import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md bg-white relative z-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Positivus Logo" className="h-6" />
        <span className="font-semibold text-lg">Positivus</span>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button className="border border-black px-4 py-2 rounded-full">
          Request a quote
        </button>
      </nav>
    </header>
  );
};

export default Header;
