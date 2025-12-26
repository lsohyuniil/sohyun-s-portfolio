import sohyunImg from "/src/assets/sohyun.svg";

export default function Profile() {
  return (
    <div className="relative">
      <div className="absolute z-0 -translate-x-1/2 -translate-y-1/2 h-60 w-60 left-1/2 top-1/2 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500 via-violet-500 to-rose-400 opacity-30 blur-3xl" />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <img
          src={sohyunImg}
          alt="sohyun"
          className="
            object-contain
            w-full
            h-[clamp(500px,40vw,700px)]
          "
        />
      </div>
    </div>
  );
}
