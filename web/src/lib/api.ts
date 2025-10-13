// API configuration and utility functions

const API_BASE_URL = "https://glowing-success-07d5a5fc8d.strapiapp.com/api" ;

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


export interface Post {
    id: number;
    title: string;
    description: string;
    image: { url: string | null };
}

export interface Service {
    id: number;
    title: string;
    description: string;
    image: { url: string | null };
}

export interface Team {
    id: number;
    name: string;
    role: string;
    bio: string;
    avatar: { url: string | null };
}

export interface About {
    id: number;
    title: string;
    description: string;
    image: { url: string | null };
}


// Generic API fetch function
async function fetchApi<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// API functions
export const api = {
    posts: {
        getAll: () => fetchApi<Post[]>('/posts?populate=*'),
        getById: (id: number) => fetchApi<Post>(`/posts/${id}?populate=*`),
    },
    services: {
        getAll: () => fetchApi<Service[]>('/services?populate=*'),
        getById: (id: number) => fetchApi<Service>(`/services/${id}?populate=*`),
    },
    team: {
        getAll: () => fetchApi<Team[]>('/teams?populate=*'),
        getById: (id: number) => fetchApi<Team>(`/teams/${id}?populate=*`),
    },
    about: {
        getAll: () => fetchApi<About[]>('/abouts?populate=*'),
        getById: (id: number) => fetchApi<About>(`/abouts/${id}?populate=*`),
    },
};
