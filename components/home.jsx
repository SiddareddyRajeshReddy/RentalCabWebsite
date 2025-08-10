import React from "react";
import Login from "./Login";
import ChooseUs from "./chooseUs";
import ContactUs from "./contact";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <div className="w-full min-h-screen strips">
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-4 lg:px-16 xl:px-24">
                    <div className="w-full md:w-[45%] lg:w-[40%] relative flex flex-col justify-center items-center min-h-[60vh] md:min-h-screen md:justify-start md:items-start py-12 md:py-0 max-w-xl mx-auto md:mx-0">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f55f5f]">RCs</h2>
                        <div className="w-full z-2 flex flex-col">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#696161] leading-tight max-w-md md:max-w-xl">
                                We Have Prepared a Car For Your Trip
                            </h1>
                            <p className="my-4 sm:my-5 w-full md:w-[80%] text-[#847C7C] sm:p-2">
                                We have many types of cars that are ready for you to travel anywhere and anytime.
                            </p>
                            <div className="flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[60%] gap-4 sm:gap-6">
                                <a href="#" className="text-white bg-[#f55f5f] py-3 px-6 border-[#f55f5f] border-2 text-center rounded-md shadow hover:bg-[#e04b4b] transition min-w-[150px]">
                                    Get in Touch
                                </a>
                                <a href="#" className="text-[#f55f5f] border-[#f55f5f] border-2 bg-white py-3 px-6 text-center rounded-md shadow hover:bg-gray-50 transition min-w-[150px]">
                                    Our Car
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[45%] min-h-[320px] h-[60vh] md:h-screen relative overflow-hidden flex flex-col">
                        <ul className="list-none font-bold flex flex-wrap md:flex-row flex-col md:justify-between items-center gap-2 md:gap-0 w-full p-2 text-[#5d5555]">
                            <li><a href="#" className="hover:underline px-3 py-1 block">About</a></li>
                            <li><a href="#" className="hover:underline px-3 py-1 block">Car</a></li>
                            <li><a href="#" className="hover:underline px-3 py-1 block">Terms</a></li>
                            <li><a href="#" className="hover:underline px-3 py-1 block">Contact Us</a></li>
                        </ul>
                        <div className="relative flex-grow flex items-end justify-center md:justify-end mt-2 md:mt-16">
                            <img 
                                className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto object-contain z-10" 
                                src="./car.png" 
                                alt="Car" 
                            />
                        </div>
                    </div>
                     <div className="absolute inset-0 bg-[url('./bg.png')] bg-contain z-0"></div>
                </div>
                <div>
                    <Login />
                    <ChooseUs />
                    <ContactUs />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home;
