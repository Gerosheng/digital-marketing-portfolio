import ProjectGrid from "@/components/card-grid-hover-reveal";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { FlipTextDemo } from "@/components/demos/flip-text-demo";
import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
    return (     <div className="overflow-clip top-0 z-[-2] h-full w-full bg-[#FCF5EB] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(68, 161, 110, 0.13)_0,rgba(68, 161, 110, 0)_50%,rgba(68, 161, 110, 0)_100%)]">
        <ShowcaseNavbar />
        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto md:mt-14 pt-24">
            <div className="flex items-center justify-center relative">
                <FlipTextDemo />
            </div>
            <p className="items-center justify-center md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
                Neem een kijkje naar enkele van mijn recente projecten.
            </p>
            <ProjectGrid />
            <BlurFadeDemo />

            <LetsMakeThingsHappenSection />

        </section>

        <Footer />
        
    </div>);
}

export default Showcase;