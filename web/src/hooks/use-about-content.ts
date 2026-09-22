import { useQuery } from '@tanstack/react-query';
import { api, type AboutContent } from '@/lib/api';

export function useAboutContent() {
    return useQuery({
        queryKey: ['aboutContent'],
        queryFn: () => api.aboutContent.getAll(),
        select: (data) => data.data,
    });
}

export function useAboutContentById(id: string) {
    return useQuery({
        queryKey: ['aboutContent', id],
        queryFn: () => api.aboutContent.getById(id),
        select: (data) => data.data,
        enabled: !!id,
    });
}
