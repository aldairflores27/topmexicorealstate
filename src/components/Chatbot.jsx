import { useState, useEffect } from "react";

export default function Chatbot() {
  const [chat, setChat] = useState([]);
  const [entrada, setEntrada] = useState("");

  useEffect(() => {
    setChat([
      {
        pregunta: "",
        respuesta: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      },
    ]);
  }, []);

  const obtenerRespuesta = (pregunta) => {
    const texto = pregunta.toLowerCase();

    if (texto.includes("precio")) {
      return "Los precios varían según ubicación y tipo de propiedad.";
    } else if (texto.includes("casa") || texto.includes("venta")) {
      return "Tenemos casas y departamentos disponibles en toda la Riviera Maya.";
    } else if (texto.includes("ubicados") || texto.includes("dónde")) {
      return "Trabajamos principalmente en Playa del Carmen, Cancún y Tulum.";
    } else if (texto.includes("contacto")) {
      return "Puedes contactarnos al (984) 267-2449 o vía WhatsApp desde el botón en la esquina inferior derecha.";
    } else {
      return "Gracias por tu mensaje. Un asesor te responderá pronto.";
    }
  };

  const enviar = (preguntaManual = null) => {
    const texto = preguntaManual || entrada.trim();
    if (!texto) return;

    const respuesta = obtenerRespuesta(texto);

    setChat([...chat, { pregunta: texto, respuesta }]);
    setEntrada("");
  };

  const opciones = [
    "¿Cuál es el precio?",
    "Tienen casas en venta",
    "¿Dónde están ubicados?",
    "Quiero contacto",
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white border border-yellow-400 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-yellow-600 mb-4">Asistente Virtual</h2>

      <div className="chat-container h-60 overflow-y-auto mb-4 space-y-4">
        {chat.map((item, idx) => (
          <div key={idx}>
            {item.pregunta && (
              <div className="text-right text-gray-700">
                <strong>Tú:</strong> {item.pregunta}
              </div>
            )}
            {item.respuesta && (
              <div className="text-left text-yellow-700 mt-1">
                <strong>Bot:</strong> {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => enviar(opcion)}
            className="bg-yellow-100 text-yellow-700 font-medium py-2 px-3 rounded-lg border border-yellow-300 hover:bg-yellow-200 transition"
          >
            {opcion}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          className="flex-1 p-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Haz una pregunta..."
        />
        <button
          onClick={() => enviar()}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
