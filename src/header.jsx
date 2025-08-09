// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MediCare</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="Home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="About" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="Services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="Contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>

          <a
            href="bookappointment"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <a
            href="bookappointment"
            className="block text-center bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;






// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold text-blue-600">MyWebsite</div>

//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
//           <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
//           <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
//           <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

      {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
//           <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
//           <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
//           <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
//           <a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




