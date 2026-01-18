import { useQuery } from '@tanstack/react-query';
import { api, type Team } from '@/lib/api';

export function useTeam() {
    return useQuery({
        queryKey: ['team'],
        queryFn: () => api.team.getAll(),
        select: (data) => data.data,
    });
}

export function useTeamMember(id: string) {
    return useQuery({
        queryKey: ['team', id],
        queryFn: () => api.team.getById(id),
        select: (data) => data.data,
        enabled: !!id,
    });
}
