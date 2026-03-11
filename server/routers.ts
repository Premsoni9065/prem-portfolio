import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createRecruiterInquiry, getRecruiterInquiries } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  recruiter: router({
    submitInquiry: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email"),
        company: z.string().optional(),
        position: z.string().optional(),
        inquiryType: z.enum(["job_opportunity", "feedback", "collaboration", "other"]),
        message: z.string().min(10, "Message must be at least 10 characters"),
      }))
      .mutation(async ({ input }) => {
        try {
          await createRecruiterInquiry({
            name: input.name,
            email: input.email,
            company: input.company || null,
            position: input.position || null,
            inquiryType: input.inquiryType,
            message: input.message,
            status: "new",
          });

          // Notify owner about new inquiry
          await notifyOwner({
            title: `New ${input.inquiryType.replace(/_/g, " ")} from ${input.name}`,
            content: `${input.name} from ${input.company || "Unknown Company"} sent a message about ${input.position || "a position"}. Email: ${input.email}\n\nMessage: ${input.message}`,
          });

          return { success: true, message: "Thank you! Your inquiry has been received." };
        } catch (error) {
          console.error("Failed to submit inquiry:", error);
          throw new Error("Failed to submit inquiry. Please try again.");
        }
      }),

    getInquiries: publicProcedure.query(async () => {
      try {
        const inquiries = await getRecruiterInquiries();
        return inquiries;
      } catch (error) {
        console.error("Failed to fetch inquiries:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
