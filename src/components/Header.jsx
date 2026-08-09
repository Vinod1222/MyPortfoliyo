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
  const navClass = menuOpen
    ? "absolute left-4 right-4 top-[76px] flex flex-col items-stretch gap-3 rounded-2xl border border-white/10 bg-[#21203b] p-5 shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
    : "hidden lg:flex lg:items-center lg:gap-7";

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex min-h-[82px] items-center justify-between border-b border-white/10 bg-[#19182d] px-[5.5vw]">
      <a
        className="flex items-center gap-2.5 whitespace-nowrap text-[21px] font-extrabold text-[#ffffff]"
        href="#home"
        onClick={onBrandClick}
      >
        <Sparkles className="text-[#ff664d]" size={18} fill="currentColor" />
        <span className="text-white opacity-100 drop-shadow-sm max-[420px]:max-w-[210px] max-[420px]:overflow-hidden max-[420px]:text-ellipsis">
          connect-vinod
        </span>
      </a>

      <nav className={navClass} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={`flex cursor-pointer items-center border-0 bg-transparent text-base font-bold transition-colors duration-200 ${
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
          className="flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#ff664d] px-6 font-extrabold text-white shadow-[0_12px_28px_rgba(255,102,77,0.22)]"
          href={RESUME_PATH}
          download
        >
          <ArrowDownToLine size={18} />
          Resume
        </a>
      </nav>

      <button
        className="border-0 bg-transparent text-white lg:hidden"
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
