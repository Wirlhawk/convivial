import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import CollabFormDialog from "./collab-form-dialog";

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
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="relative w-md md:w-sm mx-auto mb-5 h-full">
            {/* Collaboration dialog */}
            <CollabFormDialog 
                open={dialogOpen} 
                onOpenChange={setDialogOpen} 
                serviceTitle={title} 
            />

            {/* bottom "shadow card" */}
            <div
                className={cn(
                    "absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-3 border-black shadow-sm bg-accent",
                    backgroundColor
                )}
            />

            {/* main card */}
            <Card className="relative border-3 border-black rounded-2xl gap-2 h-full flex flex-col">
                <CardHeader>
                    <img
                        src={image}
                        width={300}
                        height={300}
                        alt="test"
                        className="bg-primary w-full aspect-square rounded-xl border-2 object-cover"
                    />
                </CardHeader>
                <CardContent className="text-base leading-relaxed flex flex-col flex-grow">
                    <h1 className="font-bowlby text-2xl mb-2 text-stroke text-red-400 ">{title}</h1>
                    <p className="break-words">{description}</p>
                </CardContent>
                <CardFooter className="pt-2">
                    <Button 
                        onClick={() => setDialogOpen(true)}
                        className="w-full font-bowlby text-lg tracking-wide py-5"
                        variant="default"
                    >
                        Reach Us Here
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
