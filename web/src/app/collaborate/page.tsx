import Hero from "@/components/collaborate/hero";
import Services from "@/components/collaborate/services";

export default function page() {
    return (
        <div className="relative">
            <img
                src="/assets/collaborate/ninja.png"
                alt=""
                className="sticky max-w-96 left-1/2 -translate-x-1/2 top-0  z-0 max-md:hidden"
            />
            <Hero />
            <Services />
        </div>
    );
}
