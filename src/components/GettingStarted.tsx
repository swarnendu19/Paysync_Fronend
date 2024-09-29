import React from 'react';

import img1 from "../assets/arrow-right-light.svg"
import img2 from "../assets/arrow-right-purple.svg"
import img3 from "../assets/bars-icon.png"
import img4 from "../assets/arrow-right-purple.svg"
import img5 from "../assets/shield-icon.png"
import { Link } from 'react-router-dom';

const GettingStarted: React.FC = () => {
  return (
    <div className="bg-white py-20 px-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">What are you waiting for?</h2>
            <p className="text-gray-600 mb-8">
              Unlock all your payment gateways in one place with <a href="#" className="text-purple-600">PaySync!</a> Simplify integration, streamline management, and switch between providers effortlessly. Start using PaySync and make handling payments easier than ever.
            </p>
            <Link to={"/test"}>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center">
              Test now
              <img src={img1} alt="" className="ml-2 h-4 w-4" />
            </button>
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={img5} alt="Shield" className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Always know what you pay</h3>
                <p className="text-gray-600 mb-4">Integrated per-transaction pricing with no hidden fees.</p>
                <a href="#" className="text-purple-600 font-semibold flex items-center">
                  Pricing details
                  <img src={img2} alt="" className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={img3} alt="Bars" className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Start your integration</h3>
                <p className="text-gray-600 mb-4">Get up and running with every payment gateways fast and easy way.</p>
                <a href="#" className="text-purple-600 font-semibold flex items-center">
                  API reference
                  <img src={img4} alt="" className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;