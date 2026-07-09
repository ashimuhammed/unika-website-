'use client';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface ToastState {
  message: string;
  type: 'success' | 'remove' | 'error';
  showUndo: boolean;
}

interface ConfirmState {
  open: boolean;
  title: string;
  message: string;
  actionLabel: string;
  onConfirm: () => void;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, change: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  toast: ToastState | null;
  showToast: (message: string, type?: ToastState['type'], showUndo?: boolean) => void;
  confirm: ConfirmState | null;
  openConfirm: (title: string, message: string, actionLabel: string, onConfirm: () => void) => void;
  closeConfirm: () => void;
  undoLastAction: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [confirm, setConfirm] = useState<ConfirmState | null>(null);
  const [lastAction, setLastAction] = useState<any>(null);

  const showToast = useCallback((message: string, type: ToastState['type'] = 'success', showUndo = false) => {
    setToast({ message, type, showUndo });
    setTimeout(() => setToast(null), showUndo ? 5000 : 3000);
  }, []);

  const openConfirm = useCallback((title: string, message: string, actionLabel: string, onConfirm: () => void) => {
    setConfirm({ open: true, title, message, actionLabel, onConfirm });
  }, []);

  const closeConfirm = useCallback(() => setConfirm(null), []);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to bag`, 'success');
  }, [showToast]);

  const removeFromCart = useCallback((id: number, silent = false) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (item && !silent) {
        setLastAction({ type: 'remove', item: { ...item } });
        showToast(`${item.name} removed`, 'remove', true);
      }
      return prev.filter(i => i.id !== id);
    });
  }, [showToast]);

  const changeQuantity = useCallback((id: number, change: number) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;
      const newQty = item.quantity + change;
      if (newQty <= 0) {
        openConfirm('Remove Item?', `Are you sure you want to remove "${item.name}" from your cart?`, 'Remove', () => removeFromCart(id));
        return prev;
      }
      return prev.map(i => i.id === id ? { ...i, quantity: newQty } : i);
    });
  }, [openConfirm, removeFromCart]);

  const clearCart = useCallback(() => {
    setCart(prev => {
      if (prev.length === 0) return prev;
      setLastAction({ type: 'clear', items: [...prev] });
      showToast('Cart cleared', 'remove', true);
      return [];
    });
  }, [showToast]);

  const undoLastAction = useCallback(() => {
    if (!lastAction) return;
    if (lastAction.type === 'remove') {
      setCart(prev => {
        const existing = prev.find(i => i.id === lastAction.item.id);
        if (existing) return prev.map(i => i.id === lastAction.item.id ? { ...i, quantity: i.quantity + lastAction.item.quantity } : i);
        return [...prev, lastAction.item];
      });
      showToast('Item restored', 'success');
    } else if (lastAction.type === 'clear') {
      setCart(lastAction.items);
      showToast('Cart restored', 'success');
    }
    setLastAction(null);
  }, [lastAction, showToast]);

  const toggleCart = useCallback(() => setIsCartOpen(v => !v), []);

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, changeQuantity, clearCart,
      totalItems, subtotal, isCartOpen, toggleCart,
      toast, showToast, confirm, openConfirm, closeConfirm, undoLastAction,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}