import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface SendEmailParams {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

/**
 * Send an email using Resend API.
 */
export async function sendEmail({ to, subject, html, from }: SendEmailParams) {
  if (!resend) {
    console.warn("Warning: RESEND_API_KEY is not defined. Email sending will be logged instead.");
    console.log(`[EMAIL SEND MOCK] To: ${to}, Subject: ${subject}`);
    return { id: "mock-email-id", success: true };
  }

  const defaultFrom = "ARTcrew ARMADA <no-reply@artcrewarmada.com>";
  const response = await resend.emails.send({
    from: from || defaultFrom,
    to,
    subject,
    html,
  });

  if (response.error) {
    throw new Error(`Failed to send email: ${response.error.message}`);
  }

  return { id: response.data?.id, success: true };
}
