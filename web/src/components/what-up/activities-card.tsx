import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

export default function ActivitiesCard({
    title,
    description,
    color,
}: {
    title: string;
    description: string;
    color: string;
}) {
    return (
        <div className="relative max-w-xl mx-auto mb-5">
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
        </div>
    );
}
