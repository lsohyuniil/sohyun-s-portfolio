import { useState } from "react";

export default function Contact() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !email || !content) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요!");
      return;
    }

    alert("이메일이 정상적으로 보내졌습니다. 감사합니다.");
  };

  return (
    <section
      id="contact"
      className="h-screen bg-black relative overflow-hidden"
    >
      <div className="max-w-[1440px] px-0 sm:px-8 flex flex-col mx-auto z-10 relative">
        <h2 className="sm:mt-20 md:w-auto my-4 text-center md:text-left text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-4 sm:mb-32 md:mb-32">
          Contact
        </h2>

        <div className="flex flex-col justify-center items-center w-full sm:w-full">
          <div className="flex flex-col gap-4 w-[90%] sm:w-full max-w-md text-left md:text-left">
            <label className="font-semibold text-white">
              제목
              <input
                type="text"
                placeholder="제목을 입력해 주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 hover:border-primaryHover focus:border-primary rounded px-4 py-2 w-full text-sm sm:text-base md:text-lg"
              />
            </label>

            <label className="font-semibold text-white">
              이메일
              <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 hover:border-primaryHover focus:border-primary rounded px-4 py-2 w-full text-sm sm:text-base md:text-lg"
              />
            </label>

            <label className="font-semibold text-white">
              내용
              <textarea
                placeholder="내용을 입력해 주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-gray-300 hover:border-primaryHover focus:border-primary rounded px-4 py-2 w-full h-32 sm:h-40 md:h-48 resize-none text-sm sm:text-base md:text-lg"
              />
            </label>

            <button
              onClick={handleSubmit}
              className="bg-primary text-white font-bold py-2 rounded hover:bg-primaryHover transition text-sm sm:text-base md:text-lg"
            >
              보내기
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-4xl sm:text-6xl md:text-[160px] font-bold text-gray-900 whitespace-nowrap text-center">
          THINK · SOLVE · EVOLVE
        </div>
      </div>
    </section>
  );
}
