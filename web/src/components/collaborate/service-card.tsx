import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function ({
    title,
    description,
    image,
    backgroundColor,
}: {
    title: string;
    description: string;
    image: string;
    backgroundColor?: string;
}) {
    return (
        <div className="relative w-md md:w-sm mx-auto mb-5 h-full">
            {/* bottom "shadow card" */}
            <div
                className={cn(
                    "absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-3 border-black shadow-sm bg-accent",
                    backgroundColor
                )}
            />

            {/* main card */}
            <Card className="relative border-3 border-black rounded-2xl gap-2 h-full">
                <CardHeader>
                    <img
                        src={image}
                        width={300}
                        height={300}
                        alt="test"
                        className="bg-primary w-full aspect-square rounded-xl border-2 object-cover"
                    />
                </CardHeader>
                <CardContent className="text-base leading-relaxed flex flex-col">
                    <h1 className="font-bowlby text-2xl mb-2">{title}</h1>
                    <p className="break-words">{description}</p>
                </CardContent>
            </Card>
        </div>
    );
}
