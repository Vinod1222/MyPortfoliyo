import { ArrowDownToLine, Menu, Sparkles, X } from "lucide-react";
import { RESUME_PATH } from "../constants/portfolioData";

export function Header({
  activeNav,
  menuOpen,
  navItems,
  onBrandClick,
  onMenuToggle,
  onNavClick,
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-[88px] items-center justify-between border-b border-white/10 bg-[#19182d] px-[5.5vw]">
      <a
        className="flex items-center gap-2.5 whitespace-nowrap text-[21px] font-extrabold text-white"
        href="#home"
        onClick={onBrandClick}
      >
        <Sparkles size={18} fill="currentColor" />
        <span>connect-vinod</span>
      </a>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 right-0 top-[88px] z-40 flex-col gap-5 border-b border-white/10 bg-[#19182d] p-6 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <button
            key={item}
            className={`whitespace-nowrap border-0 bg-transparent text-left text-base font-bold transition-colors ${
              activeNav === item
                ? "text-[#ff664d]"
                : "text-white/60 hover:text-[#ff664d]"
            }`}
            type="button"
            onClick={() => onNavClick(item)}
          >
            {item}
          </button>
        ))}

        <a
          className="inline-flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#ff664d] px-6 font-extrabold text-white shadow-[0_12px_28px_rgba(255,102,77,0.22)]"
          href={RESUME_PATH}
          download
        >
          <ArrowDownToLine size={18} />
          Resume
        </a>
      </nav>

      <button
        className="border-0 bg-transparent text-white md:hidden"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
