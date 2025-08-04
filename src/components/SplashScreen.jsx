
import { useEffect, useState } from "react";
import topLogo from "/public/topmexico.png";

export default function SplashScreen({ onReady }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [estadoConexion, setEstadoConexion] = useState("cargando");

  useEffect(() => {
    const handleOnline = () => {
      setEstadoConexion("reconectando");
      setIsOnline(true);
      setTimeout(() => {
        onReady();
      }, 1500);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setEstadoConexion("error");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    setTimeout(() => {
      if (navigator.onLine) {
        onReady();
      } else {
        setEstadoConexion("error");
      }
    }, 2500);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [onReady]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full text-center transition-all duration-500">
        <img
          src={topLogo}
          alt="Top Mexico Real Estate"
          className="w-32 mx-auto mb-6 drop-shadow-md"
        />
        <h1 className="text-2xl font-semibold text-yellow-700 mb-4">
          Bienvenido a Top Mexico Real Estate
        </h1>
        <p className="text-gray-600 mb-4">
          {estadoConexion === "cargando" && "Cargando datos..."}
          {estadoConexion === "reconectando" && "Reconectando..."}
          {!isOnline && "Sin conexión. Revisa tu internet."}
        </p>
        <div className="h-2 bg-yellow-200 rounded-full overflow-hidden">
          <div className="w-full h-full bg-yellow-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
