import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export function RecruiterFeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    inquiryType: "job_opportunity" as const,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitInquiry = trpc.recruiter.submitInquiry.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitInquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        position: formData.position || undefined,
        inquiryType: formData.inquiryType,
        message: formData.message,
      });

      toast.success(result.message);
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        inquiryType: "job_opportunity",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-8 border-2 border-accent/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              placeholder="Company name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              placeholder="Job position"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Inquiry Type *</label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
          >
            <option value="job_opportunity">Job Opportunity</option>
            <option value="feedback">Feedback</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
            placeholder="Tell me about the opportunity or your feedback..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Inquiry
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
