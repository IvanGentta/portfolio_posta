"use client";

import { useRef } from "react";

type Image = {
  id: number;
  image_url: string;
  position: number;
};

type Props = {
  images: Image[];
  title: string;
};

export default function ImagesCarrousel({ images, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0].image_url}
        alt={title}
        className="mt-4 w-full border border-gray-500 rounded-xl"
      />
    );
  }

  return (
    <div className="relative mt-4">
      {/* Botón izquierda */}
      <button
        onClick={() => scroll("left")}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          bg-black/80 text-white
          rounded-full w-10 h-10 pb-1 cursor-pointer
          flex items-center justify-center text-5xl
        "
      >
        ‹
      </button>

      {/* Botón derecha */}
      <button
        onClick={() => scroll("right")}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          bg-black/80 text-white
          rounded-full w-10 h-10 pb-1 cursor-pointer
          flex items-center justify-center text-5xl
        "
      >
        ›
      </button>

      {/* Carrusel */}
      <div
        ref={containerRef}
        className="
          overflow-x-auto
          md:overflow-x-hidden
          flex gap-4
          snap-x snap-mandatory
          scroll-smooth
          border border-gray-500 rounded-xl
        "
      >
        {images
          .sort((a, b) => a.position - b.position)
          .map((img) => (
            <img
              key={img.id}
              src={img.image_url}
              alt={title}
              className="snap-center min-w-full rounded-md"
            />
          ))}
      </div>
    </div>
  );
}
