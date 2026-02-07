import { getStore } from "@netlify/blobs";

const DEFAULT_PRODUCTS = [
  {c:"00_988",g:"Stapel 1",w:0.85,h:0.89,d:"Geometric medallion, dense field, classic red\u2013blue palette",p:0,sold:false},
  {c:"01_978",g:"Stapel 1",w:0.75,h:0.81,d:"Fine floral pattern, warm red ground with muted blue",p:0,sold:false},
  {c:"02_982",g:"Stapel 1",w:0.68,h:0.80,d:"Small-scale floral motifs, balanced symmetry",p:0,sold:false},
  {c:"03_981",g:"Stapel 1",w:0.86,h:0.90,d:"Central medallion, structured geometric layout",p:0,sold:false},
  {c:"04_992",g:"Stapel 1",w:0.70,h:0.89,d:"Ornamental field, deep red tones",p:0,sold:false},
  {c:"05_960",g:"Stapel 1",w:0.78,h:0.80,d:"Traditional border design, symmetrical composition",p:0,sold:false},
  {c:"06_802",g:"Stapel 1",w:0.95,h:0.65,d:"Calm floral pattern, elongated proportions",p:0,sold:false},
  {c:"07_801",g:"Stapel 1",w:0.95,h:0.65,d:"Symmetrical allover design, restrained ornament",p:0,sold:false},
  {c:"08_957",g:"Stapel 1",w:0.86,h:0.62,d:"Ornamental motifs, horizontal emphasis",p:0,sold:false},
  {c:"09_889",g:"Stapel 1",w:0.79,h:0.55,d:"Compact floral field, red-dominant palette",p:0,sold:false},

  {c:"00_884",g:"Stapel 2",w:1.03,h:0.49,d:"Geometric field, long narrow format",p:0,sold:false},
  {c:"01_844",g:"Stapel 2",w:0.60,h:0.55,d:"Small floral ornaments, dense texture",p:0,sold:false},
  {c:"02_839",g:"Stapel 2",w:0.60,h:0.57,d:"Ornamental layout, balanced proportions",p:0,sold:false},
  {c:"03_964",g:"Stapel 2",w:0.68,h:0.49,d:"Fine repeating motifs, horizontal emphasis",p:0,sold:false},
  {c:"04_857",g:"Stapel 2",w:0.80,h:0.70,d:"Classic composition with central focus",p:0,sold:false},
  {c:"05_843",g:"Stapel 2",w:0.80,h:0.53,d:"Border-dominated design, elongated shape",p:0,sold:false},
  {c:"06_845",g:"Stapel 2",w:0.88,h:0.65,d:"Ornamental pattern, calm color balance",p:0,sold:false},
  {c:"07_976",g:"Stapel 2",w:0.80,h:0.62,d:"Geometric motifs, structured field",p:0,sold:false},
  {c:"08_987",g:"Stapel 2",w:0.74,h:0.63,d:"Ornamental design, even rhythm",p:0,sold:false},
  {c:"09_985",g:"Stapel 2",w:0.67,h:0.80,d:"Allover pattern, square-oriented layout",p:0,sold:false},
  {c:"10_986",g:"Stapel 2",w:0.83,h:0.60,d:"Symmetrical field, restrained ornament",p:0,sold:false},
  {c:"11_855",g:"Stapel 2",w:0.78,h:0.70,d:"Floral elements, classic layout",p:0,sold:false},
  {c:"12_975",g:"Stapel 2",w:0.77,h:0.62,d:"Diamond motifs, central emphasis",p:0,sold:false},
  {c:"13_858",g:"Stapel 2",w:0.85,h:0.67,d:"Dense allover pattern, rich texture",p:0,sold:false},
  {c:"14_846",g:"Stapel 2",w:0.78,h:0.70,d:"Traditional design, balanced symmetry",p:0,sold:false},

  {c:"31_499",g:"Gabbeh",w:1.44,h:1.12,d:"Reduced gabbeh design, earthy red tone",p:0,sold:false},
  {c:"580",g:"Gabbeh",w:1.85,h:1.13,d:"Minimalist field, soft red\u2013orange palette",p:0,sold:false},
  {c:"588",g:"Gabbeh",w:2.14,h:1.15,d:"Calm composition, warm orange-red tones",p:0,sold:false},
  {c:"590",g:"Gabbeh",w:2.05,h:1.15,d:"Graphic stripes, red, orange and brown",p:0,sold:false},
  {c:"591",g:"Gabbeh",w:1.95,h:1.12,d:"Harmonious color field, muted red",p:0,sold:false},
  {c:"592",g:"Gabbeh",w:1.92,h:1.16,d:"Symmetrical gabbeh layout, warm red base",p:0,sold:false},
  {c:"593",g:"Gabbeh",w:2.10,h:1.05,d:"Linear motifs, red field with darker lines",p:0,sold:false},
  {c:"595",g:"Gabbeh",w:1.87,h:1.21,d:"Earth-toned palette, red-brown nuances",p:0,sold:false},
  {c:"605",g:"Gabbeh",w:1.86,h:1.00,d:"Purist gabbeh style, restrained coloring",p:0,sold:false},

  {c:"02_374",g:"VK",w:2.50,h:2.04,d:"Large floral pattern, red field with blue and ivory",p:0,sold:false},
  {c:"03_433",g:"VK",w:1.49,h:1.07,d:"Ornamental design, warm red and beige",p:0,sold:false},
  {c:"04_503",g:"VK",w:2.09,h:2.17,d:"Classic medallion layout, deep red ground",p:0,sold:false},
  {c:"05_609",g:"VK",w:3.02,h:2.97,d:"Expansive pattern field, strong presence",p:0,sold:false},
  {c:"06_610",g:"VK",w:3.07,h:2.53,d:"Traditional large-format carpet, rich ornament",p:0,sold:false},
  {c:"07_668",g:"VK",w:2.55,h:1.60,d:"Geometric motifs, elongated layout",p:0,sold:false},
  {c:"08_672",g:"VK",w:2.05,h:1.55,d:"Ornamental field, calm composition",p:0,sold:false},
  {c:"09_709",g:"VK",w:2.23,h:2.18,d:"Central medallion, square proportions",p:0,sold:false},
  {c:"10_717",g:"VK",w:2.35,h:1.55,d:"Classic layout, balanced ornament",p:0,sold:false},
  {c:"11_721",g:"VK",w:3.58,h:2.67,d:"Large floral design, generous scale",p:0,sold:false},
  {c:"12_722",g:"VK",w:3.80,h:2.50,d:"Ornamental composition, wide format",p:0,sold:false},
  {c:"13_723",g:"VK",w:2.50,h:1.60,d:"Diamond motifs, rhythmic structure",p:0,sold:false},
  {c:"14_724",g:"VK",w:4.05,h:3.10,d:"Very large floral carpet, dominant presence",p:0,sold:false},
  {c:"15_725",g:"VK",w:4.03,h:3.10,d:"Classic large-format carpet, symmetrical layout",p:0,sold:false},
  {c:"16_751",g:"VK",w:2.50,h:1.55,d:"Medallion-based design, clear structure",p:0,sold:false},
  {c:"17_772",g:"VK",w:2.60,h:2.00,d:"Geometric pattern, square proportions",p:0,sold:false},
  {c:"18_773",g:"VK",w:2.83,h:2.18,d:"Diamond pattern, bold rhythm",p:0,sold:false},
  {c:"19_788",g:"VK",w:2.00,h:1.98,d:"Round medallion, compact square format",p:0,sold:false},
  {c:"20_1170",g:"VK",w:3.12,h:2.18,d:"Bold pattern field, intense red tones",p:0,sold:false}
];

async function getProductStore() {
  return getStore({ name: "products", consistency: "strong" });
}

async function getImageStore() {
  return getStore({ name: "images", consistency: "strong" });
}

async function initProducts(store) {
  const existing = await store.get("all-products", { type: "json" });
  if (!existing) {
    await store.setJSON("all-products", DEFAULT_PRODUCTS);
    return DEFAULT_PRODUCTS;
  }
  return existing;
}

export default async (req, context) => {
  const url = new URL(req.url);
  const method = req.method;

  const store = await getProductStore();
  const imageStore = await getImageStore();

  // GET /api/products - list all products
  if (method === "GET" && !url.searchParams.has("code")) {
    const products = await initProducts(store);
    // Attach image URLs for each product
    const enriched = await Promise.all(products.map(async (p) => {
      const imgData = await imageStore.get(`imgs-${p.c}`, { type: "json" });
      return { ...p, images: imgData || [] };
    }));
    return Response.json(enriched);
  }

  // GET /api/products?code=XX - get single product
  if (method === "GET" && url.searchParams.has("code")) {
    const code = url.searchParams.get("code");
    const products = await initProducts(store);
    const product = products.find(p => p.c === code);
    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    const imgData = await imageStore.get(`imgs-${code}`, { type: "json" });
    return Response.json({ ...product, images: imgData || [] });
  }

  // PUT /api/products - update a product (admin)
  if (method === "PUT") {
    const body = await req.json();
    const { code, updates } = body;
    if (!code || !updates) {
      return Response.json({ error: "Missing code or updates" }, { status: 400 });
    }

    const products = await initProducts(store);
    const idx = products.findIndex(p => p.c === code);
    if (idx === -1) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    // Apply allowed updates
    const allowed = ["d", "p", "w", "h", "g", "sold", "c"];
    for (const key of allowed) {
      if (updates[key] !== undefined) {
        products[idx][key] = updates[key];
      }
    }

    await store.setJSON("all-products", products);
    const imgData = await imageStore.get(`imgs-${products[idx].c}`, { type: "json" });
    return Response.json({ ...products[idx], images: imgData || [] });
  }

  // DELETE /api/products?code=XX - delete images for a product
  if (method === "DELETE") {
    const code = url.searchParams.get("code");
    if (!code) {
      return Response.json({ error: "Missing code" }, { status: 400 });
    }
    await imageStore.delete(`imgs-${code}`);
    return Response.json({ success: true });
  }

  return Response.json({ error: "Not found" }, { status: 404 });
};

export const config = {
  path: "/api/products"
};
