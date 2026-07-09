'use client';
import { ArrowRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 'women', title: "Women", img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
  { id: 'men', title: "Men", img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop' },
  { id: 'accessories', title: "Accessories", img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop' },
];

export default function Categories() {
  const router = useRouter();
  const handleClick = (cat: string) => {
    document.dispatchEvent(new CustomEvent('filter-category', { detail: cat }));
    router.push('#shop');
  };

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4 uppercase">Browse by Category</p>
          <h2 className="text-5xl font-bold text-white">Shop Collection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(c => (
            <div key={c.id} onClick={() => handleClick(c.id)} className="category-card relative cursor-pointer h-[600px] rounded-lg">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h3 className="text-4xl font-bold mb-3">{c.title}</h3>
                <p className="text-neutral-300 mb-5">Explore the collection</p>
                <span className="inline-flex items-center gap-3 text-sm font-semibold border-b-2 border-white pb-1 hover:gap-5 transition-all">
                  Shop Now <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}