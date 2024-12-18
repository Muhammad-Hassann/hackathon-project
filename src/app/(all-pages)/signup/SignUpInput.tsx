// Reusable Input Component with Icon
import React from "react";

export default function InputWithIcon({
  type = "text",
  placeholder = "Enter text",
  icon,
  value,
  onChange,
  className = "",
}: any ) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Icon Section */}
      {icon && (
        <span className="absolute left-3 text-gray-700 text-xl font-bold">
          {icon}
        </span>
      )}

      {/* Input Field */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-500`}
      />
    </div>
  );
}