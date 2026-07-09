'use client';
import { useState, useEffect, useRef } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { products, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart, toggleCart } = useCart();

  useEffect(() => {
    const h = () => setOpen(true);
    document.addEventListener('open-search', h);
    const kh = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setOpen(true); }
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', kh);
    return () => { document.removeEventListener('open-search', h); window.removeEventListener('keydown', kh); };
  }, [open]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 100); }, [open]);

  const results = query.trim()
    ? products.filter(p => `${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(query.toLowerCase()))
    : [];

  const highlight = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  const handleSelect = (p: Product) => {
    addToCart(p);
    setOpen(false);
    setQuery('');
    toggleCart();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => (i + 1) % Math.max(results.length, 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx(i => (i - 1 + results.length) % Math.max(results.length, 1)); }
    else if (e.key === 'Enter' && selectedIdx >= 0 && results[selectedIdx]) handleSelect(results[selectedIdx]);
  };

  return (
    <div className={`search-modal fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 ${open ? 'active' : ''}`}>
      <div className="search-modal-content w-full max-w-3xl mx-4 bg-neutral-950 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden">
        <div className="p-6 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <MagnifyingGlass size={24} className="text-neutral-400" />
            <input ref={inputRef} type="text" value={query} onChange={e => { setQuery(e.target.value); setSelectedIdx(-1); }} onKeyDown={handleKey} placeholder="Search for products..." className="flex-1 bg-transparent text-white text-lg placeholder-neutral-500 focus:outline-none" />
            <button onClick={() => { setOpen(false); setQuery(''); }} className="text-neutral-400 hover:text-white transition p-2"><X size={24} /></button>
          </div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {!query ? (
            <div className="text-center py-12 text-neutral-500">
              <MagnifyingGlass size={60} className="mb-4 opacity-20 mx-auto" />
              <p className="text-lg">Start typing to search products...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <MagnifyingGlass size={60} className="mb-4 opacity-20 mx-auto" />
              <p className="text-lg">No products found for "{query}"</p>
            </div>
          ) : (
            results.map((p, i) => (
              <div key={p.id} onClick={() => handleSelect(p)} onMouseEnter={() => setSelectedIdx(i)} className={`search-result-item flex gap-4 p-4 rounded-lg cursor-pointer mb-2 ${i === selectedIdx ? 'bg-neutral-800' : ''}`}>
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-900 flex-shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-base mb-1" dangerouslySetInnerHTML={{ __html: highlight(p.name) }} />
                  <p className="text-sm text-neutral-400 mb-2" dangerouslySetInnerHTML={{ __html: highlight(p.desc) }} />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">{p.category}</span>
                    <span className="text-lg font-bold text-white">${p.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><kbd className="px-2 py-1 bg-neutral-800 rounded text-xs">↑↓</kbd> Navigate</span>
              <span className="flex items-center gap-2"><kbd className="px-2 py-1 bg-neutral-800 rounded text-xs">Enter</kbd> Select</span>
            </div>
            <span className="font-medium">{query && `${results.length} result${results.length !== 1 ? 's' : ''}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}