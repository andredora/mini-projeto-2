"use client";

import { useState } from "react";
import Image from "next/image";
import PaginationControls from "../components/paginationControls";
import { useGetSpellsQuery } from "../store/services/spellsApi";

export default function SpellsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const { data, isLoading, isError } = useGetSpellsQuery({
    page: currentPage,
    pageSize,
  });

  const spells = data?.spells || [];
  const totalItems = data?.total || 0;

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="min-h-screen p-8 py-20 flex flex-col items-center">
      <Image
        src="/images/hogwarts.jpg"
        alt="Background"
        width={800}
        height={600}
        className="fixed inset-0 w-full opacity-30 z-0"
      />

\      <div className="text-center mb-12 pt-8 z-10 relative">
        <h1 className="text-6xl text-yellow-400 drop-shadow-lg">Feitiços</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10 relative font-['Crimson_Text']">
        {isLoading && <p>Carregando feitiços...</p>}
        {isError && <p className="text-red-500">Erro ao carregar feitiços</p>}
        {!isLoading &&
          !isError &&
          spells.map((spell, idx) => (
            <div
              key={idx}
              className="p-6 rounded-md border border-[#c2b49a] shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/images/letter.jpg')" }}
            >
              <h2 className="text-2xl mb-2 font-['Cinzel'] text-[#3a2f23]">{spell.name}</h2>
              {spell.description && (
                <p className="font-black text-[#3a2f23]">{spell.description}</p>
              )}
            </div>
          ))}
      </div>

      <div className="mt-8 z-10 relative">
        <PaginationControls
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
