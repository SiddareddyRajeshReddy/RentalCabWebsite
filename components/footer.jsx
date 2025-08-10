import React from "react";

function Footer() {
  return (
    <footer className=" text-white w-full flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 w-[88%]">
          {/* Brand Info */}
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4 text-[#f55f5f]">RCs</h2>
            <p className="text-[#AEA6A6] mb-6">
              We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.
            </p>
             <div className="flex justify-start flex-wrap items-center gap-4">
          <img src="./insta.png" alt="" />
          <img src="./fb.png" alt="" />
          <img src="./twitter.png" alt="" />
          <img src="./linkedln.png" alt="" />
        </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#807878]">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Cars</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Our Partner</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#807878]">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Instant Rent</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Private Driver</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Long Trip</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#807878]">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Call Center</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Partner With Us</a></li>
              <li><a href="#" className="text-[#AEA6A6] hover:text-white transition">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
         <div className="w-full bg-[#f55f5f]  mt-3 text-center text-white">
          <p>© {new Date().getFullYear()} GRENN. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;