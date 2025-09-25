export default function Card({ title, desc, icon }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-3 text-gray-600 italic">“{desc}”</p>
    </div>
  );
}
