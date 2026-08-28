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
 * Routes through the Edge Proxy if EDGE_PROXY_URL is configured.
 */
export async function sendEmail(
  { to, subject, html, from }: SendEmailParams,
  env?: any
) {
  const edgeProxyUrl = env?.EDGE_PROXY_URL || process?.env?.EDGE_PROXY_URL || "";
  const defaultFrom = "ARTcrew ARMADA <no-reply@artcrewarmada.com>";

  if (edgeProxyUrl) {
    const targetUrl = `${edgeProxyUrl}/resend/emails`;
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from || defaultFrom,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email via Edge Proxy: ${errorText}`);
    }

    const data = await response.json() as any;
    return { id: data.id, success: true };
  }

  if (!resend) {
    console.warn("Warning: RESEND_API_KEY is not defined. Email sending will be logged instead.");
    console.log(`[EMAIL SEND MOCK] To: ${to}, Subject: ${subject}`);
    return { id: "mock-email-id", success: true };
  }

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

