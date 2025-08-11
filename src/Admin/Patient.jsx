// src/pages/PatientPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PatientPage = () => {
  // Example patient data (replace with API data later)
  const patients = [
    { id: 1, name: "John Doe", age: 30, gender: "Male", contact: "9876543210", disease: "Fever" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female", contact: "9123456780", disease: "Diabetes" },
    { id: 3, name: "Michael Lee", age: 40, gender: "Male", contact: "9988776655", disease: "Asthma" },
  ];
  const [Patients, setPatients] = useState([]);
  const navigate = useNavigate();

  const handleCancel = () => {

    
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Patients</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Disease</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="text-center">
              <td className="border p-2">{patient.name}</td>
              <td className="border p-2">{patient.age}</td>
              <td className="border p-2">{patient.gender}</td>
              <td className="border p-2">{patient.contact}</td>
              <td className="border p-2">{patient.disease}</td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleCancel}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default PatientPage;
