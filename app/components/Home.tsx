'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">

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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>


      <section id="features" className="py-20 px-4 relative fade-section">

        <div className="absolute inset-0 bg-[url('/images/hogwarts.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-wizard font-bold text-yellow-400 text-center mb-16 z-10 relative">
            Conteúdos Disponíveis
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <div className=" backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/movie.png" className=" h-14" />
                </div>

                <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-4">
                  Filmes
                </h3>

                <p className="text-gray-300 mb-6">
                  Todos os filmes de Harry Potter.
                </p>

                <Link
                  href="/movies"
                  className="bg-yellow-500 text-black font-wizard font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 inline-block"
                >
                  Ver Filmes
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section id="about-project" className="py-20 px-4 bg-black/60 fade-section">
        <h2 className="text-4xl font-wizard font-bold text-yellow-400 text-center mb-16">
          Sobre o Projeto
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-2 transition-all">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/images/projeto.png" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-4">
                Projeto
              </h3>
              <p className="text-gray-300">
                Este projeto foi desenvolvido por <span className="text-yellow-400 font-bold">André Dora</span>.
                É um website que apresenta personagens, feitiços e filmes do universo de Harry Potter.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-2 transition-all">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/images/api.png" className="w-14 h-14" />
              </div>
              <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-4">
                API's
              </h3>
              <p className="text-gray-300">
                Personagens e feitiços foram obtidos da API{" "}
                <a
                  href="https://hp-api.onrender.com"
                  target="_blank"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
                  hp-api
                </a>.
                <br />
                Filmes obtidos através da{" "}
                <a
                  href="https://potterhead-api.vercel.app/api/movies"
                  target="_blank"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
                  Potterhead API
                </a>.
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto mt-12 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400 hover:-translate-y-2 transition-all">
          <div className="text-center">
            <h3 className="text-2xl font-wizard font-bold text-yellow-300 mb-8">
              Tecnologias Usadas
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
              {[
                { name: "Next.js", img: "/images/nextjs.png" },
                { name: "Tailwind CSS", img: "/images/tailwind.png" },
                { name: "Redux Toolkit", img: "/images/redux.png" },
                { name: "React Context", img: "/images/react.png" },
                { name: "ESLint", img: "/images/eslint.png" },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border border-yellow-400 bg-black flex items-center justify-center mb-2 overflow-hidden">
                    <img src={tech.img} alt={tech.name} className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-gray-300 text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
