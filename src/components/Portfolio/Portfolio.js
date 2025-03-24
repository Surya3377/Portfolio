import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("Full Stack Developer");
  const typingPhrases = ["React Developer", "Front-End Developer"];

  // References
  const sectionsRef = useRef({});

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find current active section
      const scrollPosition = window.scrollY + 200;

      for (const section in sectionsRef.current) {
        const element = sectionsRef.current[section];
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Text typing animation
    let currentPhraseIndex = 0;
    const typingInterval = setInterval(() => {
      currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
      setTypedText(typingPhrases[currentPhraseIndex]);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Register section ref
  const registerSection = (id, ref) => {
    if (ref && !sectionsRef.current[id]) {
      sectionsRef.current[id] = ref;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation classes based on scroll position
  const getAnimationClass = (direction) => {
    return direction === "left"
      ? "translate-x-0 opacity-100"
      : "translate-x-0 opacity-100";
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <Header
        isScrolled={isScrolled}
        registerSection={registerSection}
        typedText={typedText}
        getAnimationClass={getAnimationClass}
      />
      <Skills registerSection={registerSection} />
      <Experience registerSection={registerSection} />
      <Project registerSection={registerSection} />
      <Contact registerSection={registerSection} />
    </div>
  );
};

export default Portfolio;
