export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-8 mx-auto w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
          &copy; 2025 sohyun. All rights reserved.
        </p>

        <div className="text-sm sm:text-base md:text-lg text-center">
          Email : {""}
          <a
            href="mailto:lim0710so@gmail.com"
            className="hover:text-primaryHover transition"
          >
            lim0710so@gmail.com
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/lsohyuniil"
            className="hover:text-primaryHover transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
