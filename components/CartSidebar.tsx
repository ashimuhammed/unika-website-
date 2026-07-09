'use client';
import { ShoppingBag, X, Trash, Minus, Plus } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';

export default function CartSidebar() {
  const { cart, isCartOpen, toggleCart, subtotal, totalItems, changeQuantity, removeFromCart, clearCart, openConfirm } = useCart();

  const handleClear = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    openConfirm('Clear Cart?', `This will remove all ${total} item${total !== 1 ? 's' : ''} from your cart.`, 'Clear All', clearCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`Proceeding to checkout...\n\nTotal: $${subtotal.toFixed(2)}\nItems: ${totalItems}`);
    clearCart();
    toggleCart();
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black/80 z-[70] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleCart} />
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-neutral-950 z-[80] transform transition-transform duration-300 shadow-2xl flex flex-col border-l border-neutral-900 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-neutral-900 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <ShoppingBag weight="fill" /> Shopping Bag
            <span className="text-sm font-normal text-neutral-500">({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
          </h2>
          <button onClick={toggleCart} className="text-neutral-400 hover:text-white transition p-2"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-500">
              <ShoppingBag size={70} className="mb-4 opacity-20" />
              <p className="text-lg">Your bag is empty</p>
              <button onClick={toggleCart} className="mt-6 text-white font-semibold hover:underline">Continue Shopping</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item flex gap-4 p-3 rounded-lg cart-item-enter">
                <div className="w-24 h-28 rounded-lg bg-neutral-900 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-white text-sm truncate">{item.name}</h4>
                      <button onClick={() => openConfirm('Remove Item?', `Are you sure you want to remove "${item.name}" from your cart?`, 'Remove', () => removeFromCart(item.id))} className="remove-btn text-neutral-500 p-1 rounded flex-shrink-0"><X size={18} /></button>
                    </div>
                    <p className="text-neutral-400 text-sm mt-1">${item.price.toFixed(2)}</p>
                    <p className="text-xs text-neutral-500 capitalize mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-neutral-800 rounded-lg">
                      <button onClick={() => changeQuantity(item.id, -1)} className="px-3 py-1.5 text-neutral-400 hover:bg-neutral-900 transition"><Minus size={14} /></button>
                      <span className="px-3 text-sm font-medium text-white">{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)} className="px-3 py-1.5 text-neutral-400 hover:bg-neutral-900 transition"><Plus size={14} /></button>
                    </div>
                    <span className="text-sm font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-neutral-900 bg-black">
          {cart.length > 0 && (
            <button onClick={handleClear} className="clear-cart-btn w-full py-2 border border-neutral-800 text-neutral-400 rounded-lg text-sm font-medium hover:border-red-500 hover:text-red-500 transition flex items-center justify-center gap-2 mb-4">
              <Trash size={18} /> Clear Cart
            </button>
          )}
          <div className="flex justify-between mb-3 text-neutral-400"><span>Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between mb-6 text-neutral-400"><span>Shipping</span><span className="font-semibold">Free</span></div>
          <div className="flex justify-between mb-6 text-2xl font-bold text-white"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          <button onClick={handleCheckout} className="btn-primary w-full py-4 bg-white text-black rounded font-bold hover:bg-neutral-200 transition transform active:scale-95">Checkout</button>
        </div>
      </div>
    </>
  );
}