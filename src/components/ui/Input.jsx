export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-2 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
