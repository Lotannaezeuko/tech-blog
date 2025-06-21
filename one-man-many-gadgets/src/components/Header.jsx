// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-sm border-b">
      {/* Top Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">One Man, Many Gadgets</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-1 rounded text-sm"
          />
          <button className="text-sm hover:underline">🔖 Bookmarks</button>
          <button className="text-sm hover:underline">📤 Share</button>
        </div>
      </div>
      {/* Sub-header Navigation */}
      <div className="flex space-x-6 px-6 py-2 text-sm border-t">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/categories" className="hover:underline">Categories</Link>
        <Link to="/linked-items" className="hover:underline">Linked Items</Link>
      </div>
    </header>
  );
};

export default Header;