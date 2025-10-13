import { useQuery } from '@tanstack/react-query';
import { api, type About } from '@/lib/api';

export function useAbout() {
    return useQuery({
        queryKey: ['about'],
        queryFn: () => api.about.getAll(),
        select: (data) => data.data,
    });
}

export function useAboutById(id: number) {
    return useQuery({
        queryKey: ['about', id],
        queryFn: () => api.about.getById(id),
        select: (data) => data.data,
        enabled: !!id,
    });
}
