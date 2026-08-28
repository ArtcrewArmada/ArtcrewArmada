import { createPagesFunctionHandler } from "@react-router/cloudflare";
import { RouterContextProvider } from "react-router";

// @ts-ignore - The build artifacts will be generated in CI during the build phase
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: () => new RouterContextProvider(),
});
