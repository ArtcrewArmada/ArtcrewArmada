export interface Env {
  SUPABASE_URL: string;
  RESEND_API_URL: string;
  LINE_API_URL: string;
  LINE_NOTIFY_API_URL: string;
  ALLOWED_ORIGINS: string;
  
  // Secrets (Inject in Cloudflare Dashboard or Wrangler Secrets)
  SUPABASE_SERVICE_ROLE_KEY?: string;
  RESEND_API_KEY?: string;
  LINE_CHANNEL_ACCESS_TOKEN?: string;
  LINE_NOTIFY_TOKEN?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    
    // 1. Manage CORS Setup
    const allowedOrigins = env.ALLOWED_ORIGINS.split(",");
    const isAllowedOrigin = allowedOrigins.includes(origin);
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": isAllowedOrigin ? origin : allowedOrigins[0],
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey, x-client-info",
      "Access-Control-Allow-Credentials": "true",
    };

    // Handle Preflight OPTIONS request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    try {
      // 2. Routing Proxy Logic
      
      // A. Supabase Proxy Endpoint
      if (url.pathname.startsWith("/supabase/")) {
        const targetPath = url.pathname.replace(/^\/supabase/, "");
        const targetUrl = `${env.SUPABASE_URL}${targetPath}${url.search}`;
        
        // Clone headers and inject Service Role Key safely at the Edge
        const headers = new Headers(request.headers);
        const apiKey = env.SUPABASE_SERVICE_ROLE_KEY || headers.get("apikey") || "";
        
        headers.set("apikey", apiKey);
        headers.set("Authorization", `Bearer ${apiKey}`);
        
        // Remove origin to bypass CORS issues on Supabase side
        headers.delete("Origin");

        const response = await fetch(targetUrl, {
          method: request.method,
          headers: headers,
          body: request.method !== "GET" && request.method !== "HEAD" ? await request.clone().arrayBuffer() : null,
        });

        // Return clean response with our CORS headers
        const newResponse = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
        return newResponse;
      }

      // B. Resend Email Proxy Endpoint
      if (url.pathname.startsWith("/resend/")) {
        const targetPath = url.pathname.replace(/^\/resend/, "");
        const targetUrl = `${env.RESEND_API_URL}${targetPath}${url.search}`;
        
        const headers = new Headers(request.headers);
        if (env.RESEND_API_KEY) {
          headers.set("Authorization", `Bearer ${env.RESEND_API_KEY}`);
        }
        headers.delete("Origin");
        headers.set("Host", "api.resend.com");

        const response = await fetch(targetUrl, {
          method: request.method,
          headers: headers,
          body: request.method !== "GET" && request.method !== "HEAD" ? await request.clone().arrayBuffer() : null,
        });

        const newResponse = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
        return newResponse;
      }

      // C. LINE Notify Proxy Endpoint
      if (url.pathname.startsWith("/line-notify/")) {
        const targetPath = url.pathname.replace(/^\/line-notify/, "");
        const targetUrl = `${env.LINE_NOTIFY_API_URL}${targetPath}${url.search}`;
        
        const headers = new Headers(request.headers);
        const token = env.LINE_NOTIFY_TOKEN || "";
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        headers.delete("Origin");

        const response = await fetch(targetUrl, {
          method: request.method,
          headers: headers,
          body: request.method !== "GET" && request.method !== "HEAD" ? await request.clone().arrayBuffer() : null,
        });

        const newResponse = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
        return newResponse;
      }

      // D. LINE Messaging API Proxy Endpoint
      if (url.pathname.startsWith("/line-messaging/")) {
        const targetPath = url.pathname.replace(/^\/line-messaging/, "");
        const targetUrl = `${env.LINE_API_URL}${targetPath}${url.search}`;
        
        const headers = new Headers(request.headers);
        const channelToken = env.LINE_CHANNEL_ACCESS_TOKEN || "";
        if (channelToken) {
          headers.set("Authorization", `Bearer ${channelToken}`);
        }
        headers.delete("Origin");

        const response = await fetch(targetUrl, {
          method: request.method,
          headers: headers,
          body: request.method !== "GET" && request.method !== "HEAD" ? await request.clone().arrayBuffer() : null,
        });

        const newResponse = new Response(response.body, response);
        Object.entries(corsHeaders).forEach(([k, v]) => newResponse.headers.set(k, v));
        return newResponse;
      }

      // Default Response for non-matched routes
      return new Response("Artcrew Armada Edge Proxy Gateway", {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
          ...corsHeaders,
        },
      });
      
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }
  },
};
