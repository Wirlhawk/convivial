import { Hero } from "@/components/the-ninjas/hero";
import { Teams } from "@/components/the-ninjas/teams";

export default function TheNinjas() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto py-20">
            <Hero />
            <Teams />
        </div>
    );
}
