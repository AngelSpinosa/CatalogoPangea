"use client";
import { useState } from "react";
import styles from "./NewProductForm.module.css";

export default function NewProductForm() {
  const [formData, setFormData] = useState({
    tipo: "",
    nombre: "",
    categoria: "",
    tamaños: [],
    colores: [],
    precio: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, imagen: e.target.files[0] }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData((prev) => {
      const values = prev[name].includes(value)
        ? prev[name].filter((v) => v !== value)
        : [...prev[name], value];
      return { ...prev, [name]: values };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.imagen) return alert("Sube al menos una imagen.");

    const tags = [
      formData.tipo,
      formData.nombre.replace(/\s+/g, "-").toLowerCase(),
      formData.categoria,
      ...formData.tamaños,
      ...formData.colores,
    ].filter(Boolean);

    // 🔹 Cloudinary permite guardar metadata en "context"
    // formateamos con pares clave=valor separados por "|"
    const context = [
      `description=${encodeURIComponent(formData.nombre)}`,
      `category=${encodeURIComponent(formData.categoria)}`,
      `size=${encodeURIComponent(formData.tamaños.join(","))}`,
      `colors=${encodeURIComponent(formData.colores.join(","))}`,
      `price=${encodeURIComponent(formData.precio)}`,
    ].join("|");

    const data = new FormData();
    data.append("file", formData.imagen);
    data.append("upload_preset", "catalogo_unsigned");
    data.append("tags", tags.join(","));
    data.append("context", context);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddxorkfsp/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      console.log("Subido correctamente:", result);
      alert("Producto añadido con éxito");

      // Reiniciar formulario
      setFormData({
        tipo: "",
        nombre: "",
        categoria: "",
        tamaños: [],
        colores: [],
        precio: "",
        imagen: null,
      });
    } catch (err) {
      console.error("Error al subir:", err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Tipo de producto</label>
      <select className={styles.select} name="tipo" onChange={handleChange}>
        <option value="">Selecciona un producto</option>
        <option value="poster">Póster</option>
        <option value="sticker">Sticker</option>
        <option value="gorra">Gorra</option>
      </select>

      <label className={styles.label}>Nombre del diseño</label>
      <input
        className={styles.input}
        type="text"
        name="nombre"
        placeholder="Ingresa el nombre"
        onChange={handleChange}
      />

      <label className={styles.label}>Categoría</label>
      <select className={styles.select} name="categoria" onChange={handleChange}>
        <option value="">Selecciona una categoría</option>
        <option value="Musica">Musica</option>
        <option value="Deportes">Deportes</option>
        <option value="Peliculas">Peliculas</option>
        <option value="Series">Series</option>
        <option value="Anime">Anime</option>
        <option value="Videojuegos">Videojuegos</option>
        <option value="Arte">Arte</option>
        <option value="Comics">Comics</option>
        <option value="Libros">Libros</option>
        <option value="Originales">Originales</option>
      </select>

      <label className={styles.label}>Tamaños disponibles</label>
      <div className={styles.multiselect}>
        {["carta", "tabloide"].map((t) => (
          <label key={t}>
            <input
              type="checkbox"
              checked={formData.tamaños.includes(t)}
              onChange={() => handleMultiSelect("tamaños", t)}
            />
            {t}
          </label>
        ))}
      </div>

      <label className={styles.label}>Colores disponibles</label>
      <div className={styles.multiselect}>
        {["rojo", "negro", "azul", "blanco"].map((c) => (
          <label key={c}>
            <input
              type="checkbox"
              checked={formData.colores.includes(c)}
              onChange={() => handleMultiSelect("colores", c)}
            />
            {c}
          </label>
        ))}
      </div>

      <label className={styles.label}>Precio (MXN)</label>
      <input
        className={styles.input}
        type="number"
        name="precio"
        placeholder="Ej: 250"
        value={formData.precio}
        onChange={handleChange}
      />

      <label className={styles.label}>Imágenes</label>
      <input
        className={styles.select}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <button className={styles.button} type="submit">
        Aceptar
      </button>
    </form>
  );
}
