"use client";

import { useState } from "react";
import Image from "next/image";
import PaginationControls from "../components/paginationControls";
import { useGetSpellsQuery } from "../../store/services/spellsApi";
import SpellCard from "../components/SpellCard";

export default function SpellsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const pageSize = 9;

  const { data, isLoading, isError } = useGetSpellsQuery({
    page: currentPage,
    pageSize,
    search,
  });

  const spells = data?.spells || [];
  const totalItems = data?.total || 0;

  const handlePageChange = (page: number) => setCurrentPage(page);

  // Reseta a página quando o search mua
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen p-8 py-20 flex flex-col items-center bg-black/50">
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/hogwarts.jpg"
          alt="Background"
          fill
          className="object-cover "
        />

        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
      </div>

      <div className="text-center pt-8 z-10 relative w-full max-w-5xl">
        <h1 className="text-6xl text-yellow-400 drop-shadow-lg">Feitiços</h1>
        <p className="text-lg text-white mt-2">Conhece todas os feitiços aqui!</p>


      </div>

      <div className="w-full pt-8 z-10 relative max-w-5xl">
        <input
          type="text"
          placeholder="Pesquisar feitiço"
          value={search}
          onChange={handleSearchChange}
          className="mt-4 mb-6 w-full p-2 h-10 rounded border border-yellow-400 bg-black text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 relative z-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10 relative font-['Crimson_Text']">
          {isLoading && <p>A carregar feitiços...</p>}
          {isError && <p className="text-red-500">Erro ao carregar feitiços</p>}
          {!isLoading && !isError && spells.length === 0 && (
            <p className="text-white text-center col-span-full">
              Infelizmente não existe nenhum feitiço com esse nome
            </p>
          )}
          {!isLoading &&
            !isError &&
            spells.length > 0 &&
            spells.map((spell) => <SpellCard key={spell.name} spell={spell} />)}
        </div>
        <div className="mt-2 z-10 relative">
          {spells.length > 0 && (
            <div className="mt-2 z-10 relative">
              <PaginationControls
                currentPage={currentPage}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>  
      </div>
    </div>
  );
}
