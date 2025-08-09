// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Hospital Info */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Address</h3>
            <p>XYZ Hospital,<br />123 Main Street,<br />Pune, Maharashtra 411001</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Contact Info</h3>
            <p>📞 +91 9876543210</p>
            <p>📧 contact@xyzhospital.com</p>
          </div>

          {/* Optional Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.024332447289!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06aeedca3fd%3A0x4f04643d06d18244!2sPune!5e0!3m2!1sen!2sin!4v1693546721005!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
