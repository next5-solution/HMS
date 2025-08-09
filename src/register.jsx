import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', user);
    // Add register logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="relative bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        {/* Cancel Button */}
        <span
          className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-xl cursor-pointer"
          onClick={() => window.history.back()}
        >
          &times;
        </span>

        <h2 className="text-2xl font-bold text-center mb-6">Create a New Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
