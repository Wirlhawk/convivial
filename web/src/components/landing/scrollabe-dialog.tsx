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
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-xl [&>button:last-child]:hidden">
                <ScrollArea
                    className="flex max-h-full flex-col overflow-hidden"
                    onWheel={(e) => {
                        const el = e.currentTarget;
                        const atTop = el.scrollTop === 0;
                        const atBottom =
                            el.scrollHeight - el.scrollTop === el.clientHeight;

                        if (
                            (e.deltaY < 0 && atTop) || // trying to scroll up but already at top
                            (e.deltaY > 0 && atBottom) // trying to scroll down but already at bottom
                        ) {
                            e.preventDefault();
                        }
                    }}
                >
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
