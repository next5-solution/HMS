// src/pages/AppointmentsPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating API data fetch
    const data = [
      { id: 1, patient: "John Doe", date: "2025-08-15", time: "10:00 AM" },
      { id: 2, patient: "Jane Smith", date: "2025-08-14", time: "02:00 PM" },
      { id: 3, patient: "Mike Johnson", date: "2025-08-15", time: "09:30 AM" },
    ];

    // Sort by date
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    setAppointments(sortedData);
  }, []);

  const handleCancel = () => {
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>

      <table className="w-full border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Patient</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td className="border p-2">{appt.patient}</td>
              <td className="border p-2">{appt.date}</td>
              <td className="border p-2">{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cancel Button */}
      <button
        onClick={handleCancel}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default AppointmentsPage;
