// app/spells/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Spell = {
    name: string;
    type?: string;
    effect?: string;
};

async function getSpells(): Promise<Spell[]> {
    try {
        const res = await fetch("https://hp-api.onrender.com/api/spells");
        if (!res.ok) throw new Error();
        return await res.json();
    } catch {
        return [];
    }
}

export default async function SpellsPage() {
    const spells = await getSpells();

    if (!spells.length) notFound();

    return (
        <div className="min-h-screen p-8 py-20 flex flex-col items-center ">
            <div>
                <Image
                    src="/images/hogwarts.jpg"
                    alt="Background"
                    width={800}
                    height={600}
                    className="fixed inset-0 w-full fixed opacity-30 z-0"

                />
            </div>

            <div className="text-center mb-12 pt-8 z-10 relative">
                <h1 className="text-6xl  text-yellow-400 drop-shadow-lg">
                    Feitiços
                </h1>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10 relative font-['Crimson_Text']">
                {spells.map((spell, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-md border border-[#c2b49a] shadow-lg bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/letter.jpg')" }}
                    >
                        <h2 className="text-2xl mb-2 font-['Cinzel'] text-[#3a2f23]">
                            {spell.name}
                        </h2>
                        {spell.description && <p className="font-black text-[#3a2f23]" >{spell.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
