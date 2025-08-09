// src/components/ServiceMenu.jsx
import React from 'react';

const services = [
  'General Checkup',
  'Emergency Care',
  'Pediatrics',
  'Dental Services',
  'Surgery',
  'Diagnostics',
];

const ServiceMenu = () => {
  return (
    <div className="bg-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              <p className="text-lg font-medium text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMenu;
