import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const all = await res.json();

  const id = params.id.toLowerCase();

  const character =
    all.find(
      (c: any) =>
        c.id === id ||
        c.name.toLowerCase().includes(id)
    ) || null;

  if (!character) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json(character);import { HarryPotterCharacter } from "../../../types/harryPotter";
  import { notFound } from "next/navigation";
  
  async function getCharacter(id: string) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/characters/${id}`,
        { cache: "no-store" }
      );
  
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }
  
  export default async function CharacterPage({ params }: any) {
    const { id } = await params;
    const character = await getCharacter(id);
  
    if (!character) notFound();
}
