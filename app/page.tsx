import React from "react";
import Particles from "./components/particles";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
	
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-100">
            
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400" />

            <Particles className="absolute inset-0 animate-fade-in" quantity={20} />

            {/* Logo Image with animation */}
            <img src="Saige.png" alt="Logo" className="z-10 animate-fade-in mb-4 w-60 h-60" />

            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                SAIGEmind
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400" />
            
            <div className="my-6 text-center animate-fade-in">
                <h2 className="text-lg text-gray-700">
                    SAIGEmind: Creating the next generation of mental healthcare, from diagnosis to treatment access.
                </h2>
				<p className="z-10 text-3xl text-gray-600 mt-20 animate-fade-in">Website Coming Soon</p>
                {/* Social icons with animation */}
                <div className="mt-4 flex justify-center space-x-4 animate-fade-in">
                    {/* <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/saigemind" className="text-gray-700 hover:text-gray-900 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a> */}
                    {/* Add more icons as needed */}
                </div>

            </div>
        </div>
    );
}
