export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-black flex flex-col justify-center overflow-x-hidden"
    >
      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto my-20 p-6">
        <h2 className="sm:text-6xl text-2xl text-white font-bold mb-6">
          THINK · SOLVE · EVOLVE
        </h2>
        <h3 className="sm:text-3xl text-xs text-white font-bold">
          고민은 깊게, 해결은 명쾌하게, 성장은 끝없이.
        </h3>
      </div>

      <div className="w-screen">
        <div className="flex flex-col sm:gap-5">
          <div className="h-28 sm:h-36 flex items-center">
            <div className="marquee text-7xl sm:text-[160px] font-bold text-white reverse">
              THINK
              <span className="mx-1 star pulse">💡</span>
              SOLVE
              <span className="mx-1 star spin">⚙️</span>
              EVOLVE
              <span className="mx-1 star flip">⭐️</span>
              THINK
              <span className="mx-1 star pulse">💡</span>
              SOLVE
              <span className="mx-1 star spin">⚙️</span>
              EVOLVE
              <span className="mx-1 star flip">⭐️</span>
            </div>
          </div>

          <div className="h-28 sm:h-36 flex items-center">
            <div className="marquee text-6xl sm:text-[140px] font-bold text-white">
              WELCOME TO SOHYUN'S PORTFOLIO
              <span className="mx-1 star flip">💙</span>
              WELCOME TO SOHYUN'S PORTFOLIO
              <span className="mx-1 star pulse">💙</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          white-space: nowrap;
          display: inline-block;
          animation: marquee 15s linear infinite;
        }

        .marquee.reverse {
          animation-direction: reverse;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .star {
          display: inline-block;
          transform-origin: center;
        }

        /* 작아졌다 커졌다 반복 */
        .star.pulse {
          animation: starPulse 1.8s ease-in-out infinite;
        }

        @keyframes starPulse {
          0% {
            transform: scale(0.1);
          }
          50% {
            transform: scale(1.10);
          }
          100% {
            transform: scale(1);
          }
        }

        /* 가로 회전 */
        .star.flip {
          animation: starFlip 2.5s ease-in-out infinite;
        }

        @keyframes starFlip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* 시계 방향 회전 */
        .star.spin {
          animation: starSpin 3s linear infinite;
        }

        @keyframes starSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
