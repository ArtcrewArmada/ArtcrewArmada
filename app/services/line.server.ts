export interface SendLineNotificationParams {
  message: string;
  to?: string; // lineUserId for LINE Messaging API
  notifyToken?: string; // LINE Notify Token if utilizing LINE Notify fallback
}

/**
 * Send a notification to LINE.
 * Supports both LINE Messaging API (Push Message) and LINE Notify (Token-based).
 */
export async function sendLineNotification({
  message,
  to,
  notifyToken,
}: SendLineNotificationParams) {
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN || "";
  const defaultNotifyToken = process.env.LINE_NOTIFY_TOKEN || "";

  // 1. Attempt LINE Messaging API (Push Message) if lineUserId and channelAccessToken are available
  if (to && channelAccessToken) {
    try {
      const response = await fetch("https://api.line.me/v2/bot/message/push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${channelAccessToken}`,
        },
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
  if (activeToken) {
    try {
      const response = await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${activeToken}`,
        },
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
