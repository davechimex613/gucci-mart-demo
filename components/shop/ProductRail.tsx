"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<Record<number, number>>({});

  const changeQuantity = (id: number, amount: number) => {
    setCart((current) => {
      const next = { ...current };
      const quantity = Math.max(0, (next[id] || 0) + amount);

      if (quantity === 0) {
        delete next[id];
      } else {
        next[id] = quantity;
      }

      return next;
    });
  };

  const scrollRail = (direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "right" ? 460 : -460,
      behavior: "smooth",
    });
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={15} className="text-[#a18b55]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#12352b]/45">
            Everyday essentials
          </span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={() => scrollRail("left")}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#12352b]/10 bg-white/60 text-[#12352b] transition hover:bg-[#12352b] hover:text-[#e2c77d]"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            onClick={() => scrollRail("right")}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#12352b]/10 bg-white/60 text-[#12352b] transition hover:bg-[#12352b] hover:text-[#e2c77d]"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-4 overflow-x-auto pb-6 pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onAdd={() => changeQuantity(product.id, 1)}
            onRemove={() => changeQuantity(product.id, -1)}
          />
        ))}
      </div>

      {cartCount > 0 && (
        <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border border-[#e2c77d]/40 bg-[#12352b] px-5 py-3 text-[#f4f0e7] shadow-2xl">
            <ShoppingBag size={15} className="text-[#e2c77d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
              {cartCount} {cartCount === 1 ? "item" : "items"} selected
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
