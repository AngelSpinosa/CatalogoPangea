"use client";
import { useRouter } from "next/navigation";
import { Home, Search, Settings, BarChart3, PackagePlus } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  const links = [
    { icon: <Home size={24} />, path: "/admin/dashboard" },
    { icon: <Search size={24} />, path: "#" },
    { icon: <Settings size={24} />, path: "#" },
    { icon: <BarChart3 size={24} />, path: "#" },
    { icon: <PackagePlus size={24} />, path: "/admin/new" },
  ];

  return (
    <aside className="bg-[#321680] text-white h-screen w-20 flex flex-col items-center py-4 space-y-6 fixed">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => router.push(link.path)}
          className="hover:bg-white/20 p-2 rounded-lg transition"
        >
          {link.icon}
        </button>
      ))}
    </aside>
  );
}
// Nota: Asegúrate de tener instalado lucide-react con `npm install lucide-react`