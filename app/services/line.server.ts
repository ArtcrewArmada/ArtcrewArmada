export interface SendLineNotificationParams {
  message: string;
  to?: string; // lineUserId for LINE Messaging API
  notifyToken?: string; // LINE Notify Token if utilizing LINE Notify fallback
}

/**
 * Send a notification to LINE.
 * Supports both LINE Messaging API (Push Message) and LINE Notify (Token-based).
 * Routes through the Edge Proxy if EDGE_PROXY_URL is configured.
 */
export async function sendLineNotification(
  { message, to, notifyToken }: SendLineNotificationParams,
  env?: any
) {
  const edgeProxyUrl = env?.EDGE_PROXY_URL || process?.env?.EDGE_PROXY_URL || "";
  
  const messagingUrl = edgeProxyUrl 
    ? `${edgeProxyUrl}/line-messaging/v2/bot/message/push` 
    : "https://api.line.me/v2/bot/message/push";
    
  const notifyUrl = edgeProxyUrl 
    ? `${edgeProxyUrl}/line-notify/api/notify` 
    : "https://notify-api.line.me/api/notify";

  const channelAccessToken = env?.LINE_CHANNEL_ACCESS_TOKEN || process?.env?.LINE_CHANNEL_ACCESS_TOKEN || "";
  const defaultNotifyToken = env?.LINE_NOTIFY_TOKEN || process?.env?.LINE_NOTIFY_TOKEN || "";

  // 1. Attempt LINE Messaging API (Push Message) if lineUserId and channelAccessToken are available
  if (to && (channelAccessToken || edgeProxyUrl)) {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      
      if (channelAccessToken) {
        headers["Authorization"] = `Bearer ${channelAccessToken}`;
      }

      const response = await fetch(messagingUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          to,
          messages: [
            {
              type: "text",
              text: message,
            },
          ],
        }),
      });

      if (response.ok) {
        return { success: true, method: "messaging-api" };
      }
      
      const errText = await response.text();
      console.warn(`LINE Messaging API error details: ${errText}`);
    } catch (error: any) {
      console.error("LINE Messaging API failed, attempting fallback:", error.message);
    }
  }

  // 2. Attempt LINE Notify as a fallback or default notification channel
  const activeToken = notifyToken || defaultNotifyToken;
  if (activeToken || edgeProxyUrl) {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      
      if (activeToken) {
        headers["Authorization"] = `Bearer ${activeToken}`;
      }

      const response = await fetch(notifyUrl, {
        method: "POST",
        headers,
        body: new URLSearchParams({ message }),
      });

      if (response.ok) {
        return { success: true, method: "line-notify" };
      }
      
      const errText = await response.text();
      console.warn(`LINE Notify error details: ${errText}`);
    } catch (error: any) {
      console.error("LINE Notify failed:", error.message);
    }
  }

  // 3. Log the notification if no credentials are configured
  console.warn("Warning: LINE notification credentials are not configured. Notification will be logged.");
  console.log(`[LINE NOTIFICATION MOCK] Message: ${message}`);
  return { success: false, method: "mock" };
}

