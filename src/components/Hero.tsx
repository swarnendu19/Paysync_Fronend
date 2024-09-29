import React from "react";
import arrowRightPurple from "../assets/arrow-right-purple.svg";
import phone from "../assets/analysis-front.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black py-20 px-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Welcome to PaySync – One Step Payment solution
            </h1>
            <p className="text-xl mb-8 text-white">
              PaySync is your one-stop solution for seamless payment processing
              across multiple providers. It offers a unified interface that
              integrates effortlessly with any payment platforms, ensuring
              smooth transitions, scalability, and a consistent codebase.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={"https://www.npmjs.com/package/paysync"}>
                {" "}
                <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center">
                  Guide
                  <img
                    src={arrowRightPurple}
                    alt="Arrow Right Purple"
                    className="ml-2 h-4 w-4"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-fit rounded-3xl overflow-hidden ">
            <img className="bg-cover h-[700px]" src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
