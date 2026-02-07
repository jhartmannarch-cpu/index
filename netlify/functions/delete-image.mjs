import { getStore } from "@netlify/blobs";

async function getImageStore() {
  return getStore({ name: "images", consistency: "strong" });
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const body = await req.json();
  const { code, index } = body;

  if (!code) {
    return Response.json({ error: "Missing product code" }, { status: 400 });
  }

  const store = await getImageStore();

  // Delete all images
  if (index === undefined || index === null || index === "all") {
    await store.delete(`imgs-${code}`);
    return Response.json({ images: [], count: 0 });
  }

  // Delete single image by index
  const images = await store.get(`imgs-${code}`, { type: "json" }) || [];
  if (index >= 0 && index < images.length) {
    images.splice(index, 1);
    if (images.length === 0) {
      await store.delete(`imgs-${code}`);
    } else {
      await store.setJSON(`imgs-${code}`, images);
    }
  }

  return Response.json({ images, count: images.length });
};

export const config = {
  path: "/api/delete-image"
};
