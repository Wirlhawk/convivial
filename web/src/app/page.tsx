import { RevealLinks } from "@/components/flip-link";
import About from "@/components/landing/about";
import CurveText from "@/components/landing/curve-text";
import Hero from "@/components/landing/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <CurveText />
            <RevealLinks/>
            <div className="h-[200vh] bg-red-400">
            </div>
        </>
    );
}
