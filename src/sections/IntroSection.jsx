import { Code2 } from "lucide-react";
import { DOMAIN_EXPERIENCE, ORBIT_ITEMS } from "../constants/portfolioData";

export function IntroSection() {
  return (
    <section
      className="grid min-h-[calc(100vh-88px)] scroll-mt-[88px] grid-cols-1 items-center gap-10 bg-[#19182d] px-[5.5vw] pb-14 pt-[132px] text-white lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:pt-11"
      id="home"
    >
      <div className="max-w-[760px]">
        <div className="inline-flex min-h-9 w-max items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-5 text-xs font-black uppercase tracking-[0.22em] text-white">
          <span className="size-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" />
          Open to Work
        </div>
        <h1 className="my-5 text-[40px] font-black leading-[1.05] tracking-normal sm:text-5xl lg:text-[58px]">
          Hello! I am
          <strong className="block text-[#ff846f]">Vinod Yadav</strong>
        </h1>
        <p className="mb-1.5 max-w-[700px] text-[17px] leading-relaxed text-slate-300 lg:text-xl">
          <b>From design to code</b> - scalable React interfaces, engineered
          for fintech and enterprise teams.
        </p>
        <p className="mb-1.5 max-w-[700px] text-[17px] leading-relaxed text-slate-300 lg:text-xl">
          Driven to build faster, cleaner, and more adaptive frontend systems
          that turn complex workflows into polished product experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3.5 text-base font-extrabold text-white">
          <span>Experienced in</span>
          <div className="flex flex-wrap gap-2" aria-label="Experienced in Banking Domain and Fintech Domain">
            {DOMAIN_EXPERIENCE.map(({ icon: Icon, label }) => (
              <strong
                className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border border-[#ff664d]/25 bg-white/5 px-4 text-sm font-black text-[#ff8a74] backdrop-blur"
                key={label}
              >
                <Icon size={18} />
                {label}
              </strong>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative grid aspect-square w-full max-w-[455px] place-items-center justify-self-center"
        aria-label="Frontend engineering capability orbit"
      >
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff7053]/60 shadow-[0_0_18px_rgba(255,102,77,0.18)]" />
        <div className="absolute inset-[13%] rounded-full border-2 border-[#ff664d]/20 bg-[radial-gradient(circle,rgba(255,102,77,0.22),rgba(255,102,77,0.04)_42%,transparent_68%)]" />
        <span className="absolute left-[38%] top-[30%] size-4 rounded-full border-2 border-white/80 bg-[#ff664d] shadow-[0_0_28px_rgba(255,102,77,0.9)]" />
        <span className="absolute bottom-[27%] left-[41%] size-4 rounded-full border-2 border-white/80 bg-[#ff664d] shadow-[0_0_28px_rgba(255,102,77,0.9)]" />
        <span className="absolute bottom-[34%] right-[25%] size-4 rounded-full border-2 border-white/80 bg-[#ff664d] shadow-[0_0_28px_rgba(255,102,77,0.9)]" />
        <div className="absolute inset-[31%] grid place-items-center rounded-full border-[6px] border-[#ff664d] bg-[#ff664d]/10 shadow-[0_0_58px_rgba(255,102,77,0.35)]">
          <div className="relative grid size-32 rotate-45 place-items-center border-[7px] border-[#ff664d]">
            <span className="absolute inset-5 border-[5px] border-[#ff664d]/55" />
            <Code2 size={42} />
          </div>
        </div>

        {ORBIT_ITEMS.map(({ className, icon: Icon, label }) => (
          <div className={`absolute grid justify-items-center gap-2 text-[#ff8a74] ${getOrbitPosition(className)}`} key={label}>
            <span className="grid size-14 place-items-center rounded-full border-2 border-[#ff664d] bg-[#19182d] shadow-[0_0_18px_rgba(255,102,77,0.22)]">
              <Icon size={21} />
            </span>
            <strong className="text-sm font-black">{label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function getOrbitPosition(position) {
  const positions = {
    top: "left-1/2 top-[12%] -translate-x-1/2",
    rightTop: "right-[9%] top-[32%]",
    rightBottom: "bottom-[25%] right-[9%]",
    bottom: "bottom-[8%] left-1/2 -translate-x-1/2",
    leftBottom: "bottom-[25%] left-[9%]",
    leftTop: "left-[9%] top-[32%]",
  };

  return positions[position] || "";
}
