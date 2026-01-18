import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

// Sanity client configuration
// TODO: Replace with your Sanity project ID
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v43ac59k',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-18',
    useCdn: true, // Use CDN for faster reads (set to false for real-time data)
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Type definitions matching Strapi structure for compatibility
export interface Post {
    _id: string;
    id: string; // Mapped from _id for compatibility
    title: string;
    description: string;
    image: { url: string | null };
}

export interface Service {
    _id: string;
    id: string;
    title: string;
    description: string;
    image: { url: string | null };
}

export interface Team {
    _id: string;
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: { url: string | null };
    sortOrder?: number;
}

export interface About {
    _id: string;
    documentId: string; // Mapped from _id for compatibility
    title: string;
    description: string;
    image: { url: string | null };
    content: any[]; // Portable Text content
    createdAt: string;
}

// Raw Sanity response types
interface SanityPost {
    _id: string;
    title: string;
    description: string;
    image?: { asset: { _ref: string } };
}

interface SanityService {
    _id: string;
    title: string;
    description: string;
    image?: { asset: { _ref: string } };
}

interface SanityTeam {
    _id: string;
    name: string;
    role: string;
    bio: string;
    avatar?: { asset: { _ref: string } };
    sortOrder?: number;
}

interface SanityAbout {
    _id: string;
    title: string;
    description: string;
    image?: { asset: { _ref: string } };
    content?: any[];
    _createdAt: string;
}

// Transform Sanity image to url format
function transformImage(image?: { asset: { _ref: string } }): { url: string | null } {
    if (!image?.asset?._ref) {
        return { url: null };
    }
    return { url: urlFor(image).url() };
}

// GROQ Queries
const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image
}`;

const POST_BY_ID_QUERY = `*[_type == "post" && _id == $id][0] {
    _id,
    title,
    description,
    image
}`;

const SERVICES_QUERY = `*[_type == "service"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image
}`;

const SERVICE_BY_ID_QUERY = `*[_type == "service" && _id == $id][0] {
    _id,
    title,
    description,
    image
}`;

const TEAMS_QUERY = `*[_type == "team"] | order(sortOrder asc, _createdAt desc) {
    _id,
    name,
    role,
    bio,
    avatar,
    sortOrder
}`;

const TEAM_BY_ID_QUERY = `*[_type == "team" && _id == $id][0] {
    _id,
    name,
    role,
    bio,
    avatar,
    sortOrder
}`;

const ABOUTS_QUERY = `*[_type == "about"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    content,
    _createdAt
}`;

const ABOUT_BY_ID_QUERY = `*[_type == "about" && _id == $id][0] {
    _id,
    title,
    description,
    image,
    content,
    _createdAt
}`;

// API response wrapper to match Strapi format
export interface ApiResponse<T> {
    data: T;
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// API functions - maintaining same interface as Strapi
export const api = {
    posts: {
        getAll: async (): Promise<ApiResponse<Post[]>> => {
            const posts = await client.fetch<SanityPost[]>(POSTS_QUERY);
            console.log('Sanity raw posts:', posts);
            return {
                data: posts.map((post) => ({
                    _id: post._id,
                    id: post._id,
                    title: post.title,
                    description: post.description,
                    image: transformImage(post.image),
                })),
            };
        },
        getById: async (id: string): Promise<ApiResponse<Post>> => {
            const post = await client.fetch<SanityPost>(POST_BY_ID_QUERY, { id });
            return {
                data: {
                    _id: post._id,
                    id: post._id,
                    title: post.title,
                    description: post.description,
                    image: transformImage(post.image),
                },
            };
        },
    },
    services: {
        getAll: async (): Promise<ApiResponse<Service[]>> => {
            const services = await client.fetch<SanityService[]>(SERVICES_QUERY);
            return {
                data: services.map((service) => ({
                    _id: service._id,
                    id: service._id,
                    title: service.title,
                    description: service.description,
                    image: transformImage(service.image),
                })),
            };
        },
        getById: async (id: string): Promise<ApiResponse<Service>> => {
            const service = await client.fetch<SanityService>(SERVICE_BY_ID_QUERY, { id });
            return {
                data: {
                    _id: service._id,
                    id: service._id,
                    title: service.title,
                    description: service.description,
                    image: transformImage(service.image),
                },
            };
        },
    },
    team: {
        getAll: async (): Promise<ApiResponse<Team[]>> => {
            const teams = await client.fetch<SanityTeam[]>(TEAMS_QUERY);
            return {
                data: teams.map((team) => ({
                    _id: team._id,
                    id: team._id,
                    name: team.name,
                    role: team.role,
                    bio: team.bio,
                    avatar: transformImage(team.avatar),
                    sortOrder: team.sortOrder,
                })),
            };
        },
        getById: async (id: string): Promise<ApiResponse<Team>> => {
            const team = await client.fetch<SanityTeam>(TEAM_BY_ID_QUERY, { id });
            return {
                data: {
                    _id: team._id,
                    id: team._id,
                    name: team.name,
                    role: team.role,
                    bio: team.bio,
                    avatar: transformImage(team.avatar),
                    sortOrder: team.sortOrder,
                },
            };
        },
    },
    about: {
        getAll: async (): Promise<ApiResponse<About[]>> => {
            const abouts = await client.fetch<SanityAbout[]>(ABOUTS_QUERY);
            return {
                data: abouts.map((about) => ({
                    _id: about._id,
                    documentId: about._id,
                    title: about.title,
                    description: about.description,
                    image: transformImage(about.image),
                    content: about.content || [],
                    createdAt: about._createdAt,
                })),
            };
        },
        getById: async (id: string): Promise<ApiResponse<About>> => {
            const about = await client.fetch<SanityAbout>(ABOUT_BY_ID_QUERY, { id });
            return {
                data: {
                    _id: about._id,
                    documentId: about._id,
                    title: about.title,
                    description: about.description,
                    image: transformImage(about.image),
                    content: about.content || [],
                    createdAt: about._createdAt,
                },
            };
        },
    },
};
