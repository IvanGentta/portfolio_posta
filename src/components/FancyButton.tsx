"use client";
import { useState, useRef } from "react";

interface FancyButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Color del brillo
}

export default function FancyButton({
  children,
  className = "",
  glowColor = "",
}: FancyButtonProps) {
  //Para calcular posision del mouse y manejar el glow
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
    //Todo esto calcula el glow segun el porcentaje que ocupe el mouse desde los ejes y / x
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative inline-block rounded-xl p-[2px] transition-all duration-300 ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor} 0%, transparent 20%)`
          : `transparent`,
        boxShadow: isHovered
          ? `0 0 20px ${glowColor}55, inset 0 0 20px ${glowColor}22`
          : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Contenedor interior */}
      <div
        className="relative w-full h-full rounded-[10px] bg-[#1a1a1a] active:bg-[#023131] text-[#ededed] px-6 py-3 
        flex justify-center font-semibold select-none cursor-pointer"
        style={{
          textShadow: isHovered
            ? `0 0 8px ${glowColor}, 0 0 12px ${glowColor}`
            : "none",
          transition: "text-shadow 0.2s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
