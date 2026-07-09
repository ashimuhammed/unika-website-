'use client';
import { useEffect, useState } from 'react';
import { MagnifyingGlass, User, ShoppingBag, List, X } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setShowBadge(true);
      const t = setTimeout(() => setShowBadge(false), 500);
      return () => clearTimeout(t);
    }
  }, [totalItems]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#shop', label: 'Shop' },
    { href: '#collections', label: 'Collections' },
    { href: '#about', label: 'About' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="#home" className="text-3xl font-bold tracking-[0.3em] text-white">UNIKA</Link>

            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-neutral-300 hover:text-white font-medium transition relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              <button onClick={() => document.dispatchEvent(new CustomEvent('open-search'))} className="text-neutral-300 hover:text-white transition p-2"><MagnifyingGlass size={24} /></button>
              <button className="text-neutral-300 hover:text-white transition p-2"><User size={24} /></button>
              <button onClick={toggleCart} className="text-neutral-300 hover:text-white transition p-2 relative">
                <ShoppingBag size={24} />
                <span className={`absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-300 ${totalItems > 0 ? 'scale-100' : 'scale-0'} ${showBadge ? 'cart-badge-pulse' : ''}`}>
                  {totalItems}
                </span>
              </button>
              <button onClick={() => setMobileOpen(true)} className="md:hidden text-neutral-300 hover:text-white transition p-2"><List size={24} /></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-80 h-full bg-black z-[60] shadow-2xl md:hidden ${mobileOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold tracking-[0.3em] text-white">UNIKA</span>
            <button onClick={() => setMobileOpen(false)} className="text-neutral-400 hover:text-white"><X size={24} /></button>
          </div>
          <nav className="space-y-6">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-lg text-neutral-300 hover:text-white transition">{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}