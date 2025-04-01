import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { FlipTextDemo } from "@/components/demos/flip-text-demo";
import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
    return (     <div className="overflow-clip top-0 z-[-2] h-full w-full bg-[#fafafa] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <ShowcaseNavbar />
        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto md:mt-14">
            <div className="flex items-center justify-center relative">
                <FlipTextDemo />
            </div>
            <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx auto text-gray-500">
                Have a look at some of my recent projects.
            </p>
           
            <BlurFadeDemo />

            <LetsMakeThingsHappenSection />

        </section>

        <Footer />
        
    </div>);
}

export default Showcase;