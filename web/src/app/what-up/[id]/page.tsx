import PortableTextRenderer from "@/components/sanity/portable-text-renderer";
import { InView } from "@/components/ui/in-view";
import StaggerText from "@/components/ui/stagger-text";
import { api, type About } from "@/lib/api";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;

    try {
        const { data: abouts } = await api.about.getById(id);

        if (!abouts) return notFound();

        return (
            <section className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-7xl mx-auto px-6">
                    <InView>
                        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-xl">
                            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center tracking-wide">
                                <StaggerText className="text-5xl md:text-7xl font-bowlby text-primary text-center px-4">
                                    {abouts.title}
                                </StaggerText>
                            </div>
                            <img
                                src={abouts.image.url || "/background.png"}
                                className="w-full h-full object-cover object-center"
                                alt="Article hero image"
                            />
                        </div>
                    </InView>

                    <div className="max-w-7xl mx-auto mt-10">
                        <InView>
                            {abouts.description && (
                                <div className="mb-8">
                                    <h3 className="text-xl text-muted-foreground font-semibold italic border-l-4 border-primary pl-4 mb-4">
                                        {abouts.description}
                                    </h3>
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6" />
                                </div>
                            )}

                            <div className="prose prose-lg max-w-none">
                                <PortableTextRenderer
                                    content={abouts.content}
                                />
                            </div>
                        </InView>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/what-up"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                            <ChevronLeft />
                            Back to Articles
                        </Link>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        return notFound();
    }
}
