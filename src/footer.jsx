import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">HealthyCare Hospital</h2>
          <p className="text-sm">
            Providing trusted and compassionate healthcare with advanced facilities and a caring team of professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300">Departments</a></li>
            <li><a href="#" className="hover:text-blue-300">Doctors</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Emergency Care</li>
            <li>Surgery</li>
            <li>Diagnostics</li>
            <li>Maternity</li>
            <li>Pharmacy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li><span className="font-medium">Phone:</span> +91 98765 43210</li>
            <li><span className="font-medium">Email:</span> contact@healthycare.com</li>
            <li><span className="font-medium">Address:</span> 123 Health St, Pune, MH</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} HealthyCare Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
