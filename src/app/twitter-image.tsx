import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lexa AI for modern FP&A teams";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 12% 82%, rgba(255,202,58,0.45), transparent 34%), linear-gradient(160deg, #f5faf7 0%, #eaf3ee 100%)",
          padding: "64px",
          color: "#10251d",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#00674b",
            marginBottom: 20,
          }}
        >
          Lexa AI
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.03,
            letterSpacing: "-0.04em",
            fontWeight: 800,
            maxWidth: "1000px",
          }}
        >
          Finance teams run faster with a single FP&amp;A AI platform.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
