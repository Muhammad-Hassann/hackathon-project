import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-primary-yellow focus:border-primary-yellow`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input

