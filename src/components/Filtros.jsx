
import { useState } from "react";

export default function Filtros({ onFiltrar }) {
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleFiltrar = () => {
    onFiltrar({ tipo, ubicacion });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6 border border-yellow-400">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Tipo de Propiedad
        </label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Selecciona</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Ubicación
        </label>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          placeholder="Ej. Cancún, Playa del Carmen..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="md:col-span-2 text-center">
        <button
          onClick={handleFiltrar}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Buscar Propiedades
        </button>
      </div>
    </div>
  );
}
