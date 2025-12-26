import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 64;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <nav className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-bold tracking-wide text-primary"
        >
          <h1>SOHYUN</h1>
        </button>

        <ul className="flex gap-2 text-xs font-medium sm:gap-8 sm:text-base">
          <li
            onClick={() => scrollToSection("about")}
            className="transition-colors cursor-pointer text-primary hover:text-primaryHover"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="transition-colors cursor-pointer text-primary hover:text-primaryHover"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="transition-colors cursor-pointer text-primary hover:text-primaryHover"
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
