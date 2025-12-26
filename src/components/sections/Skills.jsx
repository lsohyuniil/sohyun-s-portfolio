import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("frontend");
  const [visible, setVisible] = useState(false); // 섹션 화면에 들어왔는지 확인
  const [animateTrigger, setAnimateTrigger] = useState(false); // 애니메이션 트리거
  const ref = useRef(null);

  const skillLevel = {
    frontend: [
      { name: "JavaScript", percent: 70 },
      { name: "TypeScript", percent: 60 },
      { name: "React.js", percent: 70 },
      { name: "Next.js", percent: 60 },
      { name: "HTML5", percent: 80 },
      { name: "CSS3", percent: 80 },
      { name: "styled-components", percent: 80 },
      { name: "Tailwind CSS", percent: 80 },
      { name: "Zustand", percent: 60 },
    ],
    backend: [
      { name: "Node.js", percent: 70 },
      { name: "Express", percent: 70 },
      { name: "MySQL", percent: 70 },
      { name: "PostgreSQL", percent: 70 },
      { name: "Prisma", percent: 70 },
    ],
    etc: [
      { name: "Git", percent: 90 },
      { name: "GitHub", percent: 90 },
      { name: "Figma", percent: 80 },
      { name: "Docker", percent: 80 },
    ],
  };

  // 카테고리 변경 애니메이션 트리거
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => setAnimateTrigger(true), 50);
    return () => clearTimeout(timer);
  }, [selectedSkill, visible]);

  // 화면에 들어왔을 때
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className="w-[200px] sm:w-[400px] h-[280px] mb-4 sm:mb-6">
      <h3 className="mb-1 text-xl font-bold text-center sm:text-2xl text-primaryHover sm:mb-4">
        Skills
      </h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
        {/* 카테고리 버튼 */}
        <div className="flex flex-row justify-center gap-4 sm:flex-col sm:gap-2 sm:justify-start">
          {["frontend", "backend", "etc"].map((cat) => (
            <div
              key={cat}
              className={`cursor-pointer text-base sm:text-xl font-semibold hover:text-primaryHover ${
                selectedSkill === cat ? "text-primary" : "text-gray-400"
              }`}
              onClick={() => {
                setAnimateTrigger(false);
                setTimeout(() => setAnimateTrigger(true), 50);
                setSelectedSkill(cat);
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>

        {/* 기술 그래프 바 */}
        <div className="flex flex-col justify-center w-full gap-2 text-xs sm:text-base md:text-lg sm:justify-start">
          {skillLevel[selectedSkill].map((skill) => (
            <div key={skill.name} className="relative">
              <div className="relative w-full h-4 overflow-hidden bg-gray-300 rounded-full sm:h-6">
                {/* 애니메이션 바 */}
                <div
                  className="h-4 transition-all duration-1000 ease-in-out rounded-full sm:h-6"
                  style={{
                    width: animateTrigger ? `${skill.percent}%` : "0%",
                    background:
                      "linear-gradient(90deg, #2563EB, #6366F1, #F472B6)",
                  }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-between px-2 font-medium text-white">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
