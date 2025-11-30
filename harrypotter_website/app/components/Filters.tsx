"use client";

import { useFilters } from "../../context/FiltersContext";

export default function Filters() {
    const { search, house, setSearch, setHouse } = useFilters();

    return (
        <div className="flex md:flex-row  gap-8 mb-6 items-start md:items-center">
            <input
                type="text"
                placeholder="Pesquisar personagem"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 h-10  rounded border border-yellow-400 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-1"
            />

            <select
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className="p-2 h-10 text-white rounded border border-yellow-400 bg-black  focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                <option value="">Todas as casas</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
            </select>
        </div>
    );
}
