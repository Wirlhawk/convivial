import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
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
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[90vh] sm:max-w-3xl [&>button:last-child]:hidden overflow-visible border-0">
                {/* Book-like appearance with layered pages */}
                <div className="relative bg-none">
                    {/* Background layers for book effect */}
                    <div className="absolute inset-0 bg-accent rounded-xl translate-x-[16px] translate-y-[16px] z-0 border-4"></div>
                    {/* <div className="absolute inset-0 bg-green-400 rounded-xl translate-x-[8px] translate-y-[8px] z-0"></div>
                    <div className="absolute inset-0 bg-green-300 rounded-xl translate-x-[4px] translate-y-[4px] z-0"></div> */}
                    
                    {/* Main content */}
                    <div className="relative z-10 bg-white rounded-xl border-4 border-black overflow-hidden">
                        <ScrollArea
                            className="flex max-h-[80vh] flex-col overflow-hidden"
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
                            <header className="px-8 py-8 text-center">
                                <DialogHeader className="">
                                    <DialogTitle className="text-balance text-3xl md:text-4xl font-extrabold uppercase tracking-wide font-bowlby">
                                        {post.title || "THE MAGICAL<br />CAPE WHEEL"}
                                    </DialogTitle>
                                </DialogHeader>
                            </header>

                            {/* Main image */}
                            <div className="border-b-2 border-t-2 ">
                                <img 
                                    src={post.image.url || "/assets/ninjas/1.png"} 
                                    alt={post.title || "Post image"} 
                                    className="w-full h-64 object-cover rounded-md"
                                />
                            </div>

                            <div className="px-10 pt-6 pb-16">
                                <p className="text-pretty leading-relaxed text-foreground/80">
                                    {post.description}
                                </p>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
