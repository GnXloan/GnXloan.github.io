"use client";

import { useState } from "react";
import Image from "next/image";
import "./css/style.css";

const participants = [
  {
    id: 1,
    name: "Baptiste Blambert",
    role: "UX & Service Designer",
    image: "/img/pro_pict.jpg",
    bio: "Placeholder",
  },
  {
    id: 2,
    name: "Loan Badey",
    role: "UX & Service Designer",
    image: "/img/pro_pict.jpg",
    bio: "Placeholder",
  },
  {
    id: 3,
    name: "Ivona",
    role: "Designer",
    image: "/img/pro_pict.jpg",
    bio: "Placeholder",
  },
  {
    id: 4,
    name: "Kathe",
    role: "Designer",
    image: "/img/pro_pict.jpg",
    bio: "Placeholder",
  },
  {
    id: 5,
    name: "Krizztina",
    role: "Content Writter",
    image: "/img/pro_pict.jpg",
    bio: "Placeholder",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % participants.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + participants.length) % participants.length);
  };

  const current = participants[currentIndex];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-16 px-6 bg-white dark:bg-black sm:items-start shadow-sm rounded-2xl my-8">

        <h1 className="text-2xl font-bold mb-8 text-black dark:text-zinc-50 self-center sm:self-start">
          Team & Members
        </h1>

        {/* Conteneur du Carrousel */}
        <div className="relative w-full flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 sm:p-10 shadow-inner">

          {/* Carte du participant actuel */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md flex-shrink-0 border-4 border-white dark:border-zinc-800">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                {current.role}
              </span>
              <h2 className="text-xl font-bold text-black dark:text-zinc-50 mb-2">
                {current.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                {current.bio}
              </p>
            </div>
          </div>

          {/* Commandes de navigation (Boutons + Indicateurs) */}
          <div className="flex items-center justify-between w-full mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={prevSlide}
              className="px-4 py-2 text-sm font-medium bg-white dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              Previous
            </button>

            {/* Indicateurs (points) */}
            <div className="flex gap-2">
              {participants.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                      : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
                  }`}
                  aria-label={`Aller au profil ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="px-4 py-2 text-sm font-medium bg-white dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              Next
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}