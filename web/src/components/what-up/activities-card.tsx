import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ActivitiesCard({
    id,
    title,
    description,
    color,
}: {
    id: string;
    title: string;
    description: string;
    color: string;
}) {
    return (
        <Link
            className="relative w-full md:w-xl mx-auto mb-5 h-fit"
            href={`/what-up/${id}`}
        >
            {/* bottom "shadow card" */}
            <div
                className={cn(
                    "absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-3 border-black shadow-sm",
                    color
                )}
            />

            {/* main card */}
            <Card className="relative border-3 border-black rounded-2xl gap-2">
                <CardHeader>
                    <CardTitle className="font-bowlby text-2xl">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-relaxed">
                    {description}
                </CardContent>
            </Card>
        </Link>
    );
}
