import React from "react";
import Search from "./search";
const Home = () => {
    return (
        <>
            {/* <img className="sticky w-[10%] top-[16vw] right-0 z-2" src="./car.png" alt="" />
                <img className="absolute w-[10%] top-[5vw] right-0 z-1" src="./bg.png" alt="" /> */}
            <div className="w-full min-h-full strips">
                <div className="flex gap-[4%] justify-center">
                    <img className="absolute w-[60%] top-[5vw] right-0 z-1" src="./bg.png" alt="" />
                    <img className="absolute w-[60%] top-[16vw] right-0 z-1" src="./car.png" alt="" />
                    <div className=" w-[40%] min-h-screen relative">
                        <h3>Logo</h3>
                        <div className="absolute top-[15vw] w-[100%] left-[25px] z-2 flex items-start flex-col">
                            <h1 className="text-5xl inter-500 text-[#696161]">We Have Prepared a Car For Your Trip</h1>
                            <p className="my-[20px] w-[70%] text-[#847C7C] p-2">We have many types of cars that are ready for you to travel anywhere and anytime.</p>
                            <div className="flex w-[50%] gap-6">
                                <a href="#" className="text-white bg-[#f55f5f] p-[0.8rem] border-[#f55f5f] border-2">Get in Touch</a>
                                <a href="#" className="text-[#f55f5f] border-[#f55f5f] border-2 bg-white p-[0.8rem]">Our Car</a>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[40%] min-h-screen">
                        <ul className="list-none flex justify-between w-full p-4 text-[#5d5555]">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Car</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-center py-12 bg-stripes">
                    <Search />
                </div>
            </div>
        </>
    )
}
export default Home