import Sidebar from "@/components/Sidebar";
import NewProductForm from "@/components/NewProductForm";

export default function NewProductPage() {
  return (
    <div className="flex">
      {/* Menú lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="ml-20 p-8 w-full">
        <h1 className="text-3xl font-bold text-[#321680] mb-6 size-4xl">
          Añadir nuevo producto
        </h1>

        {/* Aquí se renderiza el componente del formulario */}
        <NewProductForm />
      </main>
    </div>
  );
}
