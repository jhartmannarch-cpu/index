import { getStore } from "@netlify/blobs";

async function getImageStore() {
  return getStore({ name: "images", consistency: "strong" });
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return Response.json({ error: "Missing product code" }, { status: 400 });
  }

  const store = await getImageStore();
  const formData = await req.formData();
  const files = formData.getAll("images");

  if (!files || files.length === 0) {
    return Response.json({ error: "No images provided" }, { status: 400 });
  }

  // Get existing images
  const existing = await store.get(`imgs-${code}`, { type: "json" }) || [];

  // Convert files to base64 data URLs
  const newImages = [];
  for (const file of files) {
    if (file instanceof Blob) {
      const buffer = await file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      const mimeType = file.type || "image/jpeg";
      newImages.push(`data:${mimeType};base64,${base64}`);
    }
  }

  const allImages = [...existing, ...newImages];
  await store.setJSON(`imgs-${code}`, allImages);

  return Response.json({ images: allImages, count: allImages.length });
};

export const config = {
  path: "/api/upload"
};
