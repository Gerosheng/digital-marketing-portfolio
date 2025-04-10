"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Intro() {
    return (
        <div id="intro" className="relative bg-[#ba4b2f] h-screen w-screen flex flex-col md:flex-row overflow-hidden">
            <div id="left-intro" className="flex-1 flex flex-col items-center justify-center">
            <motion.div
                initial={{
                opacity: 0,
                y: 10,
                }}
                whileInView={{
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
            
            <div id="right-intro" className="flex-1 flex flex-col justify-center px-6  ">
                <div className="mx-auto max-w-4xl px-4">
                <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-6"
            >
                <h1 className="relative z-10 mx-auto my-4 max-w-4xl text-center md:text-left text-3xl font-bold text-[#FCF5EB] md:text-6xl lg:text-8xl leading-tight">
                Intros are cool you know.
                </h1>
                <div className="relative z-10 mx-auto max-w-4xl py-4 text-lg md:text-left md:text-4xl text-[#FCF5EB]">
                    <p className="py-4">
                    Je weet dat social media belangrijk is, maar wie
                    heeft de tijd om elke dag te posten, strategieën
                    uit te denken en trends bij te houden? Ik.</p>
                    <p className="py-4">
                    Als social media manager help ik ondernemers en
                    merken om zichtbaar te worden, volgers om te
                    zetten in klanten en content te creëren die écht
                    werkt. Geen losse posts zonder plan, maar een
                    strategie die jouw business laat groeien
                    </p>
                    <p className="py-4">
                    Meer tijd voor je business, zonder social media
                    stress?
                    </p>
                </div>
                <Link
                    href="/meeting"
                    className="
                        py-4 
                        px-10
                        md:px-16
                        md:text-xl
                        hover:bg-[#efa593]
                        rounded-[6px]
                        border-2 
                        border-[#FCF5EB] 
                        dark:border-[#FCF5EB] 
                        bg-[#ba4b2f] 
                        text-white 
                        transition 
                        duration-200 
                        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
                >
                        Laten we samenwerken
                </Link>
            </motion.div>

                </div>
            </div>

        </div>
    );
}
