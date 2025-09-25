export default function Button({ children, href, onClick, variant = "primary" }) {
  const baseStyle =
    "px-6 py-3 rounded-md font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-white text-indigo-600 hover:bg-gray-100 focus:ring-indigo-500",
    secondary: "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-400",
  };

  return href ? (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}
