"use client";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/api";

// Define components for rendering Portable Text
const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-2xl font-extrabold leading-tight text-neutral-900">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-bold leading-tight text-neutral-900">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="text-neutral-900">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-neutral-700">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => (
            <span className="underline">{children}</span>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <img
                    src={urlFor(value).url()}
                    alt={value.alt || ""}
                    className="my-4 rounded-lg"
                />
            );
        },
    },
};

interface PortableTextRendererProps {
    readonly content: any[];
}

export default function PortableTextRenderer({
    content,
}: PortableTextRendererProps) {
    if (!content || content.length === 0) return null;
    return <PortableText value={content} components={components} />;
}
