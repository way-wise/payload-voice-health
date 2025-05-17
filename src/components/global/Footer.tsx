import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#392A7C] py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
          <div className="flex gap-1.5 sm:gap-2 mt-4 md:mt-0 text-white/80 font-Inter text-sm sm:text-base sm:leading-6">
            <Link
              href="/"
            >
              Privacy Policy
            </Link>
            <div className="border-r border-white"></div>
            <Link
              href="/"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="text-white font-Inter text-base leading-6">© {new Date().getFullYear()} Voice Health AI</div>
        </div>
      </div>
    </footer>
  );
}
