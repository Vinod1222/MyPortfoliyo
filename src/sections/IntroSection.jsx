import { Code2 } from "lucide-react";
import { DOMAIN_EXPERIENCE, ORBIT_ITEMS } from "../constants/portfolioData";

const orbitPositionClass = {
  top: "orbit-top",
  rightTop: "orbit-rightTop",
  rightBottom: "orbit-rightBottom",
  bottom: "orbit-bottom",
  leftBottom: "orbit-leftBottom",
  leftTop: "orbit-leftTop",
};

export function IntroSection() {
  return (
    <section
      className="relative grid min-h-[calc(100vh-88px)] grid-cols-[minmax(0,0.92fr)_minmax(320px,0.9fr)] items-center gap-[4vw] overflow-hidden bg-[#19182d] px-[5.5vw] py-12 text-white max-lg:grid-cols-1 max-lg:gap-8 max-md:px-4 max-md:py-8"
      id="home"
    >
      <div
        className="build-loader pointer-events-none fixed left-1/2 top-[104px] z-[120] w-[min(360px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-full border border-[#ff664d]/30 bg-[#21203b] px-5 py-3 text-center shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
        aria-hidden="true"
      >
        <span className="absolute inset-y-0 left-0 -z-10 w-full origin-left bg-gradient-to-r from-[#ff664d]/70 to-[#7f5cff]/70" />
        <strong className="text-xs font-black uppercase tracking-[0.16em] text-white">
          Building interface
        </strong>
      </div>
      <div className="relative z-10 max-w-[720px]">
        <div className="mb-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#25c99c]/45 bg-[#25c99c]/15 px-6 text-xs font-black uppercase tracking-[0.24em] text-white shadow-[0_0_24px_rgba(37,201,156,0.12)] max-[420px]:w-full max-[420px]:justify-center">
          <span className="h-3 w-3 rounded-full bg-[#24e58a] shadow-[0_0_0_7px_rgba(37,201,156,0.14)]" />
          Open to Work
        </div>
        <h1 className="my-6 text-[clamp(42px,4.8vw,72px)] font-black leading-[1] tracking-normal max-md:my-4 max-md:text-[31px] max-[420px]:text-[29px]">
          Hello! I am
          <strong className="block text-[#ff7a64]">Vinod Yadav</strong>
        </h1>
        <p className="mb-3 max-w-[660px] text-lg leading-[1.65] text-[#c8d2f5] max-md:text-sm">
          <b className="font-black text-[#ff7a64]">From design to code</b> -
          scalable React interfaces, engineered for fintech and enterprise
          teams.
        </p>
        <p className="mb-3 max-w-[660px] text-lg leading-[1.65] text-[#c8d2f5] max-md:text-sm">
          Driven to build faster, cleaner, and more adaptive frontend systems
          that turn complex workflows into polished product experiences.
        </p>
        <div className="mt-9 flex items-center gap-4 max-md:grid max-md:gap-3">
          <span className="text-sm font-black text-white">Experienced in</span>
          <div
            className="domain-roller relative h-14 w-[248px] max-w-full overflow-hidden rounded-xl border border-[#ff664d]/25 bg-[#ff664d]/10"
            aria-label="Experienced in Banking Domain and Fintech Domain"
          >
            {DOMAIN_EXPERIENCE.map(({ icon: Icon, label }) => (
              <strong
                className="absolute inset-0 flex items-center justify-center gap-2.5 text-sm font-black text-[#ff7a64]"
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
        className="relative mx-auto aspect-square w-[min(38vw,500px)] min-w-[320px] rounded-full max-lg:row-start-2 max-md:mt-2 max-md:w-[min(72vw,290px)] max-md:min-w-0 max-[420px]:w-[min(72vw,250px)]"
        aria-label="Frontend engineering capability orbit"
      >
        <div className="orbit-spin absolute inset-[4%] rounded-full border-2 border-dashed border-[#ff664d]/60" />
        <div className="absolute inset-[18%] rounded-full border-2 border-[#ff664d]/20" />
        <span
          className="flow-dot flow-one absolute h-9 w-9 rounded-full"
          style={{
            offsetPath:
              "path('M 280 26 A 254 254 0 1 1 279.9 26')",
          }}
        />
        <span
          className="flow-dot flow-two absolute h-9 w-9 rounded-full"
          style={{
            offsetPath:
              "path('M 280 26 A 254 254 0 1 1 279.9 26')",
          }}
        />
        <span
          className="flow-dot flow-three absolute h-9 w-9 rounded-full"
          style={{
            offsetPath:
              "path('M 280 26 A 254 254 0 1 1 279.9 26')",
          }}
        />
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff664d]/12 shadow-[0_0_120px_rgba(255,102,77,0.22)] max-[420px]:w-[46%]">
          <div className="cube relative flex aspect-square w-full items-center justify-center text-[#ff7a64]">
            <span className="cube-face face-top" />
            <span className="cube-face face-left" />
            <span className="cube-face face-right" />
            <Code2 className="relative z-10" size={42} />
          </div>
        </div>

        {ORBIT_ITEMS.map(({ className, icon: Icon, label }) => (
          <div
            className={`orbit-item ${orbitPositionClass[className]} absolute z-10 grid justify-items-center gap-1.5 text-center text-sm font-black text-[#ff8a77] max-md:text-[11px]`}
            key={label}
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border-[3px] border-[#ff664d] bg-[#19182d] shadow-[0_0_24px_rgba(255,102,77,0.16)] max-md:h-10 max-md:w-10 max-[420px]:h-9 max-[420px]:w-9">
              <Icon size={21} />
            </span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
