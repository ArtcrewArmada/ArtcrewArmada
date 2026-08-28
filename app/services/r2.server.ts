export interface R2UploadResult {
  url: string;
  key: string;
}

/**
 * Helper to upload a file to Cloudflare R2 using native Worker bindings.
 * @param bucket R2Bucket binding from Cloudflare environment context
 * @param key File key (path/filename) in the bucket
 * @param body File content (ArrayBuffer, Blob, Stream, or string)
 * @param options Upload options such as contentType
 */
export async function uploadToR2(
  bucket: any,
  key: string,
  body: any,
  options?: { contentType?: string }
): Promise<R2UploadResult> {
  if (!bucket) {
    throw new Error("R2 Bucket binding is not configured in the Cloudflare environment.");
  }

  await bucket.put(key, body, {
    httpMetadata: {
      contentType: options?.contentType || "application/octet-stream",
    },
  });

  const publicUrl = process.env.CF_R2_PUBLIC_URL || "";
  return {
    url: publicUrl ? `${publicUrl}/${key}` : `/media/${key}`,
    key,
  };
}
