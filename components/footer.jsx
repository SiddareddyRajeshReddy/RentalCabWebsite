import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4">GRENN</h2>
            <p className="text-gray-300 mb-6">
              We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Our Partner</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Instant Rent</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Private Driver</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Long Trip</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Call Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partner With Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms & Condition</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GRENN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;