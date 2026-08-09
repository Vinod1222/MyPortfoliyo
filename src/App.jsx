import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyles } from "./components/GlobalStyles";
import { SkeletonScreen } from "./components/SkeletonScreen";
import { NAV_ITEMS } from "./constants/portfolioData";
import { useActiveNavigation } from "./hooks/useActiveNavigation";
import { useDismissableLayer } from "./hooks/useDismissableLayer";
import { AboutSection } from "./sections/AboutSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { ConnectSection } from "./sections/ConnectSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { IntroSection } from "./sections/IntroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillLevelsSection } from "./sections/SkillLevelsSection";
import { getSectionId } from "./utils/sectionUtils";

export default function App() {
  const [isSkeletonVisible, setIsSkeletonVisible] = useState(true);
  const [openSkill, setOpenSkill] = useState(0);
  const [openProject, setOpenProject] = useState(-1);
  const [activeProjectSection, setActiveProjectSection] = useState(0);
  const [openCase, setOpenCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("");
  const [intentOpen, setIntentOpen] = useState(false);
  const activeNav = useActiveNavigation(NAV_ITEMS);
  const intentRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const skeletonTimer = window.setTimeout(() => {
      setIsSkeletonVisible(false);
    }, 1150);

    return () => window.clearTimeout(skeletonTimer);
  }, []);

  const closeIntent = useCallback(() => setIntentOpen(false), []);

  useDismissableLayer({
    enabled: intentOpen,
    layerRef: intentRef,
    onDismiss: closeIntent,
  });

  const scrollToSection = useCallback((item) => {
    const target = document.getElementById(getSectionId(item));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const handleBrandClick = useCallback((event) => {
    event.preventDefault();
    document
      .getElementById("home")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const handleProjectToggle = useCallback((index) => {
    setOpenProject((currentProject) => (currentProject === index ? -1 : index));
    setActiveProjectSection(0);
  }, []);

  const handleSkillToggle = useCallback((index) => setOpenSkill(index), []);

  const handleCaseToggle = useCallback((index) => setOpenCase(index), []);

  const handleIntentChange = useCallback((option) => {
    setSelectedIntent(option);
    setIntentOpen(false);
  }, []);

  return (
    <>
      <GlobalStyles />
      {isSkeletonVisible && <SkeletonScreen />}

      <Header
        activeNav={activeNav}
        menuOpen={menuOpen}
        navItems={NAV_ITEMS}
        onBrandClick={handleBrandClick}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onNavClick={scrollToSection}
      />

      <main className="pt-[88px]">
        <IntroSection />
        <AboutSection
          openSkill={openSkill}
          onSkillToggle={handleSkillToggle}
        />
        <SkillLevelsSection />
        <ProjectsSection
          activeProjectSection={activeProjectSection}
          openProject={openProject}
          onProjectSectionChange={setActiveProjectSection}
          onProjectToggle={handleProjectToggle}
        />
        <CaseStudiesSection
          openCase={openCase}
          onCaseToggle={handleCaseToggle}
        />
        <ExperienceSection />
        <ConnectSection
          intentOpen={intentOpen}
          intentRef={intentRef}
          selectedIntent={selectedIntent}
          onIntentChange={handleIntentChange}
          onIntentToggle={() => setIntentOpen((isOpen) => !isOpen)}
        />
      </main>

      <footer className="bg-[#111021] px-[5.5vw] py-8 text-center text-sm font-semibold text-white/55">
        &copy; 2026 Vinod Kumar Yadav. All rights reserved.
      </footer>
    </>
  );
}
