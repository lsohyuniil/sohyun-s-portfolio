import Profile from "./Profile";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="h-screen max-w-[1440px] mx-auto">
      <h2 className="px-0 sm:px-8 sm:py-20 md:w-auto py-4 text-center md:text-left text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
        About
      </h2>

      <div className="px-4 sm:px-10 md:px-32 flex flex-col md:flex-row items-center  justify-center">
        <div className="flex-shrink-0 sm:flex-1 mb-6 md:mb-0">
          <Profile />
        </div>

        <div className="flex flex-col sm:flex-1 justify-between w-full md:w-auto items-center sm:gap-8">
          <Skills />

          <div className="mt-4 sm:mt-6 md:mt-4 flex-col items-center text-center md:text-left">
            <h3 className="text-xl text-center sm:w-[400px] sm:text-2xl text-primaryHover font-bold mb-1 sm:mb-2 md:mb-2">
              Certification
            </h3>
            <div className="text-sm sm:text-base md:text-xl">
              <div className="text-left w-32 sm:w-full">
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
