import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
    experience: "",
    address: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Details:", doctor);
    alert("Doctor added successfully!");
    setDoctor({
      name: "",
      specialization: "",
      phone: "",
      email: "",
      experience: "",
      address: "",
    });
  };

   const [Doctor, setDoctors] = useState([]);
    const navigate = useNavigate();

  const handleCancel = () => {

    
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Doctor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Grid container for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Doctor Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter doctor's name"
              required
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g. Cardiologist"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={doctor.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={doctor.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Experience (Years)
            </label>
            <input
              type="number"
              name="experience"
              value={doctor.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="e.g. 5"
              required
            />
          </div>

          {/* Address - Full width */}
          <div className="md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={doctor.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter address"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Add Doctor
          </button>
        </div>
        <button
        onClick={handleCancel}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
      >
        Cancel
      </button>

      </form>

    </div>
  );
};

export default DoctorForm;
