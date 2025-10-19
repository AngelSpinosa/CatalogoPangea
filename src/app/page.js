"use client";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      const allProducts = Array.isArray(data) ? data : Object.values(data).flat();
      console.log("Productos desde API:", data); // <- importante

      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <footer className="p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#321680] ml-1">Catálogo de productos</h1>
        <div className="flex gap-2 mr-4">
          <button className="text-[#321680]">Filtrar por</button>
          <button className="text-[#321680]">Ordenar por</button>
        </div>
      </footer>

      {/* Pósters */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#321680]">Todos los productos</h2>
        <div>
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full p-2 mb-4 border border-[#321680] rounded-lg"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}