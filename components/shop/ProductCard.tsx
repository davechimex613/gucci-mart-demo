"use client";

import { Minus, Plus } from "lucide-react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

export default function ProductCard({
  product,
  quantity,
  onAdd,
  onRemove,
}: ProductCardProps) {
  return (
    <article className="group relative flex w-[190px] shrink-0 flex-col overflow-hidden rounded-[22px] border border-[#12352b]/10 bg-white/70 shadow-[0_18px_50px_rgba(18,53,43,0.08)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(18,53,43,0.13)] sm:w-[220px]">
      <div className="relative aspect-square overflow-hidden bg-[#ebe6da]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#f4f0e7]/90 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#12352b] backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[13px] font-semibold tracking-[-0.02em] text-[#12352b]">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-[#12352b]">
            ₦{product.price.toLocaleString()}
          </p>

          {quantity === 0 ? (
            <button
              onClick={onAdd}
              aria-label={`Add ${product.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12352b] text-[#e2c77d] shadow-lg transition hover:bg-[#174437] hover:scale-105"
            >
              <Plus size={17} strokeWidth={2.5} />
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-[#12352b] p-1 text-white shadow-lg">
              <button
                onClick={onRemove}
                aria-label={`Remove one ${product.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#e2c77d] transition hover:bg-white/10"
              >
                <Minus size={13} />
              </button>

              <span className="min-w-5 text-center text-[11px] font-bold">
                {quantity}
              </span>

              <button
                onClick={onAdd}
                aria-label={`Add another ${product.name}`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#e2c77d] transition hover:bg-white/10"
              >
                <Plus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
