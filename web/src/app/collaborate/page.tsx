import Hero from "@/components/collaborate/hero";
import ServiceCard from "@/components/collaborate/service-card";
import Services from "@/components/collaborate/services";
import React from "react";

export default function page() {
    return (
        <div className=" relative">
            <img
                src="/assets/collaborate/ninja.png"
                alt=""
                className="sticky max-w-96 left-1/2 -translate-x-1/2 top-0  z-0 max-md:hidden"
            />
            <Hero/>
            <Services/>
        </div>
    );
}
