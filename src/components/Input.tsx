const Input = ({ label, type, placeholder, className }: any) => {
  return (
    <div>
        {label &&
      <label className="block text-sm font-medium text-gray-700 mb-1 ">
        {label}
      </label>
        }
      <input
        type={type}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none ${className}`}
        placeholder={placeholder }
      />
    </div>
  );
};

export default Input;
