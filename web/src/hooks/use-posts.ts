import { useQuery } from '@tanstack/react-query';
import { api, type Post } from '@/lib/api';

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => api.posts.getAll(),
        select: (data) => data.data,
    });
}

export function usePost(id: string) {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: () => api.posts.getById(id),
        select: (data) => data.data,
        enabled: !!id,
    });
}
