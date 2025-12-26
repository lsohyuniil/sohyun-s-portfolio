import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !email || !content) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("연락주셔서 감사합니다. 빠른 시일 내에 답변 드리겠습니다.");
        setTitle("");
        setEmail("");
        setContent("");
      },
      (error) => {
        alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
        console.error(error);
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative h-screen overflow-hidden bg-black"
    >
      <h2 className="px-0 py-4 text-2xl font-bold text-center sm:px-8 sm:py-20 md:w-auto md:text-left sm:text-3xl md:text-4xl text-primary">
        Contact
      </h2>

      <div className="relative z-10 flex flex-col items-center justify-center w-full my-12 sm:my-20 sm:w-full">
        <div className="flex flex-col gap-4 w-[80%] sm:w-full max-w-md text-left md:text-left">
          <form ref={form} onSubmit={handleSubmit}>
            <label className="font-semibold text-white">
              제목
              <input
                type="text"
                name="name"
                placeholder="제목을 입력해 주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-2 text-sm text-black border border-gray-300 rounded hover:border-primaryHover focus:border-primary sm:text-base md:text-lg"
              />
            </label>

            <label className="font-semibold text-white">
              이메일
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-2 text-sm text-black border border-gray-300 rounded hover:border-primaryHover focus:border-primary sm:text-base md:text-lg"
              />
            </label>

            <label className="font-semibold text-white">
              내용
              <textarea
                placeholder="내용을 입력해 주세요."
                name="message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-32 px-4 py-2 mb-2 text-sm text-black border border-gray-300 rounded resize-none hover:border-primaryHover focus:border-primary sm:h-40 md:h-48 sm:text-base md:text-lg"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2 mb-2 text-sm font-bold text-white transition rounded bg-primary hover:bg-primaryHover sm:text-base md:text-lg"
            >
              보내기
            </button>
          </form>
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
