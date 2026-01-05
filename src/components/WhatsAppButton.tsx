import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "14155551234"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to inquire about booking mehndi for an event.");

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
    </a>
  );
};

export default WhatsAppButton;
