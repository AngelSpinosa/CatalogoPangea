// ProductCard.jsx
import Image from "next/image";
import DescriptionCard from "./DescriptionCard";

export default function ProductCard({ name, image, tags = [] }) {
  const category = tags.length > 0 ? tags[0] : "Sin categoría";

  // Si el nombre del producto viene en formato "poster_01" o similar,
  // esta función toma solo la primera parte para mostrarla como título.
  function formatName(publicId) {
    const parts = publicId.split("_");
    return parts[0];
  }

  return (
    <div className="border rounded-4xl shadow p-5 flex flex-col items-center border-[#321680] relative">
      {/* Icono del carrito (ahora en esquina superior derecha) */}
      <button className="absolute top-3 right-3 p-1 rounded">
        <img
          src="/Add_cart.svg"
          alt="Agregar al carrito"
          className="w-10 h-10"
        />
      </button>

      {/* Imagen del producto */}
      <Image
        src={image}
        alt={name}
        width={220}
        height={220}
        className="rounded-xl"
      />

      {/* Descripción */}
      <DescriptionCard
        description={formatName(name)}
        category={category}
        size="Único" // Puedes reemplazar esto luego con un campo real
      />
    </div>
  );
}
