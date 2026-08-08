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
    <header className="site-header">
      <a className="brand" href="#home" onClick={onBrandClick}>
        <Sparkles size={18} fill="currentColor" />
        <span>connect-vinod</span>
      </a>

      <nav
        className={menuOpen ? "nav open" : "nav"}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <button
            key={item}
            className={activeNav === item ? "active" : ""}
            type="button"
            onClick={() => onNavClick(item)}
          >
            {item}
          </button>
        ))}

        <a className="resume-button" href={RESUME_PATH} download>
          <ArrowDownToLine size={18} />
          Resume
        </a>
      </nav>

      <button
        className="menu-button"
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
