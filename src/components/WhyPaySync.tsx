import React from 'react';
import cloudIcon from '../assets/cloud-icon.png';
import cycleIcon from '../assets/cycle-icon.png';
import shieldIcon from '../assets/shield-icon.png';
import barsIcon from '../assets/bars-icon.png';

const WhySwipe: React.FC = () => {
  const features = [
    {
      icon: barsIcon,
      title: 'Simplified Webhook Management',
      description: 'PaySync centralizes webhook handling, allowing you to manage callbacks from multiple payment providers in a unified way.'
    },
    {
      icon: cloudIcon,
      title: 'Efficient Always',
      description: "We've optimized every level of the finance stack, from integrations to prebuilt checkout flows - no detail has been spared."
    },
    {
      icon: cycleIcon,
      title: 'Fast-Improving',
      description: 'We make constant updates and improvements to help you stay on the cutting edge of your industry, deploying to production around 20X per day!'
    },
    {
      icon: shieldIcon,
      title: 'Provider-Agnostic Flexibility',
      description: 'With PaySync, switching between payment providers is effortless. You can adapt with minimal code changes, saving both time and effort.' 
    }
  ];

  return (
    <div className="bg-white py-20 px-32">
      <div className="container mx-auto px-4">
        <p className="text-purple-600 font-semibold mb-2">Why Use PaySync</p>
        <h2 className="text-4xl font-bold mb-12">A tech-first approach to finance in One place.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySwipe;
