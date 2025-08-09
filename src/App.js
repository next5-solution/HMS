// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './header';
// import Footer from './footer';

// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Register from './register';
// import BookAppointment from './BookAppointment';
// import Banner from './banner';
// import Servicemenu from './Componants/Servicemenu';
import AdminLogin from './Admin/Login';
import AdminDashboard from './Admin/Dashboard';
function App() {
  return (
    <Router>
      {/* <Header /> */}
      
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/bookappointment" element={<BookAppointment />} /> */}
        <Route path="/Login" element={<AdminLogin/>} />
        <Route path="/Dashboard" element={<AdminDashboard />} />
      </Routes>
       {/* <Banner /> */}
       {/* <BookAppointment /> */}
       {/* <Register /> 
       <Servicemenu /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;





// import './App.css';
// import Header from './header';
// import Banner from './banner';
// import Footer from './footer';
// import Register from './register';
// import Services from './pages/Services';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import BookAppointment from './BookAppointment';
// // import BookAppointment from './BookAppointment';
// function App() {
//   return (
//     <>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/bookappointment" element={<BookAppointment />}
      
    
//       {/* <Banner /> */}
//       {/* <Register /> */}
//       {/* <BookAppointment /> */}
   
//       {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-3xl font-bold text-red-500">Tailwind is working!</p>
//       </div> */}

//       </Routes>
//       <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;