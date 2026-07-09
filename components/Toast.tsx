'use client';
import { CheckCircle, Trash, Warning } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';

export default function Toast() {
  const { toast, undoLastAction } = useCart();
  const Icon = toast?.type === 'success' ? CheckCircle : toast?.type === 'remove' ? Trash : Warning;
  const color = toast?.type === 'success' ? 'text-green-600' : toast?.type === 'remove' ? 'text-red-500' : 'text-orange-500';

  return (
    <div className={`toast fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-8 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-[90] ${toast ? 'show' : ''}`}>
      {Icon && <Icon size={24} weight="fill" className={color} />}
      <span className="font-medium">{toast?.message}</span>
      {toast?.showUndo && (
        <button onClick={undoLastAction} className="ml-4 px-3 py-1 bg-neutral-200 text-black rounded text-sm font-semibold hover:bg-neutral-300 transition">Undo</button>
      )}
    </div>
  );
}