import About from "@/components/landing/about";
import CurveText from "@/components/landing/curve-text";
import EventList from "@/components/landing/event-list";
import Hero from "@/components/landing/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <CurveText />
            <EventList/>
        </>
    );
}
