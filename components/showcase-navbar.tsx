import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      fixed overflow-hidden top-0 left-0 rounded-[6px] md:mx-auto z-50 w-full bg-[#FCF5EB] flex items-center justify-between py-6 px-4 md:px-8 mx-6
    "
    >
      <Link href="/">
      <Image
        src="/logo/ev-logo-dark.png"
        alt="Bird Logo"
        width={1000}
        height={1000}
        className="w-28"
      />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-[#ba4b2f] font-medium text-lg cursor-pointer">
          <Link
            href="/showcase"
            className="
          hover:text-[#2f9eba]
          "
          >
            Showcase
          </Link>
             <Link href="/" className="hover:text-[#2f9eba]">
            Services
          </Link>
          <Link href="/" className="hover:text-[#2f9eba]">
        Process
          </Link>
          <Link href="/" className="hover:text-[#2f9eba]">
            Guarentees
          </Link>
  
        </div>
      </div>


      <div className="flex items-center gap-x-4">
      <a href="tel:+32470200000" className="hidden xl:flex"> 
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3 text-[#ba4b2f]">
              +32 470 20 00 00 
            </button>
          </a>


          <Link href={'/meeting'} className="px-6 py-3 text-lg 
            hover:bg-[#efa593] 
            rounded-[6px] border-2 border-black 
            text-[#fcf5eb] bg-[#ba4b2f] transition duration-200 
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),
                        2px_2px_rgba(255,255,255),
                        3px_3px_rgba(255,255,255),
                        4px_4px_rgba(255,255,255),
                        5px_5px_0px_0px_rgba(255,255,255)] ">
            Book a call
          </Link>

      </div>
    </div>
  );
};

export default ShowcaseNavbar;