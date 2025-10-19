// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react"; // npm install lucide-react

export default function Header() {
return (
    <header className="bg-[#321680] text-[#F4EDFF]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-16 px-4 py-2">
            {/* Menú izquierdo */}
            <nav className="flex gap-6">
                <Link href="/" className="hover:underline">
                    Productos
                </Link>
                <Link href="/personalizados" className="hover:underline">
                    Personalizados
                </Link>
            </nav>

            {/* Logo central */}
            <Link href="/" className="flex items-center justify-center">
                <Image
                    className="h-10 w-auto"
                    src="/Simbolo 2.svg"
                    alt="Logo Pangea"
                    width={40}
                    height={40}
                    priority
                />
            </Link>

            {/* Acciones derechas */}
            <div className="flex gap-4 items-center">
                <button>
                    <Search size={20} />
                </button>
                <button>
                    <ShoppingCart size={20} />
                </button>
            </div>
        </div>
    </header>
);
}