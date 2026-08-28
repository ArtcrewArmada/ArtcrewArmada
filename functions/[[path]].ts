import { createPagesFunctionHandler } from "@react-router/cloudflare";

// @ts-ignore - The build artifacts will be generated in CI during the build phase
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({ build });
