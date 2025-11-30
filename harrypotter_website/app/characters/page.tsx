"use client";

import { useState } from "react";
import Image from "next/image";
import Filters from "../components/Filters";
import CharacterCard from "../components/CharacterCard";
import PaginationControls from "../components/paginationControls";
import { useGetCharactersQuery } from "../../store/services/charactersApi";
import { useFilters } from "../../context/FiltersContext";

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
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/hogwarts.jpg"
          alt="Background"
          fill
          className="object-cover "
        />

        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
      </div>

      <div className="text-center pt-8 z-10 relative">
        <h1 className="text-6xl text-yellow-400 drop-shadow-lg">Personagens</h1>
        <p className="text-lg text-white mt-2">Conhece todas as personagens aqui!</p>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative font-['Crimson_Text'] p-10">
        <Filters />

        {!isLoading && !isError && (
  <>
    {characters.length === 0 ? (
      <h1 className="text-white text-center col-span-full">
        Infelizmente não existe nenhum personagem com esses filtros
      </h1>
    ) : (
      <>
        <div className="grid grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        {/* Paginação só aparece se houver personagens */}
        {characters.length > 0 && (
          <PaginationControls
            currentPage={currentPage}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={handlePageChange}
          />
        )}
      </>
    )}
  </>
        )}

      </div>
    </div>
  );
} 
