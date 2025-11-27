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
            className=" bg-cover shadow-2xl hover:scale-105 transition-all items-center cursor-pointer"
            style={{ backgroundImage: "url('/images/letter.jpg')" , margin: '5px' }}
        
        >

            <div className="relative w-full h-10 flex items-center justify-center " style={{marginTop: '1.5rem' }}  >
                <svg className="w-full " viewBox="0 0 100 25" preserveAspectRatio="none">
                    <defs>
                        <filter id="shadow" x="-70%" y="-70%" width="250%" height="250%">
                            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.7" />
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
                    width={110}
                    height={110}
                    className="absolute rounded-full object-cover"
                    style={{
                        marginTop: '2.5rem',
                    }}
                />
            </div>

            <p className="text-black text-center mt-16 pb-6">
                Para: {character.name}
            </p>
        </div>
    );
}