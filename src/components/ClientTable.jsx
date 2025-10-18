export default function ClientTable() {
  const headers = [
    "ID",
    "Nombre",
    "Apellidos",
    "Contraseña",
    "Sexo",
    "Fecha de nacimiento",
    "Correo",
    "Celular",
    "Dirección",
    "Rol",
  ];

    return (
        <table className="border-collapse border w-full mt-4 text-sm text-gray-700">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header) => (
            <th key={header} className="border px-3 py-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={headers.length} className="text-center py-6 text-gray-400">
            No hay clientes aún
          </td>
        </tr>
      </tbody>
    </table>
    );
}