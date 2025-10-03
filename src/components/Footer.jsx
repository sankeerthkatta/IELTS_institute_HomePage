import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBook } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[rgb(11,66,142)] text-gray-200 px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <FaBook className="text-[rgb(11,66,142)] w-8 h-8 bg-white rounded-lg p-1" />
            <span className="text-xl font-bold text-white">IELTS Mastery</span>
          </div>
          <p className="mb-4">Your trusted partner for achieving IELTS excellence and unlocking global opportunities.</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-blue-900 hover:bg-blue-800 rounded-full p-3 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-900 hover:bg-blue-800 rounded-full p-3 transition">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-900 hover:bg-blue-800 rounded-full p-3 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-900 hover:bg-blue-800 rounded-full p-3 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <div className="flex items-center gap-2 mb-2">
            <MdEmail className="w-5 h-5" />
            <span className="break-all">info@ielts-institute.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MdPhone className="w-5 h-5" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <MdLocationOn className="w-5 h-5" />
            <span>123 Education St, Learning City, LC 12345</span>
          </div>
          <button className="bg-gray-200 text-[rgb(11,66,142)] px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition w-full md:w-auto">
            Book Consultation
          </button>
        </div>
      </div>
      <hr className="my-8 border-blue-900" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <span className="text-center md:text-left">© 2024 IELTS Institute. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
