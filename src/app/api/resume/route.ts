
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume.pdf"
  );

  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Abubakr_Kazi_(jr.Software_Engineer).pdf"',
      "Cache-Control": "no-store",
    },
  });
}
