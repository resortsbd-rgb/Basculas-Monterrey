"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const IMAGES = Array.from({ length: 14 }, (_, i) =>
  `/images/banner/BM${String(i + 1).padStart(2, "0")}.jpeg`
);

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % IMAGES.length), []);
  const prev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: "480px" }}>
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Básculas Monterrey ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ background: i === current ? "#FBBF24" : "rgba(255,255,255,0.5)" }}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
