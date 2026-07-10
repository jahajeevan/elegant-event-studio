import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Ethnic Decors, I would love to discuss my upcoming celebration.",
  );
  return (
    <a
      href={`https://wa.me/919710424260?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl group-hover:blur-2xl transition" />
      <span className="relative flex items-center gap-2 pl-4 pr-5 h-14 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 transition">
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-sm font-medium tracking-wide">Chat with us</span>
      </span>
    </a>
  );
}
