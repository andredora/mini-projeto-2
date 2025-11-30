import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") ?? 1);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 8);
  const search = url.searchParams.get("search")?.toLowerCase() ?? "";
  const house = url.searchParams.get("house") ?? "";

  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const characters = await res.json();

  // Filtros opcionais
  const filtered = characters.filter((c: any) => {
    const matchName = c.name.toLowerCase().includes(search);
    const matchHouse = house ? c.house === house : true;
    return matchName && matchHouse;
  });

  const total = filtered.length;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const paginated = filtered.slice(start, end).map((c: any, i: number) => ({
    ...c,
    id: c.id || `char-${start + i}`,
  }));

  return NextResponse.json({
    characters: paginated,
    total,
  });
}
