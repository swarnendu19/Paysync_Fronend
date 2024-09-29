import React from 'react';
import instacart from '../assets/instacart.png';
import salesforce from '../assets/salesforce.png';
import amazon from '../assets/amazon.png';
import slack from '../assets/slack.png';
import shopify from '../assets/shopify.png';
import google from '../assets/google.png';
import lyft from '../assets/lyft.png';
import zoom from '../assets/zoom.png';

const Partners: React.FC = () => {
  const partners = [
    { name: 'instacart', logo: instacart },
    { name: 'salesforce', logo: salesforce },
    { name: 'amazon', logo: amazon },
    { name: 'slack', logo: slack },
    { name: 'shopify', logo: shopify },
    { name: 'google', logo: google },
    { name: 'lyft', logo: lyft },
    { name: 'zoom', logo: zoom },
  ];

  return (
    <div className="bg-white py-16 px-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
