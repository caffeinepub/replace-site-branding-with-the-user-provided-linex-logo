import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Inquiry, InquiryStatus } from "../backend";
import { useActor } from "./useActor";

export function useListInquiries(offset = 0, limit = 50) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ["adminInquiries", offset, limit],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      try {
        return await actor.listInquiries(BigInt(offset), BigInt(limit));
      } catch (error: any) {
        if (error.message?.includes("Unauthorized")) {
          throw new Error("Access denied: admin permissions required");
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useMarkInquiryAsSeen() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      await actor.markInquiryAsSeen(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminInquiries"] });
    },
  });
}

export function useDeleteInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      await actor.deleteInquiry(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminInquiries"] });
    },
  });
}

export function useUpdateInquiryStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: { id: bigint; status: InquiryStatus }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.updateInquiryStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminInquiries"] });
    },
  });
}
