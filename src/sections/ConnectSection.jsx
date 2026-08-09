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
    <section
      className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-start gap-[72px] bg-[linear-gradient(90deg,#f6f7f9,#ffffff)] px-[13vw] py-[78px] pb-[118px] max-[1180px]:gap-12 max-[1180px]:px-[7vw] max-[980px]:grid-cols-1 max-[980px]:gap-11 max-[980px]:px-[22px] max-[980px]:py-[68px] max-[980px]:pb-[86px]"
      id="lets-connect"
    >
      <div>
        <h2 className="mb-6 max-w-[560px] text-[clamp(42px,4.2vw,56px)] font-black leading-[1.08] tracking-normal text-[#19192d] max-[620px]:text-[32px] max-[420px]:text-[30px]">
          Let's create something together
        </h2>
        <p className="max-w-[620px] text-base leading-[1.65] text-[#6b7280]">
          Whether it is a full-time role, freelance project, or a product
          conversation, I would love to hear from you.
        </p>
        <div className="my-[22px] mb-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#bfe9de] bg-[#eaf8f4] px-[22px] text-sm font-black uppercase tracking-[0.16em] text-[#19192d] max-[620px]:w-full max-[620px]:justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-[#35d47d] shadow-[0_0_0_4px_rgba(53,212,125,0.1)]" />
          Open to Work
        </div>
        <a className="mb-[18px] flex items-center gap-4 text-[17px] font-bold text-[#34445b] [overflow-wrap:anywhere]" href="mailto:deepyadav153107@gmail.com">
          <Mail size={18} />
          deepyadav153107@gmail.com
        </a>
        <a className="mb-[18px] flex items-center gap-4 text-[17px] font-bold text-[#34445b]" href="tel:+918542824307">
          <Phone size={18} />
          +91 8542824307
        </a>
        <span className="mb-[18px] flex items-center gap-4 text-[17px] font-bold text-[#34445b]">
          <MapPin size={18} />
          Bangalore, India
        </span>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <a className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-white px-5 font-black text-[#10142a] shadow-[0_4px_14px_rgba(15,20,42,0.16)] max-[420px]:w-full max-[420px]:justify-center" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
            GitHub
          </a>
          <a
            className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#0867c8] px-5 font-black text-white shadow-[0_4px_14px_rgba(15,20,42,0.16)] max-[420px]:w-full max-[420px]:justify-center"
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
        className="grid gap-6 rounded-[28px] border-[5px] border-transparent [background:linear-gradient(#21203b,#19182d)_padding-box,linear-gradient(135deg,#5b67ff,#ff654d,#22c7a4)_border-box] p-[42px] shadow-[0_32px_86px_rgba(30,29,52,0.2)] max-[620px]:p-6 max-[420px]:p-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="grid gap-3 text-xs font-black uppercase tracking-[0.14em] text-white/60">
          Your Email
          <input className="min-h-[62px] w-full rounded-[18px] border border-white/10 bg-white/[0.06] px-6 text-base font-semibold text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#ff664d]" type="email" placeholder="email@example.com" />
        </label>
        <label className="grid gap-3 text-xs font-black uppercase tracking-[0.14em] text-white/60">
          Reaching Out For
          <div
            ref={intentRef}
            className="relative"
          >
            <button
              type="button"
              className="flex min-h-[62px] w-full items-center justify-between rounded-[18px] border border-white/10 bg-white/[0.06] px-6 text-left text-base font-black normal-case tracking-normal text-white/25 transition-colors focus:border-[#ff664d]"
              onClick={onIntentToggle}
              aria-expanded={intentOpen}
            >
              <span>{selectedIntent || "Select intent..."}</span>
              <ChevronDown size={18} />
            </button>
            {intentOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-[#21203b] shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                {INTENT_OPTIONS.map((option) => (
                  <button
                    type="button"
                    className="block min-h-[50px] w-full border-0 bg-transparent px-5 text-left font-bold normal-case tracking-normal text-white/70 hover:bg-[#ff664d]/10"
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
          className="min-h-[62px] rounded-[18px] border border-[#ff664d] bg-[#ff664d] px-6 font-black text-white transition-all disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/[0.06] disabled:text-white/25"
          type="submit"
          disabled={!selectedIntent}
        >
          Let's Connect
        </button>
      </form>
    </section>
  );
}
