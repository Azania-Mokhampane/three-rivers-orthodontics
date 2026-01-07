import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27615830624";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message =
      "Hi! I'd like to enquire about orthodontic treatment at Three Rivers Orthodontics.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
