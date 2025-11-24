import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/551333583248"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
};

export default WhatsAppButton;
