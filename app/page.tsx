'use client';

// import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { FlipTextDemo } from "@/components/demos/flip-text-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-mulitple-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { HeroSectionDemo } from "@/components/demos/hero-section-demo";
import { Intro } from "@/components/intro";
import { AnimatedTestimonialsDemo } from "@/components/demos/animated-testimonials-demo";
import Footer from "@/components/footer";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Social Media Audit",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Planning & Strategy",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_4.png",
    title: "Branding & Design",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Community Management",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_2.png",
    title: "Influencer Management",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
  {
    icon: "/images/s_2.png",
    title: "Crisis Management & Response",
    description:
      "Get your business noticed with our public relations services",
  },
  {
    icon: "/images/s_2.png",
    title: "Analytics",
    description:
      "Get the most out of your marketing efforts with our analytics and reporting services",
  }
];


export default function Home() {
  return (
    
    <div className="overflow-clip top-0 z-[-2] h-full w-full bg-[#FCF5EB] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(68, 161, 110, 0.13)_0,rgba(68, 161, 110, 0)_50%,rgba(68, 161, 110, 0)_100%)]">
      <Element name="top" className="fixed overflow-hidden top-0 left-0 rounded-[6px] md:mx-auto z-50 w-full bg-[#FCF5EB] flex items-center justify-between py-6 px-4 md:px-8 mx-6">

        <Link href={"/"}>
          <Image
                  src="/logo/ev-logo-dark.png"
                  alt="Evi Van Bockryck Logo"
                  width={1000}
                  height={1000}
                  className="w-28"
                />
        </Link>

          <div className="absolute right-1/2 translate-x-1/2 transform">
            <div className="hidden md:flex gap-x-10 items-center text-[#ba4b2f] font-medium text-lg cursor-pointer">
              <Link href={'/showcase'} className="hover:text-[#2f9eba]"> Showcase </Link>

              <ScrollLink to='services' smooth={true} offset={-120} className="hover:text-[#2f9eba]"> Services </ScrollLink>
              <ScrollLink to='process' smooth={true} offset={-120} className="hover:text-[#2f9eba]"> Process </ScrollLink>
              <ScrollLink to='guarentees' smooth={true} offset={-120} className="hover:text-[#2f9eba]"> Guarentess </ScrollLink>

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
      </Element>


      <main className="md:pb-10">
          <h1>
              <HeroSectionDemo/>
          </h1>  

          <Intro/>
        
          <div className="w-full bg-[#efa593] py-16">
            <div className="mx-auto w-full max-w-screen-xl px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center">
                <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
                  <p className="md:text-3xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                    <PiCheckBold className="text-xl text-blue-500" />
                    Audit
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
                  <p className="md:text-3xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                    <PiCheckBold className="text-xl text-blue-500" />
                    Design
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
                  <p className="md:text-3xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                    <PiCheckBold className="text-xl text-blue-500" />
                    Marketing
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
                  <p className="md:text-3xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                    <PiCheckBold className="text-xl text-blue-500" />
                    Management
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>

      </main>

      <Element name="services">
        <div className="md:px-5 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1 className="text-3xl md:text-(xl md:text-center font-medium">
            <FlipTextDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-[#ba4b2f]">
            Ik bied een breed scala aan marketingdiensten om je bedrijf te laten groeien en eruit te laten springen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-[#efa593] p-4 hover:scale-105 transition-transform rounded-3xl"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-[#efa593] p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-[#ba4b2f] text-xl font-medium"><span className="w-fit rounded-lg p-1.5 bg-amber-50">{service.title}</span></h1>
                <p className="text-m text-[#fcf5eb]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="bg-[#efa593] md:px-0  md:mx-auto pt-15">
        <h1 className="text-3xl text-[#fcf5eb] md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Het{" "}
              <span className="text-[#ba4b2f] flex gap-x-1 items-center">
                {" "}
                <Image
                  src={"/icons/squiggle.svg"}
                  width={10000}
                  height={10000}
                  className="w-6"
                  alt="image"
                />
                Creative
                <Image
                  src={"/icons/star.svg"}
                  width={10000}
                  height={10000}
                  className="w-6 mb-8"
                  alt="image"
                />
              </span>{" "}
              Process
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-[#fcf5eb]">
          Al mijn diensten zijn erop gericht om jouw bedrijf te laten opvallen.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 ùmd:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0 my-10">
        <AnimatedTestimonialsDemo />

          {/* <Image
            src={"/images/carlo.jpeg"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-[#ba4b2f] text-lg md:text-2xl ">
              &quot;We werken al meer dan 2 jaar samen met Evi en het is een geweldige samenwerking. Ze heeft ons geholpen om ons bedrijf te laten groeien en we zijn ontzettend blij met de resultaten.&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-[#ba4b2f] text-xl font-medium">
              Carlo, Mespreuve <br />
              CEO, Revolution Motors
            </span>
          </div> */}
        </main>

      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
       <LetsMakeThingsHappenSection />
      
      </section>
      
    <Footer className="bg-[#efa593]"/>

    </div> 
  );
}
