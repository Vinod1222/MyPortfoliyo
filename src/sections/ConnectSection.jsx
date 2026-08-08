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
    <section className="connect-section" id="lets-connect">
      <div className="connect-copy">
        <h2>Let's create something together</h2>
        <p>
          Whether it is a full-time role, freelance project, or a product
          conversation, I would love to hear from you.
        </p>
        <div className="availability">
          <span />
          Open to Work
        </div>
        <a href="mailto:deepyadav153107@gmail.com">
          <Mail size={18} />
          deepyadav153107@gmail.com
        </a>
        <a href="tel:+918542824307">
          <Phone size={18} />
          +91 8542824307
        </a>
        <span>
          <MapPin size={18} />
          Bangalore, India
        </span>
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
            GitHub
          </a>
          <a
            className="linkedin"
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
        className="connect-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Your Email
          <input type="email" placeholder="email@example.com" />
        </label>
        <label>
          Reaching Out For
          <div
            ref={intentRef}
            className={intentOpen ? "custom-select open" : "custom-select"}
          >
            <button
              type="button"
              onClick={onIntentToggle}
              aria-expanded={intentOpen}
            >
              <span>{selectedIntent || "Select intent..."}</span>
              <ChevronDown size={18} />
            </button>
            {intentOpen && (
              <div className="select-options">
                {INTENT_OPTIONS.map((option) => (
                  <button
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
          className="connect-submit"
          type="submit"
          disabled={!selectedIntent}
        >
          Let's Connect
        </button>
      </form>
    </section>
  );
}
