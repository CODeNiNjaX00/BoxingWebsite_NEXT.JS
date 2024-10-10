import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">GitFIT</h3>
            <p className="text-gray-400 mb-4">Unleash your inner fighter and transform your body.</p>
            <p className="text-gray-400">Moshtohor - Toukh - Egypt</p>
            <p className="text-gray-400">Phone: (+20) 1090562241</p>
            <p className="text-gray-400">Email: ahmedelhoseny04@gmail.com</p>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-6 mb-6">
              <a href="#" className="text-3xl hover:text-red-500 transition-colors duration-300"><FaFacebook /></a>
              <a href="#" className="text-3xl hover:text-red-500 transition-colors duration-300"><FaTwitter /></a>
              <a href="#" className="text-3xl hover:text-red-500 transition-colors duration-300"><FaInstagram /></a>
              <a href="#" className="text-3xl hover:text-red-500 transition-colors duration-300"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 GitFIT. All rights reserved. Developed by Dr. Ahmed Elhoseny</p>
        </div>
      </div>
    </footer>
  );
}