import React, { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data Submitted:", form);
    alert("Appointment booked successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <section id="appointment" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={form.message}
            onChange={handleChange}
            className="md:col-span-2 border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
