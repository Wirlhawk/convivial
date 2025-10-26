import BlockRendererClient from "@/components/strapi/block-renderer-client";
import { About, API_BASE_URL } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;

    const res = await fetch(
        `https://glowing-success-07d5a5fc8d.strapiapp.com/api/abouts/${id}?populate=*`
    );

    if (!res.ok) return notFound();

    const { data: abouts } = (await res.json()) as { data: About };

    if (!abouts) return notFound();

    return (
        <section className="min-h-screen py-20 max-w-7xl mx-auto px-6">
            <img
                src="/background.png"
                className="border-2 rounded-lg md:max-w-2xl mx-auto w-full mb-10"
                alt="Background"
            />

            <div className="mx-auto w-fit">
                <header className="mb-5">
                    <h1 className="text-6xl font-bowlby leading-tight text-primary">
                        {abouts.title}
                    </h1>
                    {/* <h3 className="text-muted-foreground text-xl max-w-prose font-semibold">
            {abouts.description}
          </h3> */}
                </header>

                <BlockRendererClient content={abouts.content} />
            </div>
        </section>
    );
}
