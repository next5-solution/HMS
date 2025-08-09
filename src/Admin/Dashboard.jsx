import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../header'
import AdminHeader from './AdminHeader';
// const AdminDashboard = () => {
//     const summaryData = [
//         { title: 'Total Patients', count: 120, color: 'bg-blue-500' },
//         { title: 'Total Doctors', count: 25, color: 'bg-green-500' },
//         { title: 'Appointments', count: 58, color: 'bg-purple-500' },
//         { title: 'Feedbacks', count: 18, color: 'bg-yellow-500' },
//       ];
    
//       const recentAppointments = [
//         { name: 'John Doe', date: '2025-08-07', doctor: 'Dr. Smith', status: 'Pending' },
//         { name: 'Jane Smith', date: '2025-08-06', doctor: 'Dr. Kumar', status: 'Approved' },
//         { name: 'Michael Lee', date: '2025-08-05', doctor: 'Dr. Shah', status: 'Rejected' },
//       ];

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-700 text-white p-5 space-y-4">
//         <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
//         <nav className="space-y-3">
//           <Link to="/admin/dashboard" className="block hover:underline">
//             Dashboard
//           </Link>
//           <Link to="/admin/doctors" className="block hover:underline">
//             Doctors
//           </Link>
//           <Link to="/admin/patients" className="block hover:underline">
//             Patients
//           </Link>
//           <Link to="/admin/appointments" className="block hover:underline">
//             Appointments
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <AdminHeader />
//         <main className="flex-1 p-6 bg-gray-100">
//           <Outlet />
//         </main>
//       </div>
//       <div>
//       <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         {summaryData.map((card, index) => (
//           <div
//             key={index}
//             className={`p-5 text-white rounded-lg shadow-md ${card.color}`}
//           >
//             <h3 className="text-lg font-medium">{card.title}</h3>
//             <p className="text-2xl font-bold mt-2">{card.count}</p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Appointments Table */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3">Patient</th>
//                 <th className="p-3">Date</th>
//                 <th className="p-3">Doctor</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentAppointments.map((app, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="p-3">{app.name}</td>
//                   <td className="p-3">{app.date}</td>
//                   <td className="p-3">{app.doctor}</td>
//                   <td className="p-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-sm font-medium ${
//                         app.status === 'Approved'
//                           ? 'bg-green-100 text-green-600'
//                           : app.status === 'Pending'
//                           ? 'bg-yellow-100 text-yellow-600'
//                           : 'bg-red-100 text-red-600'
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//               {recentAppointments.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">
//                     No recent appointments
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
 



//     </div>
//   );
// };


// export default AdminDashboard;
import Sidebar from '../Componants/Sidebar'

// src/pages/admin/AdminDashboard.jsx


const AdminDashboard = () => {
  const summaryData = [
    { title: 'Total Patients', count: 120, color: 'bg-blue-500' },
    { title: 'Total Doctors', count: 25, color: 'bg-green-500' },
    { title: 'Appointments', count: 58, color: 'bg-purple-500' },
    { title: 'Feedbacks', count: 18, color: 'bg-yellow-500' },
  ];

  const recentAppointments = [
    { name: 'Ayub Shaikh', date: '2025-08-07', doctor: 'Dr. Vijay Lokare', status: 'Pending' },
    { name: 'Alam Shaikh', date: '2025-08-06', doctor: 'Dr. Ayub Shaikh', status: 'Approved' },
    { name: 'Vijay Lokare', date: '2025-08-05', doctor: 'Dr. Gaurav Kardile', status: 'Rejected' },
  ];

  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
    
      <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
      <AdminHeader />
        <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {summaryData.map((card, index) => (
            <div
              key={index}
              className={`p-5 text-white rounded-lg shadow-md ${card.color}`}
            >
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="text-2xl font-bold mt-2">{card.count}</p>
            </div>
          ))}
        </div>

        {/* Recent Appointments Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Patient</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((app, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{app.name}</td>
                    <td className="p-3">{app.date}</td>
                    <td className="p-3">{app.doctor}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${
                          app.status === 'Approved'
                            ? 'bg-green-100 text-green-600'
                            : app.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {recentAppointments.length === 0 && (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-gray-500">
                      No recent appointments
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
