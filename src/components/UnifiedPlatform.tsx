import React from 'react';
import arrowRightLight from '../assets/arrow-right-light.svg';

const UnifiedPlatform: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20 px-32">
      <div className="container mx-auto px-4">
        <p className="text-purple-600 font-semibold mb-2">Unified platform</p>
        <h2 className="text-4xl font-bold mb-8">All the payment gateways you'll ever need</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
            Tired of juggling different payment provider APIs? With PaySync,{' '}
              <a href="#" className="text-purple-600">multiple gateways like Stripe</a>,{' '}
              <a href="#" className="text-purple-600">Razorpay, LemonSqueezy,</a>{' '}and more.
              <a href="#" className="text-purple-600"> Software platforms & marketplaces</a>, {' '}integrate once and
              <a href="#" className="text-purple-600"> access Simplify your workflow</a>,{' '}
              and
              <a href="#" className="text-purple-600"> future-proof your payment system</a>,{' '}with minimal effort and maximum flexibility.
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              We also help companies{' '}
              <a href="#" className="text-purple-600">tackle fraud</a>,{' '}
              <a href="#" className="text-purple-600">issue invoices</a>,{' '}
              <a href="#" className="text-purple-600">manage financing</a>,{' '}
              <a href="#" className="text-purple-600">collabrations and Integrate own payment gatways</a>, and much more.
            </p>
          </div>
        </div>
        <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center">
          Installation
          <img src={arrowRightLight} alt="Arrow Right" className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default UnifiedPlatform;
