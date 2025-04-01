'use client'

import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

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
            bg-[#fafafa] 
            bg-[radial-gradient(100%_50%_at_50%_0%,
                rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
            >
        <ShowcaseNavbar />
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto justify-between md:mt-14 md:flex">
            <div className="md:w-2/5">
                <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
                <p className="text-lg text-gray-500 py-4">
                    I am excited to meet you and discuss how we can work together to achieve your goals. Please feel free to book a time that works best for you using the Calendly widget below. If you have any questions or need assistance, don&apos;t hesitate to reach out.
                </p>
                {[
                {
                  title: "Development + Design",
                  description:
                    "Turn your ideas into reality with our development and design services.",
                },

                {
                  title: "Free Consultation",
                  description:
                    "Get expert advice on how to improve your business and increase your online presence.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Get technical support for your website or application.",
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
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="w-1/2">
                <Calendly />
            </div>

        </div>
    </div>);
}

export default Meeting;
