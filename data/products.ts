export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'women' | 'men' | 'accessories';
  image: string;
  desc: string;
}

export const products: Product[] = [
  { id: 1, name: 'Minimalist Blazer', price: 189.0, category: 'women', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop', desc: 'Tailored fit, premium wool blend' },
  { id: 2, name: 'Classic White Shirt', price: 79.0, category: 'men', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop', desc: 'Crisp cotton, timeless design' },
  { id: 3, name: 'Leather Crossbody Bag', price: 149.0, category: 'accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop', desc: 'Genuine leather, adjustable strap' },
  { id: 4, name: 'Slim Fit Chinos', price: 89.0, category: 'men', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop', desc: 'Stretch cotton, comfortable fit' },
  { id: 5, name: 'Silk Midi Dress', price: 229.0, category: 'women', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop', desc: '100% silk, elegant drape' },
  { id: 6, name: 'Wool Scarf', price: 59.0, category: 'accessories', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=600&auto=format&fit=crop', desc: 'Soft merino wool, oversized' },
  { id: 7, name: 'Denim Jacket', price: 129.0, category: 'women', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600&auto=format&fit=crop', desc: 'Vintage wash, classic silhouette' },
  { id: 8, name: 'Leather Belt', price: 69.0, category: 'accessories', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=600&auto=format&fit=crop', desc: 'Full-grain leather, brass buckle' },
  { id: 9, name: 'Cashmere Sweater', price: 199.0, category: 'women', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop', desc: 'Ultra-soft cashmere, relaxed fit' },
  { id: 10, name: 'Tailored Trousers', price: 119.0, category: 'men', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop', desc: 'Perfectly tailored, versatile style' },
  { id: 11, name: 'Designer Sunglasses', price: 179.0, category: 'accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop', desc: 'UV protection, premium acetate' },
  { id: 12, name: 'Linen Summer Dress', price: 139.0, category: 'women', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop', desc: 'Breathable linen, flowy design' },
  { id: 13, name: 'Oxford Button-Down', price: 95.0, category: 'men', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop', desc: 'Classic Oxford, premium cotton' },
  { id: 14, name: 'Leather Watch', price: 249.0, category: 'accessories', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop', desc: 'Swiss movement, Italian leather' },
  { id: 15, name: 'Pleated Midi Skirt', price: 109.0, category: 'women', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop', desc: 'Elegant pleats, versatile styling' },
  { id: 16, name: 'Wool Overcoat', price: 299.0, category: 'men', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop', desc: 'Premium wool, timeless silhouette' },
];