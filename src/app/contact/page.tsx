"use client";
import FancyButton from "@/components/FancyButton";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Enviado correctamente");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus("❌ Error al enviar");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* GRID PRINCIPAL: centra items en movil, los alinea al inicio en lg */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {/* TÍTULO: centrado en móvil, alineado a la izquierda en lg */}
        <div className="flex flex-col items-start w-full max-w-lg">
          <h1 className="font-titulo text-2xl mb-4 md:pl-[24px] underline text-contrast_cyan font-bold">
            Contacto
          </h1>

          {/* FORMULARIO (izquierda en lg). max-w-lg mantiene ancho fijo y, gracias a justify-items-center, se centra en móvil */}
          <div className="rounded-xl bg-[#050e1d] max-w-lg w-full shadow-[1px_1px_20px_rgba(140,3,153,0.85)] p-6 border-primary border">
            <h3 className="pb-2 pl-[1px] text-lg">Conectemos! Charlemos!</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-2 rounded bg-gray-800 text-white border-2 border-contrast_cyan/20 
              focus:border-contrast_cyan outline-none transition"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-2 rounded bg-gray-800 text-white border-2 border-contrast_cyan/20 
              focus:border-contrast_cyan outline-none transition"
                required
              />

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="p-2 rounded bg-gray-800 text-white border-2 border-contrast_cyan/20 
              focus:border-contrast_cyan outline-none transition resize-none h-40"
                required
              />

              <div className="w-full flex justify-center">
                <button type="submit" className="w-full">
                  <FancyButton className="w-40" glowColor="#00ffff">
                    Enviar
                  </FancyButton>
                </button>
              </div>
            </form>
          </div>
          {status && <p className="mt-4">{status}</p>}
        </div>

        <div className="hidden lg:flex flex-col items-start mt-12">
          <div className="font-mono text-sm text-cyan-300 bg-[#0b1522]/70 p-6 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.4)] border border-cyan-500/40 backdrop-blur-md max-w-md">
            <pre className="whitespace-pre text-left">
              <code>{`const contact = {
  name: "Iván Gentta",
  github: "https://github.com/IvanGentta",
  linkedin: "www.linkedin.com/in/ivan-gentta",
  lookingForJob: true,
  likes: ["Mate", "Café", "Jueguitos", "Bailar",
   "Cocinar"],
};`}</code>
            </pre>
          </div>
          <div className="flex w-full pt-12 justify-around">
            <Link
              href="https://github.com/IvanGentta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-20 h-20 bg-[#0b1522]/70 text-cyan-300 rounded-full shadow-[0_0_25px_rgba(0,255,255,0.4)] border-2 border-cyan-500/40 backdrop-blur-md hover:cursor-pointer hover:scale-105 transition ease-in-out" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ivan-gentta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-20 h-20 bg-[#0b1522]/70 text-cyan-300 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.4)] border-2 border-cyan-500/40 backdrop-blur-md hover:cursor-pointer hover:scale-105 transition ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
