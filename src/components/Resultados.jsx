
export default function Resultados({ propiedades }) {
  if (!propiedades || propiedades.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No se encontraron resultados.
      </div>
    );
  }

  return (
    <div className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
      {propiedades.map((propiedad, index) => (
        <div
          key={index}
          className="bg-white border border-yellow-300 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={propiedad.imagen || '/public/topmexico.png'}
            alt={propiedad.nombre}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">
              {propiedad.nombre}
            </h3>
            <p className="text-gray-700 mb-2">{propiedad.ubicacion}</p>
            <p className="text-yellow-700 font-bold">${propiedad.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
