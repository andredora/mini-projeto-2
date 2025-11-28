"use client";

import { useState } from "react";
import Image from "next/image";
import Filters from "../components/Filters";
import CharacterCard from "../components/CharacterCard";
import PaginationControls from "../components/paginationControls";
import { useGetCharactersQuery } from "../store/services/charactersApi";
import { useFilters } from "../context/FiltersContext";

export default function CharactersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const { search, house } = useFilters();


  const { data, isLoading, isError } = useGetCharactersQuery({
  page: currentPage,
  pageSize,
  search,
  house,
});

const characters = data?.characters || [];
const totalItems = data?.total || 0;


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen py-20 bg-black/50">
      <Image
        src="/images/hogwarts.jpg"
        alt="Background"
        width={1800}
        height={900}
        className="fixed inset-0 w-full opacity-30 z-0"
      />

      <div className="text-center mb-6 pt-8 z-10 relative">
        <h1 className="text-6xl text-yellow-400 drop-shadow-lg">Personagens</h1>
        <p className="text-lg mt-2">Conhece todas as personagens aqui!</p>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative font-['Crimson_Text'] p-10">
        <Filters />

        {isLoading && (
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: pageSize }).map((_, i) => (
              <div
                key={i}
                className="h-64 w-full bg-black/30 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-500">Erro ao carregar personagens</p>
        )}

        {!isLoading && !isError && (
          <>
            <div className="grid grid-cols-4 gap-6">
              {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>

            <PaginationControls
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalItems}
              onPageChange={handlePageChange}
            />

          </>
        )}
      </div>
    </div>
  );
}
