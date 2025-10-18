import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const body = await req.json();
    const { file } = body; // file = base64 o URL temporal

    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "Designs", // opcional: carpeta en tu Cloudinary
      tags: ["Poster", "Sticker", "Gorra", "Separador"]
    });

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error) {
    console.error("Error al subir a Cloudinary:", error);
    return NextResponse.json({ error: "Error al subir imagen" }, { status: 500 });
  }
}
