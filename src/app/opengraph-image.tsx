import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Abubakr Kazi Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#050414,#081b29,#8245EC)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
          }}
        >
          Abubakr Kazi
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#d4d4d8",
          }}
        >
          Full Stack Developer
        </div>

        <div
          style={{
            marginTop: 50,
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          Next.js • React • TypeScript • Prisma
        </div>
      </div>
    ),
    size
  );
}