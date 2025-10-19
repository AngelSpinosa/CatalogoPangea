import Header from "@/components/Header";

export default function PersonalizadosPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-[#321680] mb-4">
          Diseños Personalizados
        </h1>
        <p className="mb-4">
          ¿Tienes una idea en mente? ¡Nosotros la hacemos realidad! Ofrecemos
          diseños personalizados para pósters, stickers, gorras y más.
        </p>

        <h2 className="text-2xl font-semibold text-[#321680] mb-2">
          ¿Cómo cotizar?
        </h2>
        <p className="mb-4">
          Para obtener una cotización, por favor envíanos un correo electrónico a{" "}
          <a href="mailto:contacto@pangea.com" className="text-blue-600 underline">
            contacto@pangea.com
          </a>{" "}
          con los siguientes detalles:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Tipo de producto (póster, sticker, etc.).</li>
          <li>Tamaño y colores deseados.</li>
          <li>Descripción de tu idea o imágenes de referencia.</li>
          <li>Cantidad que necesitas.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#321680] mb-2">
          Contacto
        </h2>
        <p>
          Si tienes alguna pregunta, no dudes en contactarnos a través de
          nuestras redes sociales o por correo electrónico.
        </p>
      </main>
    </div>
  );
}