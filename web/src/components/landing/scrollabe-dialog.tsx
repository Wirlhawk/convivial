import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Post } from "@/lib/api";

interface ScrollableDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    post: Post;
}

export default function ScrollableDialog({
    open,
    onOpenChange,
    post,
}: ScrollableDialogProps) {
    if (!post) return null;
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
                <ScrollArea className="flex max-h-full flex-col overflow-hidden">
                    <header className="px-8 pt-10 pb-4 text-center">
                        <DialogHeader className="p-0">
                            <DialogTitle className="text-balance text-3xl md:text-4xl font-extrabold uppercase tracking-wide font-bowlby">
                                {post.title}
                            </DialogTitle>
                        </DialogHeader>
                    </header>

                    <figure className="w-full border-b-[3px] border-t-[3px] border-foreground bg-accent">
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
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
