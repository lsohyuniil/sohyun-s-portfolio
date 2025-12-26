import Profile from "./Profile";
import Skills from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        md:h-screen
        max-w-[1440px]
        mx-auto
      "
    >
      <h2 className="px-0 py-4 text-2xl font-bold text-center sm:px-8 sm:py-20 md:w-auto md:text-left sm:text-3xl md:text-4xl text-primary">
        About
      </h2>

      <div className="flex flex-col items-center justify-center px-4 mt-5 sm:px-10 md:px-32 md:flex-row">
        <div className="flex-shrink-0 mb-6 sm:flex-1 md:mb-0">
          <Profile />
        </div>

        <div className="flex flex-col items-center justify-between w-full sm:flex-1 md:w-auto sm:gap-8">
          <Skills />

          <div className="flex-col items-center mt-4 text-center sm:mt-6 md:mt-4 md:text-left">
            <h3 className="text-xl text-center sm:w-[400px] sm:text-2xl text-primaryHover font-bold mb-1 sm:mb-4">
              Certification
            </h3>
            <div className="text-sm sm:text-base md:text-xl">
              <div className="w-32 text-left sm:w-full">
                <p className="font-bold">SQL 개발자 (SQLD)</p>
                <p className="text-xs sm:text-base">한국데이터산업진흥원</p>
                <p className="text-xs sm:text-base">2025.09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
