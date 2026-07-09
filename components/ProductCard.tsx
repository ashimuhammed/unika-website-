'use client';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card bg-neutral-950 rounded-lg overflow-hidden group">
      <div className="relative h-[450px] overflow-hidden bg-neutral-900">
        <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover transition duration-500" loading="lazy" />
        <div className="product-overlay absolute inset-0 bg-black/20 opacity-0 transition duration-300" />
        <button onClick={() => addToCart(product)} className="quick-add absolute bottom-4 left-4 right-4 bg-white text-black py-3 rounded font-semibold opacity-0 transform translate-y-4 transition duration-300 hover:bg-neutral-200">
          Add to Bag
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{product.category}</p>
        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-sm text-neutral-400 mb-3">{product.desc}</p>
        <p className="text-xl font-bold text-white">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}