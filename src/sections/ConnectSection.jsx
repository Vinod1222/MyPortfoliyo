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
    <section className="grid scroll-mt-[88px] grid-cols-1 gap-10 bg-[#f7f8fa] px-[5.5vw] py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]" id="lets-connect">
      <div>
        <h2 className="mb-5 max-w-[560px] text-4xl font-black leading-tight text-[#19192d] lg:text-[56px]">
          Let's create something together
        </h2>
        <p className="mb-6 max-w-[560px] text-lg leading-relaxed text-slate-600">
          Whether it is a full-time role, freelance project, or a product
          conversation, I would love to hear from you.
        </p>
        <div className="mb-6 inline-flex min-h-9 items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
          <span className="size-3 rounded-full bg-emerald-500" />
          Open to Work
        </div>
        <a className="mb-3 flex items-center gap-3 font-extrabold text-[#19192d]" href="mailto:deepyadav153107@gmail.com">
          <Mail size={18} />
          deepyadav153107@gmail.com
        </a>
        <a className="mb-3 flex items-center gap-3 font-extrabold text-[#19192d]" href="tel:+918542824307">
          <Phone size={18} />
          +91 8542824307
        </a>
        <span className="mb-5 flex items-center gap-3 font-extrabold text-[#19192d]">
          <MapPin size={18} />
          Bangalore, India
        </span>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-lg bg-[#19182d] px-4 py-3 font-extrabold text-white" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-3 font-extrabold text-white"
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
        className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500">
          Your Email
          <input className="min-h-12 rounded-lg border border-slate-200 px-4 text-base font-semibold normal-case tracking-normal text-[#19192d] outline-none focus:border-[#ff664d]" type="email" placeholder="email@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-500">
          Reaching Out For
          <div
            ref={intentRef}
            className="relative"
          >
            <button
              className={`flex min-h-12 w-full items-center justify-between rounded-lg border px-4 text-left text-base font-semibold normal-case tracking-normal text-[#19192d] ${
                intentOpen ? "border-[#ff664d]" : "border-slate-200"
              }`}
              type="button"
              onClick={onIntentToggle}
              aria-expanded={intentOpen}
            >
              <span>{selectedIntent || "Select intent..."}</span>
              <ChevronDown size={18} />
            </button>
            {intentOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                {INTENT_OPTIONS.map((option) => (
                  <button
                    className="block w-full px-4 py-3 text-left text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 hover:text-[#ff664d]"
                    type="button"
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
          className="min-h-12 rounded-lg bg-[#ff664d] px-5 font-black text-white disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
          type="submit"
          disabled={!selectedIntent}
        >
          Let's Connect
        </button>
      </form>
    </section>
  );
}
