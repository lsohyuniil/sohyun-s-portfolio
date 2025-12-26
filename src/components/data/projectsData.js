import sohyunImg from "/src/assets/sohyun.svg";
import reacts from "/src/assets/react.svg";

export const projectsData = [
  {
    title: "프로젝트 A",
    description: "나를 소개하는 프로젝트",
    link: "https://github.com/lsohyuniil",
    team: "팀 프로젝트",
    period: "2025.12.25 ~ 2025.12.26",
    stack:
      "React · React-router-dom · ContextAPI · Socket.io · Express · MySQL · Kakao Map API",
    mainImage: sohyunImg,
    images: [sohyunImg, sohyunImg, reacts, sohyunImg, sohyunImg, reacts],
  },
  {
    title: "프로젝트 B",
    description: "다른 프로젝트",
    link: "https://github.com/lsohyuniil",
    team: "개인 프로젝트",
    period: "2025.11.01 ~ 2025.11.30",
    stack: "React · Node.js · Express · PostgreSQL",
    mainImage: sohyunImg,
    images: [reacts, sohyunImg],
  },
];
