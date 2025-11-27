// components/CharacterCard.tsx
'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HarryPotterCharacter } from "../types/harryPotter";

interface CharacterCardProps {
    character: HarryPotterCharacter;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/character/${character.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="rounded-xl bg-cover shadow-2xl hover:scale-105 transition-all items-center cursor-pointer"
            style={{ backgroundImage: "url('/images/letter.jpg')" }}
        >

            <div className="relative flex items-center justify-center ">
                <svg className="w-full h-full" viewBox="0 0 100 25" preserveAspectRatio="none">
                    <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.5" />
                        </filter>
                    </defs>
                    <polyline
                        points="0,0 50,20 100,0"
                        stroke="black"
                        strokeWidth="0.5"
                        fill="none"
                        filter="url(#shadow)"
                    />
                </svg>

                <Image
                    src={'/images/hogwarts-seal.png'}
                    alt={character.name}
                    width={120}
                    height={120}
                    className="absolute rounded-full object-cover top-8"
                />
            </div>

            <p className="text-black text-center mt-16 pb-6">
                Para: {character.name}
            </p>
        </div>
    );
}