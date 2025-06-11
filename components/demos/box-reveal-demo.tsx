"use client";

import {BoxReveal} from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2 text-[#fcf5eb]">
      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        
        <p className="text-3xl font-semibold">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        <h2 className="my-2 text-lg text-[#fcf5eb]">
        Neem contact met mij op via een 
          <Link href={"/meeting"} className="text-[#ba4b2f]">
            {" "}
            meeting{" "}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Samenwerken</p>
      </BoxReveal>

      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        <h2 className="my-2 text-lg text-[#fcf5eb]">
        Bepaal samen de omvang van het project
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Creëren</p>
      </BoxReveal>

      <BoxReveal boxColor={"#ba4b2f"} duration={0.5}>
        <h2 className="my-2 text-lg text-[#fcf5eb]">Laat de uitvoering aan mij over</h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;