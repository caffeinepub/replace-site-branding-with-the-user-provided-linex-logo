import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useIsCallerAdmin() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isCallerAdmin();
      } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
      }
    },
    enabled: !!actor && !actorFetching,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
