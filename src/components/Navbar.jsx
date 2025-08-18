import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  isActive = (path) => {
    return window.location.pathname === path;
  };

  render() {
    return (
      <nav className="bg-blue-100 p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <Link
            to="/"
            className={`group relative font-semibold text-lg transition-colors duration-200 ${
              this.isActive('/') ? 'text-blue-900' : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            🏠 Home
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-700 transition-all duration-200 ${
                this.isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            to="/info"
            className={`group relative font-semibold text-lg transition-colors duration-200 ${
              this.isActive('/info') ? 'text-green-800' : 'text-green-600 hover:text-green-800'
            }`}
          >
            📚 Info
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-green-700 transition-all duration-200 ${
                this.isActive('/info') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            to="/good-habits"
            className={`group relative font-semibold text-lg transition-colors duration-200 ${
              this.isActive('/good-habits') ? 'text-purple-800' : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            ✨ Good Habits
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-purple-700 transition-all duration-200 ${
                this.isActive('/good-habits') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
