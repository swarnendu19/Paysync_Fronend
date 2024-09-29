import React from "react";
import img1 from "../assets/global-graphic.png";

const Global: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20 px-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-purple-600 font-semibold mb-2">Global scale</p>
            <h2 className="text-4xl font-bold mb-6">
              A structure for global businesses
            </h2>
            <p className="text-gray-600">
            PaySync enables businesses to operate seamlessly across borders by supporting multiple payment providers. Easily switch or add providers to accommodate regional preferences,{' '} <a href="#" className="text-purple-600">
            ensuring smooth transactions worldwide.</a> Scalable and flexible for global expansion.{" "}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <img
              src={img1}
              alt="Global Graphic"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Global;
