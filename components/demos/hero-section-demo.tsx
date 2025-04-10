"use client";

import Image from "next/image";
import { motion } from "motion/react";
import  Link  from "next/link";

export function HeroSectionDemo() {
  return (
    <section id="hero" className=" relative h-screen w-screen flex flex-col md:flex-row overflow-hidden">
        <div id="left-hero" className="flex-1 bg-[#FCF5EB] flex flex-col justify-center px-6  ">
        <div className="mx-auto max-w-4xl px-4">
            <h1 className="relative z-10 mx-auto my-4 max-w-4xl text-center md:text-left text-3xl font-bold text-[#ba4b2f] md:text-6xl lg:text-8xl leading-tight">
            {"Klaar om gezien te worden?"
                .split(" ")
                .map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                >
                    {word}
                </motion.span>
                ))}
            </h1>
            <motion.p
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                delay: 1.5,
            }}
            className="relative z-10 mx-auto max-w-4xl py-4 text-xl md:text-left md:text-4xl text-[#ba4b2f]"
            >
            Jij doet waar je goed in bent, ik zorg dat iedereen het ziet.
            </motion.p>
            <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                delay: 2.0,
            }}
            className="relative mx-auto z-10 mt-8 max-w-4xl flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
                <Link
                    href="/meeting"
                    className="
                        py-3 
                        px-10
                        md:px-16
                        md:text-xl
                        hover:bg-[#efa593]
                        rounded-[6px]
                        border-2 
                        border-black 
                        dark:border-white 
                        bg-[#ba4b2f] 
                        text-white 
                        transition 
                        duration-200 
                        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
                >
                        Book a Call
                </Link>
                <Link
                    href={"/showcase"}
                    className="
                        bg-white
                        py-3 
                        px-10
                        md:px-16
                            md:text-xl
                            border-4
                            border-black
                            rounded-[6px]
                            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
                >
                    Showcase
                </Link>
            </motion.div>
            </div>
        </div>
  
    <div id="right-hero" className="relative flex-1 bg-[#efa593] flex items-center justify-center">
    <motion.div
        initial={{
        opacity: 0,
        y: 10,
        }}
        animate={{
        opacity: 1,
        y: 0,
        }}
        transition={{
        duration: 0.3,
        delay: 1.0,
        }}
        className="relative z-20 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] aspect-[2/3] overflow-hidden"
        style={{
        borderTopLeftRadius: "200px",
        borderTopRightRadius: "200px",
        }}
    >
        <Image
            src="/images/panda-hero.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
        />
    </motion.div>
    </div>
</section>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
      </div>
      <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};
