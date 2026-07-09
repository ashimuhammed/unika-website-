export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4 uppercase">Limited Edition</p>
            <h2 className="text-6xl font-bold text-white mb-6">Summer Collection</h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">Embrace the warmth with our exclusive summer line. Lightweight fabrics, vibrant colors, and timeless designs crafted for the season.</p>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <a href="#shop" className="btn-primary px-10 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition">Explore Collection</a>
            </div>
            <div className="flex items-center gap-8 text-neutral-400">
              <div className="text-center"><p className="text-4xl font-bold text-white mb-1">50+</p><p className="text-sm">New Items</p></div>
              <div className="w-px h-16 bg-neutral-700" />
              <div className="text-center"><p className="text-4xl font-bold text-white mb-1">15</p><p className="text-sm">Exclusive Designs</p></div>
              <div className="w-px h-16 bg-neutral-700" />
              <div className="text-center"><p className="text-4xl font-bold text-white mb-1">100%</p><p className="text-sm">Premium Quality</p></div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" alt="Summer Collection" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-8 rounded-lg shadow-2xl">
              <p className="text-sm font-semibold mb-2">Starting from</p>
              <p className="text-4xl font-bold">$49</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}