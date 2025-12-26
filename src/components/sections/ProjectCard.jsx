import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = project.images;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsImageModalOpen(true);
  };
  const closeModal = () => setIsImageModalOpen(false);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (isImageModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isImageModalOpen]);

  return (
    <div className="relative w-full min-h-screen">
      <div className="relative z-10 grid items-center w-full h-full grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <div className="absolute z-0 -translate-x-1/2 -translate-y-1/2 h-60 w-60 left-1/2 top-1/2 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500 via-violet-500 to-rose-400 opacity-30 blur-3xl" />
          <img
            src={project.mainImage}
            alt={project.title}
            onClick={() => window.open(project.link, "_blank")}
            className="cursor-pointer transform transition duration-300 hover:scale-105 relative z-10 object-contain w-full h-[clamp(500px,40vw,700px)]"
          />
        </div>

        <div className="flex flex-col h-full gap-2">
          <div className="flex flex-col items-end flex-1 mt-10 text-right">
            <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-400 bg-clip-text">
              {project.title}
            </h3>
            <div>{project.description}</div>
            <div className="mt-2">{project.team}</div>
            <div>{project.period}</div>
            <div>{project.stack}</div>
            <div className="flex justify-end my-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 font-semibold text-white transition duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-400 brightness-110 hover:brightness-90 hover:scale-105"
              >
                상세보기
              </button>
            </div>
          </div>

          <div className="z-10">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{ type: "fraction" }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{ height: "170px" }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    className="w-[220px] h-[140px] object-cover rounded-lg cursor-pointer transform transition duration-300 hover:scale-105"
                    onClick={() => openModal(idx)}
                    alt={`project screenshot ${idx + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <img
            src={images[currentIndex]}
            alt={`project screenshot ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] rounded-lg"
          />
          <button
            onClick={closeModal}
            className="fixed z-50 text-2xl font-bold text-white sm:text-4xl sm:top-10 sm:right-10 top-5 right-5"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="fixed z-50 text-5xl font-bold text-white -translate-y-1/2 sm:text-7xl top-1/2 left-5 sm:left-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="fixed z-50 text-5xl font-bold text-white -translate-y-1/2 sm:text-7xl top-1/2 right-5 sm:right-10"
          >
            ›
          </button>
          <div className="fixed z-50 font-bold text-white -translate-x-1/2 sm:text-xl bottom-10 left-1/2">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
