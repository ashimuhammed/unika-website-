'use client';
import { Trash } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';

export default function ConfirmDialog() {
  const { confirm, closeConfirm } = useCart();
  return (
    <div className={`confirm-dialog fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4 ${confirm?.open ? 'active' : ''}`}>
      <div className="confirm-dialog-content bg-neutral-950 rounded-2xl shadow-2xl border border-neutral-800 max-w-md w-full p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trash size={30} weight="fill" className="text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{confirm?.title || 'Confirm'}</h3>
          <p className="text-neutral-400 mb-8">{confirm?.message}</p>
          <div className="flex gap-3">
            <button onClick={closeConfirm} className="flex-1 px-6 py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition">Cancel</button>
            <button onClick={() => { confirm?.onConfirm(); closeConfirm(); }} className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">{confirm?.actionLabel || 'Confirm'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}