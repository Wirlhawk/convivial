"use client";
import {
    BlocksRenderer,
    type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
    content,
}: {
    readonly content: BlocksContent;
}) {
    if (!content) return null;``
    return (
        <BlocksRenderer
            content={content}
            blocks={{
                heading: ({ children, level }) => {
                    switch (level) {
                        case 1:
                            return (
                                <h1 className="text-2xl font-extrabold leading-tight text-neutral-900">
                                    {children}
                                </h1>
                            );
                        case 2:
                            return (
                                <h2 className="text-xl font-bold leading-tight text-neutral-900">
                                    {children}
                                </h2>
                            );
                        case 3:
                            return (
                                <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                                    {children}
                                </h3>
                            );
                        default:
                            return (
                                <h3 className="text-md font-semibold text-neutral-900">
                                    {children}
                                </h3>
                            );
                    }
                    },
                    paragraph: ({ children }) => (
                    <p className="text-neutral-900">{children}</p>
                ),
            }}
        />
    );
}
