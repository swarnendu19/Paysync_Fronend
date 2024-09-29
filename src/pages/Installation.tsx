import React from 'react';

const Installation: React.FC = () => {
  return (
    <div className="installation-page bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <header className="hero-section py-16 text-center">
        <div className="content max-w-3xl mx-auto">
          <h1 className="title text-5xl font-bold mb-6">Installing PaySync</h1>
          <p className="subtitle text-lg mb-8">
            Get started with PaySync in just a few simple steps. Follow this guide to
            integrate with the most powerful payment solution that connects you to all your providers.
          </p>
          <a
            href="https://www.npmjs.com/package/paysync"
            className="cta-button bg-white text-indigo-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Read Documentation
          </a>
        </div>
      </header>
      <section className="steps-section py-16 bg-gray-100 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Installation Steps</h2>
        <div className="steps grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 lg:px-32">
          <div className="step bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Step 1: Install the Library</h3>
            <code className="code-snippet bg-gray-200 text-purple-500 py-2 px-4 rounded-md block mb-4">
              npm install paysync
            </code>
            <p>Install PaySync via npm to start integrating payment providers.</p>
          </div>

          <div className="step bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Step 2: Configure Your Providers</h3>
            <code className="code-snippet bg-gray-200 text-purple-500 py-2 px-4 rounded-md block mb-4">{`import { configurePaySync } from 'paysync';`}</code>
            <p>Configure the library to connect your preferred payment gateways such as Stripe, Razorpay, and more.</p>
          </div>

          <div className="step bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Step 3: Initialize in Your Project</h3>
            <code className="code-snippet bg-gray-200 text-purple-500 py-2 px-4 rounded-md block mb-4">{`const paySync = configurePaySync({ ...options });`}</code>
            <p>Initialize PaySync with your configurations and start managing transactions effortlessly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;
