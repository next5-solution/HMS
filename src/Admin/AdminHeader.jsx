// src/components/AdminHeader.jsx
import React from 'react';

const AdminHeader = () => {
  return (
    <header className="w-full bg-Blue shadow-md p-4 flex items-center justify-between">
      {/* Left: Title or Breadcrumb */}
      <div className="text-xl font-semibold text-gray-800">
        Hospital Admin Panel
      </div>

      {/* Right: Profile / Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification bell icon */}
        <button className="text-gray-600 hover:text-blue-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Admin Avatar */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
