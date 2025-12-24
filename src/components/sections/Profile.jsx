import sohyunImg from "/src/assets/sohyun.png";

export default function Profile() {
  return (
    <div className="relative w-[150px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[300px] md:h-[400px]">
      {/* <div className="absolute left-0 w-full h-full overflow-hidden rounded-full bg-blue-100 z-0">
        <img
          src={sohyunImg}
          alt="sohyun"
          className="absolute top-6 sm:top-12 md:top-16 left-0 w-full h-full object-cover z-10"
        />
      </div> */}

      <div className="relative w-[150px] sm:w-[300px] md:w-[400px] h-[150px] sm:h-[300px] md:h-[400px]">
        <div className="absolute left-1/2 top-1/2 w-44 h-44 sm:w-72 sm:h-72 bg-blue-600 rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={sohyunImg}
            alt="sohyun"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <span className="z-20 absolute text-base sm:text-2xl md:text-3xl top-[15%] left-[50%] -translate-x-1/2 text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #열정적인
      </span>
      <span className="absolute text-base sm:text-2xl md:text-3xl top-[50%] left-[-25px] sm:left-[-40px] md:left-[-60px] -translate-y-1/2 text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #긍정적인
      </span>
      <span className="absolute text-base sm:text-2xl md:text-3xl bottom-[-10px] sm:bottom-[-15px] md:bottom-[-20px] left-[50%] -translate-x-1/2 text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #도전적인
      </span>
      <span className="absolute text-sm sm:text-xl md:text-2xl top-[50%] right-[-25px] sm:right-[-40px] md:right-[-60px] -translate-y-1/2 text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #창의적인
      </span>
      <span className="absolute text-xs sm:text-xl md:text-xl top-[5%] left-[10px] text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #협업
      </span>
      <span className="absolute text-base sm:text-2xl md:text-3xl top-[5%] right-[10px] text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #성실
      </span>
      <span className="absolute text-sm sm:text-2xl md:text-2xl bottom-[10px] left-[10px] text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #집중
      </span>
      <span className="absolute text-xs sm:text-xl md:text-xl bottom-[10px] right-[10px] text-primary hover:text-primaryHover font-bold transition-transform duration-300 hover:scale-110">
        #배움
      </span>
    </div>
  );
}
