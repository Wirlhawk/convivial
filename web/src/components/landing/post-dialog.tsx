"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "@/lib/api";
import { ScrollArea } from "../ui/scroll-area";

interface PostDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    post: Post;
}

export default function PostDialog({
    open,
    onOpenChange,
    post,
}: PostDialogProps) {
    if (!post) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="p-0 border-0 bg-transparent shadow-none outline-none ">
                <div className="relative mx-auto w-[min(92vw,520px)]">
                    {/* Back stack layers */}
                    <div
                        aria-hidden
                        className="absolute inset-0 translate-x-6 translate-y-2 rounded-[28px] border-[3px] border-foreground shadow-[0_6px_0_0_var(--color-foreground)] -z-10"
                        style={{ backgroundColor: "var(--color-chart-4)" }}
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 translate-x-3 translate-y-1 rounded-[26px] border-[3px] border-foreground shadow-[0_6px_0_0_var(--color-foreground)] -z-10"
                        style={{ backgroundColor: "var(--color-chart-4)" }}
                    />

                    {/* Foreground card */}
                    <ScrollArea className="flex max-h-full flex-col overflow-hidden">
                        <article className="relative rounded-[24px] border-[3px] border-foreground bg-card text-card-foreground shadow-[0_6px_0_0_var(--color-foreground)] overflow-hidden">
                            <header className="px-8 pt-10 pb-4 text-center">
                                <DialogHeader className="p-0">
                                    <DialogTitle className="text-balance text-3xl md:text-4xl font-extrabold uppercase tracking-wide font-bowlby">
                                        {post.title}
                                    </DialogTitle>
                                </DialogHeader>
                            </header>

                            {/* Full-width hero image between header and body */}
                            <figure className="w-full border-b-[3px] border-foreground">
                                <img
                                    src={post.image.url!}
                                    alt={`${post.title} image`}
                                    className="block w-full h-44 object-cover"
                                />
                            </figure>

                            <div className="px-10 pt-6 pb-16">
                                <p className="text-pretty leading-relaxed text-foreground/80">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
}
