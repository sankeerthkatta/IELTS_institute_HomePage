import { useState } from "react";
import { FaBook, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <FaBook className="text-[rgb(11,66,142)] w-7 h-7" />
        <h1 className="text-2xl font-bold text-[rgb(11,66,142)]">IELTS Mastery</h1>
      </div>
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li className="hover:text-[rgb(11,66,142)] cursor-pointer">Home</li>
        <li className="hover:text-[rgb(11,66,142)] cursor-pointer">Courses</li>
        <li className="hover:text-[rgb(11,66,142)] cursor-pointer">About</li>
        <li className="hover:text-[rgb(11,66,142)] cursor-pointer">Contact</li>
      </ul>
      <button className="bg-[rgb(11,66,142)] text-white px-4 py-2 rounded-md hidden md:block">
        Join Now
      </button>
      {/* Hamburger Icon */}
      <button
        className="md:hidden text-[rgb(11,66,142)] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-gray-700 font-semibold">
            <li className="hover:text-[rgb(11,66,142)] cursor-pointer" onClick={() => setMenuOpen(false)}>Home</li>
            <li className="hover:text-[rgb(11,66,142)] cursor-pointer" onClick={() => setMenuOpen(false)}>Courses</li>
            <li className="hover:text-[rgb(11,66,142)] cursor-pointer" onClick={() => setMenuOpen(false)}>About</li>
            <li className="hover:text-[rgb(11,66,142)] cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</li>
            <button
              className="bg-[rgb(11,66,142)] text-white px-4 py-2 rounded-md mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
