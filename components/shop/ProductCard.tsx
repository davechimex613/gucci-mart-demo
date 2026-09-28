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
    <article className="group relative flex w-[178px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-[#12352b]/10 bg-white shadow-[0_14px_40px_rgba(18,53,43,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,53,43,0.12)] sm:w-[205px]">
      <div className="relative aspect-[0.92] overflow-hidden bg-[#eee9df]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-[#f4f0e7]/90 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.15em] text-[#12352b] backdrop-blur-md">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-3">
        <h3 className="min-h-[34px] text-[12px] font-semibold leading-5 tracking-[-0.02em] text-[#12352b]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-[13px] font-bold tracking-[-0.02em] text-[#12352b]">
            ₦{product.price.toLocaleString()}
          </p>

          {quantity === 0 ? (
            <button
              onClick={onAdd}
              aria-label={`Add ${product.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12352b] text-[#e2c77d] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#174437] active:scale-95"
            >
              <Plus size={15} strokeWidth={2.5} />
            </button>
          ) : (
            <div className="flex items-center gap-0.5 rounded-full bg-[#12352b] p-1 text-white shadow-md">
              <button
                onClick={onRemove}
                aria-label={`Remove one ${product.name}`}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[#e2c77d] transition hover:bg-white/10"
              >
                <Minus size={12} />
              </button>

              <span className="min-w-5 text-center text-[10px] font-bold">
                {quantity}
              </span>

              <button
                onClick={onAdd}
                aria-label={`Add another ${product.name}`}
                className="flex h-6 w-6 items-center justify-center rounded-full text-[#e2c77d] transition hover:bg-white/10"
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
