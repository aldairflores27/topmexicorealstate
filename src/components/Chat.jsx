
import { useState } from "react";

export default function Chat() {
  const [mensajes, setMensajes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = () => {
    if (mensaje.trim() === "") return;
    setMensajes([...mensajes, { texto: mensaje, autor: "usuario" }]);
    setMensaje("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white border border-yellow-400 rounded-xl shadow-md p-6">
      <div className="h-64 overflow-y-auto mb-4 space-y-3">
        {mensajes.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-xs ${
              m.autor === "usuario"
                ? "bg-yellow-100 text-right self-end ml-auto"
                : "bg-gray-200 text-left"
            }`}
          >
            {m.texto}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Escribe un mensaje..."
        />
        <button
          onClick={enviarMensaje}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
