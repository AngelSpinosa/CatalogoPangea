import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    // Buscar imágenes en la carpeta Designs
    const result = await cloudinary.search
      .expression("folder=Designs")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    // ⚠️ Aquí usamos result.resources, no result directamente
    const products = result.resources.map((item, index) => {
      const meta = item.context?.custom || {}; // metadatos personalizados desde Cloudinary

      return {
        id: item.asset_id || index + 1,
        name: meta.name || item.public_id.split("/").pop(),
        image: item.secure_url,
        category: meta.category || (item.tags?.[0] ?? "Sin categoría"),
        size: meta.size || "No especificado",
        description: meta.description || "",
        price: meta.price || "0.00", // 👈 nuevo campo de precio
        tags: item.tags || [],
      };
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return NextResponse.json(
      { error: "Error al obtener productos" },
      { status: 500 }
    );
  }
}
