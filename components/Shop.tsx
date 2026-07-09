'use client';
import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const filters = ['all', 'women', 'men', 'accessories'];

export default function Shop() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handler = (e: Event) => setFilter((e as CustomEvent).detail);
    document.addEventListener('filter-category', handler);
    return () => document.removeEventListener('filter-category', handler);
  }, []);

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="shop" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4 uppercase">Featured Products</p>
          <h2 className="text-5xl font-bold text-white mb-4">New Arrivals</h2>
          <div className="w-20 h-0.5 bg-white mx-auto" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`filter-btn px-8 py-3 rounded-full border-2 border-neutral-700 font-medium transition hover:border-white hover:text-white capitalize ${filter === f ? 'active' : 'text-neutral-400'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}