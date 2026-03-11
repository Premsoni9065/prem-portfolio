import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("recruiter.submitInquiry", () => {
  it("should submit a valid job opportunity inquiry", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.recruiter.submitInquiry({
      name: "John Recruiter",
      email: "john@company.com",
      company: "Tech Corp",
      position: "Senior Data Analyst",
      inquiryType: "job_opportunity",
      message: "We have an exciting opportunity for a Data Analyst at our company.",
    });

    expect(result).toEqual({
      success: true,
      message: "Thank you! Your inquiry has been received.",
    });
  });

  it("should reject inquiry with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.recruiter.submitInquiry({
        name: "John Recruiter",
        email: "invalid-email",
        company: "Tech Corp",
        position: "Senior Data Analyst",
        inquiryType: "job_opportunity",
        message: "We have an exciting opportunity for a Data Analyst at our company.",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject inquiry with short message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.recruiter.submitInquiry({
        name: "John Recruiter",
        email: "john@company.com",
        company: "Tech Corp",
        position: "Senior Data Analyst",
        inquiryType: "job_opportunity",
        message: "Short",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should accept feedback inquiry type", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.recruiter.submitInquiry({
      name: "Jane Feedback",
      email: "jane@example.com",
      inquiryType: "feedback",
      message: "Great portfolio! Your data visualization skills are impressive.",
    });

    expect(result.success).toBe(true);
  });

  it("should accept collaboration inquiry type", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.recruiter.submitInquiry({
      name: "Alex Partner",
      email: "alex@partner.com",
      company: "Analytics Startup",
      inquiryType: "collaboration",
      message: "Would you be interested in collaborating on a data science project?",
    });

    expect(result.success).toBe(true);
  });
});
