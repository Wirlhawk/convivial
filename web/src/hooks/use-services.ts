import { useQuery } from '@tanstack/react-query';
import { api, type Service } from '@/lib/api';

export function useServices() {
    return useQuery({
        queryKey: ['services'],
        queryFn: () => api.services.getAll(),
        select: (data) => data.data,
    });
}

export function useService(id: number) {
    return useQuery({
        queryKey: ['services', id],
        queryFn: () => api.services.getById(id),
        select: (data) => data.data,
        enabled: !!id,
    });
}
