import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface CreateInquiryData {
  name: string;
  company: string;
  emailOrPhone: string;
  inquiryTopic: string;
  message: string;
}

export function useCreateInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateInquiryData) => {
      if (!actor) throw new Error("Actor not available");

      const company = data.company.trim() === "" ? null : data.company;

      const result = await actor.createInquiry(
        data.name,
        company,
        data.emailOrPhone,
        data.inquiryTopic,
        data.message,
      );

      return result;
    },
    onSuccess: () => {
      // Invalidate admin inquiries list if it exists
      queryClient.invalidateQueries({ queryKey: ["adminInquiries"] });
    },
  });
}
