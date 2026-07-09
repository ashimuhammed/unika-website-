'use client';
import { Diamond, Leaf, Heart } from '@phosphor-icons/react';

const features = [
  { icon: <Diamond size={30} weight="fill" />, title: 'Premium Quality', desc: 'We source only the finest materials from trusted suppliers worldwide. Each piece undergoes rigorous quality control.' },
  { icon: <Leaf size={30} weight="fill" />, title: 'Sustainable Fashion', desc: "Sustainability is at the core of our mission. We're committed to ethical manufacturing and eco-friendly materials." },
  { icon: <Heart size={30} weight="fill" />, title: 'Timeless Design', desc: 'Our designs transcend fleeting trends. We create versatile, enduring pieces that become wardrobe staples.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4 uppercase">Our Story</p>
          <h2 className="text-6xl font-bold text-white mb-6">About UNIKA</h2>
          <div className="w-20 h-0.5 bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Redefining Contemporary Fashion</h3>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">Founded in 2020, UNIKA emerged from a simple yet powerful vision: to create fashion that transcends trends and speaks to the individual. We believe that clothing is more than fabric—it's an expression of identity, a statement of values, and a celebration of uniqueness.</p>
              <p className="text-lg text-neutral-400 leading-relaxed">Our name, derived from the word "unique," reflects our commitment to crafting pieces that stand apart. Every garment in our collection is meticulously designed to empower you to express your authentic self with confidence and style.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
              <div className="text-center"><p className="text-4xl font-bold text-white mb-2">6+</p><p className="text-sm text-neutral-500 uppercase tracking-wider">Years</p></div>
              <div className="text-center"><p className="text-4xl font-bold text-white mb-2">50K+</p><p className="text-sm text-neutral-500 uppercase tracking-wider">Customers</p></div>
              <div className="text-center"><p className="text-4xl font-bold text-white mb-2">200+</p><p className="text-sm text-neutral-500 uppercase tracking-wider">Designs</p></div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" alt="UNIKA Brand Story" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-2xl">
              <p className="text-sm font-semibold mb-1">Established</p>
              <p className="text-3xl font-bold">2020</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(f => (
            <div key={f.title} className="about-feature bg-neutral-950 p-8 rounded-lg border border-neutral-800">
              <div className="feature-icon w-16 h-16 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-white">{f.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-4">{f.title}</h4>
              <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}