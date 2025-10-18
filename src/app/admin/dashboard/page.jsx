import React from 'react';
import NewProductForm from '@/components/NewProductForm';
import Sidebar from '@/components/Sidebar';
import ProductTable from '@/components/ProductTable';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-6 flex">
      <Sidebar />

<main className="ml-20 p-8 w-full">
        <h1 className="text-3xl font-bold text-[#321680] mb-2">Productos</h1>
        <p className="text-gray-500 mb-4">Filtrar por</p>

        <ProductTable />

        <footer className="flex justify-end mt-6">
          <Link href="/admin/new">
            <button className="bg-[#321680] text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:bg-[#4522a7]">
              <Plus size={32} />
            </button>
          </Link>
        </footer>
      </main>
    </div>
  );
}
