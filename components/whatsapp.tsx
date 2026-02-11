"use client";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

export const WhatsApp = () => {
  const WHATSAPP_NUMBER = "554799266767";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="flex items-center gap-2">
      {/* Botão WhatsApp */}
      <Button
        asChild
        className="
      hidden md:flex
      items-center gap-2
      bg-[#25D366] hover:bg-[#1ebe5d]
      text-white
    "
      >
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="h-4 w-4" />
          <span className="text-sm font-medium font-logo">WhatsApp</span>
        </a>
      </Button>

      <Button
        asChild
        size="icon"
        className="md:hidden bg-[#25D366] hover:bg-[#1ebe5d] text-white"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar no WhatsApp"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};
