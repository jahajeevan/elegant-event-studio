import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[var(--cream)] border-t border-[color-mix(in_oklab,var(--gold)_25%,transparent)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl">Ethnic</span>
            <span className="font-display italic text-3xl text-[var(--gold)]">Decors</span>
          </div>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            A Chennai-based luxury event design house crafting weddings, engagements
            and cultural celebrations with cultural depth, floral artistry and
            impeccable execution.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[var(--gold)]/40 grid place-items-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[var(--gold)]/40 grid place-items-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-foreground/75">
            <li><Link to="/our-story" className="hover:text-[var(--gold)]">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-[var(--gold)]">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[var(--gold)]">Gallery</Link></li>
            <li><Link to="/experiences" className="hover:text-[var(--gold)]">Experiences</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Plan Your Event</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Studio</p>
          <ul className="space-y-4 text-foreground/75 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1 text-[var(--gold)] shrink-0" />
              <span>No 3, Damodaran Street,<br/>Kilpauk, Chennai — 600010</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-[var(--gold)] shrink-0" />
              <a href="tel:+919710424260" className="hover:text-[var(--gold)]">+91 97104 24260</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-[var(--gold)] shrink-0" />
              <a href="mailto:hello@ethnicdecors.in" className="hover:text-[var(--gold)]">hello@ethnicdecors.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color-mix(in_oklab,var(--gold)_20%,transparent)] py-6">
        <p className="text-center text-xs tracking-[0.24em] uppercase text-foreground/50">
          © {new Date().getFullYear()} Ethnic Decors · Crafted with devotion in Chennai
        </p>
      </div>
    </footer>
  );
}