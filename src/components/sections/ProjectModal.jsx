import { useState, useEffect } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white overflow-y-auto max-h-screen max-w-[1200px] relative p-4 sm:p-8 flex flex-col overflow-hidden rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="flex justify-center flex-1">
            <h2 className="inline-block text-2xl font-bold text-transparent sm:text-4xl bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-400 bg-clip-text">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-gray-800 sm:text-4xl"
          >
            ✕
          </button>
        </div>
        <div className="my-5 sm:my-10">
          <div className="flex flex-col items-start flex-1 sm:flex-row">
            <div className="relative flex items-center justify-center flex-1">
              <button
                onClick={prevImage}
                className="absolute left-0 text-5xl text-gray-700"
              >
                ‹
              </button>
              <img
                src={project.images[currentIndex]}
                alt={`screenshot ${currentIndex + 1}`}
                className="h-[350px] w-screen rounded-lg"
              />
              <button
                onClick={nextImage}
                className="absolute right-0 text-5xl text-gray-700"
              >
                ›
              </button>

              <div className="absolute font-semibold text-center text-gray-700 -bottom-10">
                {currentIndex + 1} / {project.images.length}
              </div>
            </div>

            <div className="flex flex-col justify-start flex-1 mt-20 sm:ml-8 sm:mt-0">
              <div className="space-y-3 text-base text-gray-800 sm:text-lg md:text-xl">
                <p className="sm:text-lg md:text-xl">{project.description}</p>
                <p className="sm:text-lg md:text-xl">
                  <strong>팀 구성:</strong> {project.team}
                </p>
                <p className="sm:text-lg md:text-xl">
                  <strong>기간:</strong> {project.period}
                </p>
                <p className="sm:text-lg md:text-xl">
                  <strong>기술 스택:</strong> {project.stack}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 border-t sm:my-4" />
        <div>내용</div>
      </div>
    </div>
  );
}
