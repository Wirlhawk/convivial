import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ({}: {}) {
    return (
        <div className="relative max-w-sm mx-auto mb-5 h-fit">
            {/* bottom "shadow card" */}
            <div
                className={cn(
                    "absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-3 border-black shadow-sm bg-accent"
                )}
            />

            {/* main card */}
            <Card className="relative border-3 border-black rounded-2xl gap-2">
                <CardHeader>
                    <Image src="/assets/ninjas/1.png" width={300} height={300} alt="test" className="bg-red-500 w-full aspect-square rounded-xl border-2"/>
                </CardHeader>
                <CardContent className="text-base leading-relaxed">
                    <h1 className="font-bowlby text-2xl mb-2">Service Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum dolorem eveniet obcaecati velit magni adipisci
                        deleniti ex ipsam nihil! Mollitia, enim. Autem maxime a
                        laborum dolorem nulla aspernatur expedita nemo!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
