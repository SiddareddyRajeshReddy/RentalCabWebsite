import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center w-full py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-center gap-8 lg:gap-16">
        {/* Contact Info Section */}
        <div className="w-full lg:w-[42.5%] flex flex-col px-4 gap-6">
          <div>
            <h4 className="text-[#FAB5B5] text-sm sm:text-base">GET IN TOUCH</h4>
            <h2 className="text-[#807878] text-3xl sm:text-4xl mt-2">Contact Us</h2>
            <p className="text-[#C2BABA] text-sm sm:text-base mt-3">
              If you need consultation with us, you can write a message or call us, we will respond as quickly as possible
            </p>
          </div>

          <ul className="flex flex-col list-none gap-5 py-2">
            <li className="flex gap-4 items-start">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <img src="./mail.png" alt="email" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#8C8484] font-medium text-sm sm:text-base">b230065@nitsikkim.ac.in</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-6 h-6 flex-shrink-0">
                <img src="./phone.png" alt="phone" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#8C8484] font-medium text-sm sm:text-base">+91 8522840158</p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <img src="./location.png" alt="location" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#8C8484] font-medium text-sm sm:text-base">
                National Institute of Technology Sikkim, South Sikkim, Sikkim
              </p>
            </li>
          </ul>

          <div className="flex justify-start items-center gap-4 sm:gap-6">
            {['insta', 'fb', 'twitter', 'linkedln'].map((social) => (
              <img 
                key={social}
                src={`./${social}.png`} 
                alt={social} 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[42.5%] flex flex-col gap-6 sm:gap-8">
          <div className=" bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="./map.png" 
              className="w-full h-full object-cover" 
              alt="map" 
            />
          </div>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/National+Institute+Of+Technology+Sikkim/@27.2975355,88.3573037,17z/data=!3m1!4b1!4m6!3m5!1s0x39e69b043d020435:0x6accf5242d3a7518!8m2!3d27.2975355!4d88.3573037!16s%2Fm%2F0w33lqs?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" 
            className="text-white font-medium bg-[#f55f5f] py-3 px-6 border-[#f55f5f] border-2 w-full sm:w-auto sm:max-w-[50%] lg:max-w-[40%] text-center hover:bg-transparent hover:text-[#f55f5f] transition-colors duration-300 rounded-md"
          >
            Office Center Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;