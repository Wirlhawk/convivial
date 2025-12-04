import About from "@/components/landing/about";
import CurveText from "@/components/landing/curve-text";
import EventList from "@/components/landing/event-list";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function Home() {
    return (
        <LoadingOverlay>
            <Hero />
            <About />
            <CurveText />
            <EventList />
            <Footer/>
        </LoadingOverlay>
    );
}
