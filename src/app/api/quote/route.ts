import { quoteChoices, quoteUnits, quoteFileError, quoteFileBytes } from "@/content/quote";
import { productCategories } from "@/content/products";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length")) > quoteFileBytes + 128 * 1024) {
    return Response.json({ error: "Artwork files must be 3 MB or less in total." }, { status: 413 });
  }
  const form = await request.formData().catch(() => null);
  let data;
  try {
    data = JSON.parse(String(form?.get("quote")));
  } catch {
    return Response.json({ error: "Check your quote details and try again." }, { status: 400 });
  }
  const attachments = form?.getAll("artwork") ?? [];
  const files = attachments.filter((value): value is File => typeof value !== "string");
  const fileError = files.length === attachments.length ? quoteFileError(files) : "Invalid artwork attachment.";
  if (fileError) return Response.json({ error: fileError }, { status: 400 });
  const product = productCategories.find(({ slug }) => slug === data?.product);
  const fields = { name: 100, email: 254, phone: 40, quantity: 12, width: 24, height: 24, unit: 2, instructions: 5000 };
  const choices = product ? quoteChoices(product.slug, data.material) : [];
  if (!product || Object.entries(fields).some(([key, limit]) =>
    typeof data[key] !== "string" || data[key].length > limit
  ) || !data.name.trim() || !/^[^\s@]+@[^\s@]+$/.test(data.email) ||
    !/^[1-9]\d*$/.test(data.quantity) ||
    !quoteUnits.includes(data.unit) ||
    [data.width, data.height].some((value) => value !== "" && (!Number.isFinite(Number(value)) || Number(value) < 0)) ||
    choices.some(({ key, options }) => !options.includes(data[key]))) {
    return Response.json({ error: "Check your quote details and try again." }, { status: 400 });
  }

  const destination = process.env.QUOTE_WEBHOOK_URL;
  if (!destination) {
    return Response.json({ error: "Quote delivery is currently unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: product.name,
        artwork: await Promise.all(files.map(async (file) => ({
          name: file.name,
          contentType: file.type || "application/octet-stream",
          contentBase64: Buffer.from(await file.arrayBuffer()).toString("base64"),
        }))),
        ...Object.fromEntries(choices.map(({ key }) => [key, data[key]])),
        ...Object.fromEntries(Object.keys(fields).map((key) => [key, data[key].trim()])),
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (response.ok) return Response.json({ received: true });
  } catch {
    // Keep delivery errors and destination details on the server.
  }
  return Response.json({ error: "We couldn't confirm delivery. Please try again." }, { status: 502 });
}
