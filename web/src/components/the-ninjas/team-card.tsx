import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

interface TeamCardProps {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
}

export default function TeamCard({ name, role, avatar, bio }: TeamCardProps) {
    return (
        <div className="relative w-full mx-auto mb-5 h-fit">
            <div
                className={cn(
                    "absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-3 border-black shadow-sm bg-accent"
                )}
            />

            {/* main card */}
            <Card className="relative border-3 border-black rounded-2xl gap-2">
                <CardHeader className="pb-2">
                    <div className="flex justify-center">
                        <Image
                            src={avatar}
                            width={200}
                            height={200}
                            alt={`${name} - ${role}`}
                            className="w-40 h-40 object-cover aspect-square rounded-full border-2 border-black"
                        />
                    </div>
                </CardHeader>
                <CardContent className="text-base leading-relaxed text-center">
                    <h2 className="font-bowlby text-2xl mb-1">{name}</h2>
                    <p className="text-lg font-medium text-gray-600 mb-3">{role}</p>
                    {bio && (
                        <p className="text-sm">
                            {bio}
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
