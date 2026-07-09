'use client';
import { InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-3xl font-bold tracking-[0.3em] text-white mb-6 block">UNIKA</span>
            <p className="mb-8 text-sm leading-relaxed">Contemporary fashion for the modern individual. Quality craftsmanship, timeless design.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition"><InstagramLogo size={20} weight="fill" /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition"><FacebookLogo size={20} weight="fill" /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition"><TwitterLogo size={20} weight="fill" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Women</a></li>
              <li><a href="#" className="hover:text-white transition">Men</a></li>
              <li><a href="#" className="hover:text-white transition">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-900 pt-8 text-center text-sm">
          <p>&copy; 2026 UNIKA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}