'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { showToast('Thanks for subscribing!', 'success'); setEmail(''); }
  };
  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Stay in the Loop</h2>
        <p className="text-lg text-neutral-400 mb-10">Subscribe to our newsletter and get 10% off your first order</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email" className="flex-1 px-6 py-4 bg-neutral-900 border-2 border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition" />
          <button type="submit" className="btn-primary px-10 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition">Subscribe</button>
        </form>
      </div>
    </section>
  );
}