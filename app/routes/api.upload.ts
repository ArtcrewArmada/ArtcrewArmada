import { type ActionFunctionArgs } from "react-router";
import { uploadToR2 } from "~/services/r2.server";

/**
 * API Endpoint for handling direct file uploads to Cloudflare R2.
 */
export async function action({ request, context }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Obtain Cloudflare Pages / Workers environment context
  const cloudflareEnv = (context as any).cloudflare?.env;
  const bucket = cloudflareEnv?.R2_BUCKET || cloudflareEnv?.MEDIA_BUCKET;

  if (!bucket) {
    return Response.json(
      { error: "R2 bucket binding is not configured in Cloudflare environment context." },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file || !(file instanceof File)) {
      return Response.json({ error: "No valid file provided." }, { status: 400 });
    }

    const uniqueId = crypto.randomUUID();
    const extension = file.name.split(".").pop() || "bin";
    const key = `media/${uniqueId}.${extension}`;

    // Convert file to ArrayBuffer for R2 binding transfer
    const arrayBuffer = await file.arrayBuffer();

    const uploadResult = await uploadToR2(bucket, key, arrayBuffer, {
      contentType: file.type,
    });

    return Response.json({
      success: true,
      url: uploadResult.url,
      key: uploadResult.key,
    });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
