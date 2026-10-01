import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Abubakr Kazi - React.js Developer Portfolio";

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
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #050414 0%, #081b29 55%, #111133 100%)",
          color: "#ffffff",
        }}
      >
        {/* Purple Glow */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            right: -120,
            top: -160,
            borderRadius: "50%",
            background: "rgba(130, 69, 236, 0.28)",
            filter: "blur(90px)",
          }}
        />

        {/* Cyan Glow */}
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            left: -100,
            bottom: -140,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.12)",
            filter: "blur(90px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "70px",
            textAlign: "center",
          }}
        >
          {/* Portfolio Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(130, 69, 236, 0.5)",
              background: "rgba(130, 69, 236, 0.12)",
              color: "#cdb6ff",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Developer Portfolio
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 78,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            Abubakr{" "}
            <span
              style={{
                marginLeft: 18,
                color: "#a875ff",
              }}
            >
              Kazi
            </span>
          </div>

          {/* Role */}
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              fontWeight: 600,
              color: "#e2e8f0",
            }}
          >
            React.js Developer
          </div>

          {/* Career Direction */}
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            Frontend Development • Growing Toward Full Stack
          </div>

          {/* Divider */}
          <div
            style={{
              width: 100,
              height: 4,
              marginTop: 32,
              borderRadius: 999,
              background: "#8245EC",
            }}
          />

          {/* Technologies */}
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 22,
              fontWeight: 500,
              color: "#cbd5e1",
              letterSpacing: "1px",
            }}
          >
            React • Next.js • TypeScript • Node.js • PostgreSQL
          </div>
        </div>

        {/* Branding */}
        <div
          style={{
            position: "absolute",
            right: 42,
            bottom: 32,
            display: "flex",
            fontSize: 18,
            fontWeight: 600,
            color: "#8245EC",
          }}
        >
          Portfolio.
        </div>
      </div>
    ),
    size
  );
}