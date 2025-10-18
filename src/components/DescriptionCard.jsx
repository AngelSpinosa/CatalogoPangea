// DescriptionCard.jsx
export default function DescriptionCard({ description, category, size }) {
  return (
    <div className="border rounded-3xl shadow p-5 border-[#321680] mt-4">
      <p className="text-[#321680] text-center font-medium">{description}</p>
      <p>{size || "Tamaño pendiente"}</p>
      <p>{category || "Sin categoría"}</p>
      <p>Precio pendiente</p>
    </div>
  );
}
