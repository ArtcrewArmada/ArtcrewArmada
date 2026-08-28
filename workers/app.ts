import { createRequestHandler } from "react-router";

// @ts-ignore - Import the compiled server build metadata directly to avoid Vite virtual-module resolution errors in Wrangler
import * as build from "../build/server/index.js";

const handler = createRequestHandler(build);

export default {
  async fetch(request, env, ctx) {
    return handler(request, { env, ctx });
  },
};
