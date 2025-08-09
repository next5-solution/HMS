// src/components/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DoctorForm from '../Admin/Doctor';
const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-700 text-white p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:underline">
          Dashboard
        </Link>
        <Link to="" className="block hover:underline">
          Doctors
        </Link>
        <Link to="/admin/patients" className="block hover:underline">
          Patients
        </Link>
        <Link to="/admin/appointments" className="block hover:underline">
          Appointments
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
