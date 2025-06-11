'use client'

import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const checkItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

const Meeting =  () => {
    return ( <div 
            className="overflow-clip 
            top-0 
            z-[-2] 
            h-full 
            w-full 
            bg-[#efa593] 
            bg-[radial-gradient(100%_50%_at_50%_0%,
                rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
            >
        <ShowcaseNavbar />
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto justify-between md:mt-14 pt-24 md:flex">
            <div className="md:w-2/5">
                <h1 className="text-4xl font-semibold text-[#ba4b2f] pt-10">Let&apos;s Meet</h1>
                <p className="text-lg text-[#FCF5EB] py-4">
                    Ik kijk ernaar uit om je te ontmoeten en te bespreken hoe we kunnen samenwerken om jouw doelen te bereiken. Voel je vrij om een tijd te kiezen die voor jou het beste past via de Calendly-widget hieronder. Als je vragen hebt of hulp nodig hebt, aarzel dan niet om contact op te nemen.
                </p>
                {[
                {
                  title: "Social Media Strategy + Content Creation",
                  description:
                    "Breng je merk tot leven online met boeiende content en slimme socialmediastrategieën.",
                },

                {
                  title: "Free Consultation",
                  description:
                    "Krijg deskundig advies over hoe je jouw bedrijf kunt verbeteren en je online zichtbaarheid kunt vergroten.",
                },
                {
                  title: "Social Media Support",
                  description:
                    "Krijg hulp bij het beheren en optimaliseren van je sociale mediakanalen voor maximale impact.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-[#ba4b2f]">
                      {item.title}
                    </h3>
                    <div className="text-[#FCF5EB]">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="w-1/2">
                <Calendly />
            </div>

        </div>
              <Footer className="bg-[#ba4b2f]"/>
    </div>);
}

export default Meeting;
