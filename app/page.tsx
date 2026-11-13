"use client";

import { useState } from "react";
import Image from "next/image";

// Types
interface Participant {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

const participants: Participant[] = [
  {
    id: 1,
    name: "Baptiste Blambert",
    role: "UX & Service Designer",
    image: "/img/baptiste_pp.png",
    bio: "I will develop of the interface of the portfolio thanks to figma design already made.",
    email: "bab00017@laurea.fi",
  },
  {
    id: 2,
    name: "Loan Badey",
    role: "UX & Service Designer",
    image: "/img/loan_pp.jpeg",
    bio: "I’ll help shape the portfolio into a clear, thoughtful experience that feels easy to navigate and true to our project.",
    email: "lob00009@laurea.fi",
  },
  {
    id: 3,
    name: "Ivona",
    role: "UI & Visual Designer",
    image: "/img/ivona_pp.jpg",
    bio: "I am a second-year student in the 'Business Information Technologies educational program', specializing in 'Digital Service Development'.",
    email: "ivona@example.com",
  },
  {
    id: 4,
    name: "Kathe",
    role: "Product Designer",
    image: "/img/kathe_pp.jpg",
    bio: "Ekaterina Porkka, second year student of 'Business Information Technologies' educational program, specializing in 'Digital Service Development'",
    email: "kathe@example.com",
  },
  {
    id: 5,
    name: "Krizztina",
    role: "Content Strategist",
    image: "/img/kristina_pp.jpg",
    bio: "Kristina Smolenskaia, second year student in ”Business Information Technology' education program, specializing in 'Digital Service Development'.",
    email: "krizztina@example.com",
  },
];

// 1. Composant Bannière
function Banner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative w-full h-44 mb-10 rounded-3xl overflow-hidden shadow-xl border border-slate-700/30 group">
      <Image
        src="/img/banner.jpg"
        alt="Bannière d'équipe"
        fill
        className="object-cover scale-105 filter blur-xs group-hover:scale-100 transition-transform duration-700 ease-out"
        priority
      />
      {/* Overlay dégradé professionnel Bleu Nuit / Ardoise */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-indigo-950/80 backdrop-blur-md" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 rounded-full border border-indigo-400/30 mb-2">
          {subtitle}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
          {title}
        </h1>
      </div>
    </div>
  );
}

// 2. Composant Carte du Membre
function MemberCard({ participant }: { participant: Participant }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full p-2">
      {/* Avatar avec halo coloré & badge */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition" />
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
          <Image
            src={participant.image}
            alt={participant.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Détails du membre */}
      <div className="flex flex-col text-center sm:text-left flex-1">
        <div className="inline-flex items-center justify-center sm:justify-start gap-2 mb-2">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-md">
            {participant.role}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-3">
          {participant.name}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {participant.bio}
        </p>

        {participant.email && (
          <div className="mt-auto pt-4 border-t border-slate-800/80 flex justify-center sm:justify-start items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {participant.email}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// 3. Composant Miniatures (Thumbnails pour accès rapide)
function MemberThumbnails({
  list,
  activeIndex,
  onSelect,
}: {
  list: Participant[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      {list.map((item, idx) => (
        <button
          key={item.id}
          onClick={() => onSelect(idx)}
          className={`relative rounded-full transition-all duration-300 border-2 ${
            activeIndex === idx
              ? "ring-4 ring-indigo-500/30 border-indigo-400 scale-110"
              : "border-transparent opacity-50 hover:opacity-100 hover:scale-105"
          }`}
          title={item.name}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
        </button>
      ))}
    </div>
  );
}

// 4. Composant de Navigation du Carrousel
function CarouselControls({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-between w-full pt-4 border-t border-slate-800">
      <button
        onClick={onPrev}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white rounded-xl shadow-lg border border-slate-700/50 hover:border-indigo-500 transition-all active:scale-95"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <button
        onClick={onNext}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all active:scale-95"
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// Composant Principal
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % participants.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + participants.length) % participants.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-950 font-sans text-slate-100 min-h-screen py-10 px-4">
      <main className="w-full max-w-4xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl">

        {/* Bannière d'en-tête */}
        <Banner title="Team Presentation" subtitle="Members of the project" />

        {/* Section Carrousel */}
        <div className="relative w-full bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800/60 shadow-inner flex flex-col items-center">

          {/* Carte du membre actif */}
          <MemberCard participant={participants[currentIndex]} />

          {/* Selector avec vignettes photo */}
          <MemberThumbnails
            list={participants}
            activeIndex={currentIndex}
            onSelect={setCurrentIndex}
          />

          {/* Boutons de navigation */}
          <CarouselControls onPrev={prevSlide} onNext={nextSlide} />

        </div>

      </main>
    </div>
  );
}