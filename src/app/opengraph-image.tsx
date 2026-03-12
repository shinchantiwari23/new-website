import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lexa AI - FP&A platform for planning and reporting";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 85% 15%, rgba(13,138,99,0.45), transparent 36%), linear-gradient(160deg, #f5faf7 0%, #eaf3ee 100%)",
          padding: "64px",
          color: "#10251d",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#00674b",
            marginBottom: 20,
          }}
        >
          Lexa AI
        </div>
        <div
          style={{
            fontSize: 74,
            lineHeight: 1.03,
            letterSpacing: "-0.04em",
            fontWeight: 800,
            maxWidth: "960px",
          }}
        >
          FP&amp;A planning and reporting, powered by privacy-first AI.
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 32,
            color: "#325046",
          }}
        >
          Forecasting • Variance Analysis • Finance Automation
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
