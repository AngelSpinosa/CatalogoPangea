// src/app/admin/page.jsx
export default function AdminHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#321680] mb-4">Panel de Administración</h1>
      <ul className="list-disc ml-6">
        <li>
          <a href="/admin/dashboard" className="text-blue-600 underline">
            Ir al Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/settings" className="text-blue-600 underline">
            Configuración
          </a>
        </li>
        {/* Aquí podrías ir agregando más secciones */}
      </ul>
    </div>
  );
}
