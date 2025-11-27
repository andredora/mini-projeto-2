// components/Home.tsx
'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">


      {/* Hero Section */}
      <section className=" h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute h-full inset-0 bg-[url('/images/Hogwarts.avif')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-wizard font-bold text-yellow-400 mb-7  ">
            Harry Potter
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl ">
            Website feito para quem gosta do universo de Harry Potter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
         

            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-black font-wizard font-bold px-8 py-4 rounded-xl text-lg  hover:scale-110 transition-all duration-300"
            >
              Sobre o projeto
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 px-4 fade-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-wizard font-bold text-yellow-400 text-center mb-16">
            Conteúdos Disponíveis
          </h2>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-2 ">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/wizzard.png" className="w-20 h-20" />
                </div>
                <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-4">Personagens</h3>
                <p className="text-gray-300 mb-6">
                  Aqui encontras todas as personagens do universo Harry Potter
                </p>
                <Link
                  href="/characters"
                  className="bg-yellow-500 text-black font-wizard font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 inline-block"
                >
                  Ver Personagens
                </Link>
              </div>
            </div>

          

            {/* Card Feitiços */}
            <div className=" backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-1 ">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/wand.png" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-4">Feitiços</h3>
                <p className="text-gray-300 mb-6">
                  Todos os feitiços do universo Harry Potter estão aqui.
                </p>
                <Link
                  href="/spells"
                  className="bg-yellow-500 text-black font-wizard font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 inline-block"
                >
                  Explorar Feitiços
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/50 fade-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-wizard font-bold text-yellow-400 mb-8">
            Sobre Este Projeto
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Esta aplicação utiliza a Harry Potter API e foi desenvolvida com Next.js e Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
}
