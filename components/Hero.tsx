'use client';
import { CaretDoubleDown } from '@phosphor-icons/react';


export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="Fashion Collection" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-20 text-center px-4 max-w-5xl animate-fade-in-up">
        <p className="text-sm tracking-[0.4em] text-neutral-300 mb-6 uppercase font-light">New Season 2026</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text leading-tight">Define Your<br />Style</h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Discover contemporary fashion that speaks to your unique identity. Curated collections for the modern individual.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#shop" className="btn-primary px-12 py-4 bg-white text-black font-semibold hover:bg-neutral-100 transition transform hover:scale-105">Shop Collection</a>
          <a href="#collections" className="px-12 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition">View Lookbook</a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <CaretDoubleDown size={30} className="text-white" />
      </div>
    </section>
  );
}