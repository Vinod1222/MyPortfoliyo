import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { INTENT_OPTIONS } from "../constants/portfolioData";

export function ConnectSection({
  intentOpen,
  intentRef,
  onIntentChange,
  onIntentToggle,
  selectedIntent,
}) {
  return (
    <section className="grid grid-cols-[minmax(0,0.8fr)_minmax(320px,0.72fr)] gap-10 bg-[#f7f8fa] px-[5.5vw] py-16 max-lg:grid-cols-1 max-md:px-4 max-md:py-12" id="lets-connect">
      <div>
        <h2 className="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-tight tracking-normal text-[#19192d]">
          Let's create something together
        </h2>
        <p className="mb-7 max-w-[600px] text-base leading-7 text-[#4b5563]">
          Whether it is a full-time role, freelance project, or a product
          conversation, I would love to hear from you.
        </p>
        <div className="mb-5 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#25c99c]/35 bg-[#25c99c]/10 px-6 text-xs font-black uppercase tracking-[0.22em] text-[#19192d] max-md:w-full max-md:justify-center">
          <span className="h-3 w-3 rounded-full bg-[#24e58a] shadow-[0_0_0_7px_rgba(37,201,156,0.14)]" />
          Open to Work
        </div>
        <a className="mb-3 flex items-center gap-3 font-bold text-[#19192d]" href="mailto:deepyadav153107@gmail.com">
          <Mail size={18} />
          deepyadav153107@gmail.com
        </a>
        <a className="mb-3 flex items-center gap-3 font-bold text-[#19192d]" href="tel:+918542824307">
          <Phone size={18} />
          +91 8542824307
        </a>
        <span className="mb-6 flex items-center gap-3 font-bold text-[#19192d]">
          <MapPin size={18} />
          Bangalore, India
        </span>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-5 font-black text-[#19192d] shadow-[0_12px_26px_rgba(17,24,39,0.08)] max-[420px]:w-full max-[420px]:justify-center" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
            GitHub
          </a>
          <a
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-black/10 bg-[#0a66c2] px-5 font-black text-white shadow-[0_12px_26px_rgba(10,102,194,0.18)] max-[420px]:w-full max-[420px]:justify-center"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>

      <form
        className="grid gap-5 rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(17,24,39,0.08)] max-md:p-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="grid gap-2 text-sm font-black text-[#19192d]">
          Your Email
          <input className="min-h-14 rounded-2xl border border-black/10 bg-[#f7f8fa] px-5 text-base font-semibold outline-none transition-colors focus:border-[#ff664d]" type="email" placeholder="email@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#19192d]">
          Reaching Out For
          <div
            ref={intentRef}
            className="relative"
          >
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between rounded-2xl border border-black/10 bg-[#f7f8fa] px-5 text-left text-base font-semibold transition-colors focus:border-[#ff664d]"
              onClick={onIntentToggle}
              aria-expanded={intentOpen}
            >
              <span>{selectedIntent || "Select intent..."}</span>
              <ChevronDown size={18} />
            </button>
            {intentOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_40px_rgba(17,24,39,0.12)]">
                {INTENT_OPTIONS.map((option) => (
                  <button
                    type="button"
                    className="block min-h-[50px] w-full border-0 bg-white px-5 text-left font-bold text-[#19192d] hover:bg-[#ff664d]/10"
                    key={option}
                    onClick={() => onIntentChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </label>
        <button
          className="min-h-14 rounded-2xl border-0 bg-[#ff664d] px-6 font-black text-white shadow-[0_14px_30px_rgba(255,102,77,0.22)] transition-all disabled:cursor-not-allowed disabled:bg-[#d1d5db] disabled:shadow-none"
          type="submit"
          disabled={!selectedIntent}
        >
          Let's Connect
        </button>
      </form>
    </section>
  );
}
