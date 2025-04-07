import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Positivus</h1>
      <nav>
        <ul className="flex space-x-6 text-gray-900">
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Use Cases</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
      <button className="border border-gray-900 px-4 py-2 rounded-lg">
        Request a quote
      </button>
    </header>
  );
}

export default Header;
