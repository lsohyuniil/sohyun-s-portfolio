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

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
          className="text-primary font-bold text-lg tracking-wide"
        >
          <h1>SOHYUN</h1>
        </button>

        <ul className="flex gap-2 sm:gap-8 text-xs sm:text-base font-medium">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer text-primary hover:text-primaryHover transition-colors"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer text-primary hover:text-primaryHover transition-colors"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer text-primary hover:text-primaryHover transition-colors"
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
