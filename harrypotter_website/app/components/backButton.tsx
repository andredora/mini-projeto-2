"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="absolute top-6 left-8 bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl text-lg hover:scale-110 transition-all duration-300 z-10 font-['Cinzel']"
    >
      Voltar
    </button>
  );
}
