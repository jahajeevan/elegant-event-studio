import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { FadeUp } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ethnic Decors | Plan Your Celebration in Chennai" },
      { name: "description", content: "Begin the conversation. Share your event details and our design team will respond within one working day. Chennai luxury event design." },
      { property: "og:title", content: "Contact — Ethnic Decors" },
      { property: "og:description", content: "Plan your wedding, engagement or event with Chennai's beloved luxury design house." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = encodeURIComponent(
      `Hello Ethnic Decors,\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nEvent: ${data.get("eventType")}\nDate: ${data.get("date")}\nLocation: ${data.get("location")}\n\n${data.get("message")}`,
    );
    window.open(`https://wa.me/919710424260?text=${message}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Let's Begin"
        title="Let's create your"
        italic="perfect celebration."
        subtitle="Tell us a little about your event. Our design team responds personally within one working day."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-4">
            <div className="p-8 md:p-10 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/25 h-full">
              <p className="eyebrow"><span className="gold-line mr-3" />Visit The Studio</p>
              <h2 className="mt-5 font-display text-3xl leading-tight">
                Reach us with ease.
              </h2>
              <ul className="mt-8 space-y-6 text-foreground/80">
                <li className="flex gap-4">
                  <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">Studio</p>
                    <p className="mt-1">No 3, Damodaran Street,<br/>Kilpauk, Chennai — 600010</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">Phone / WhatsApp</p>
                    <a href="tel:+919710424260" className="mt-1 block hover:text-[var(--gold)]">+91 97104 24260</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">Email</p>
                    <a href="mailto:hello@ethnicdecors.in" className="mt-1 block hover:text-[var(--gold)]">hello@ethnicdecors.in</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">Studio Hours</p>
                    <p className="mt-1">Mon – Sat · 10:00 – 19:00 IST</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-8" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="p-8 md:p-10 rounded-2xl bg-[var(--pearl)] border border-[var(--gold)]/25 shadow-[var(--shadow-soft)]"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your Name" name="name" required placeholder="Anjali Iyer" />
                <Field label="Phone Number" name="phone" required type="tel" placeholder="+91 98xxxxxxxx" />
                <Field label="Email" name="email" required type="email" placeholder="anjali@example.com" />
                <Select label="Event Type" name="eventType" required options={["Wedding","Engagement","Birthday","Corporate","Cultural Ceremony","Other"]} />
                <Field label="Event Date (Approx.)" name="date" type="date" />
                <Field label="Event Location" name="location" placeholder="Chennai / Venue" />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-[0.22em] text-foreground/60 mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Share your story, style preferences, guest count or anything that would help us design your day."
                  className="w-full bg-transparent border border-[var(--gold)]/30 rounded-xl p-4 focus:outline-none focus:border-[var(--gold)] transition"
                />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-foreground/60 max-w-sm">
                  Your details are shared only with our design team. We typically
                  respond within one working day.
                </p>
                <button type="submit" className="btn-gold">
                  {sent ? (<><Check size={16}/> Sent</>) : (<>Send Enquiry <Send size={16}/></>)}
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-foreground/60 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[var(--gold)]/30 rounded-xl h-12 px-4 focus:outline-none focus:border-[var(--gold)] transition"
      />
    </div>
  );
}

function Select({ label, name, required, options }: { label: string; name: string; required?: boolean; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-foreground/60 mb-2">{label}</label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-transparent border border-[var(--gold)]/30 rounded-xl h-12 px-4 focus:outline-none focus:border-[var(--gold)] transition"
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}