import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hanumanthu Swathi — Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#090d16",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          <span
            style={{
              fontSize: 20,
              fontFamily: "monospace",
              color: "#34d399",
              letterSpacing: "2px",
            }}
          >
            AVAILABLE FOR SDE ROLES
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: "-2px",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Hanumanthu Swathi
          </h1>
          <p
            style={{
              fontSize: 32,
              fontFamily: "monospace",
              color: "#10b981",
              margin: 0,
            }}
          >
            SDE · Full-Stack Developer · AI Engineer
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#94a3b8",
              margin: 0,
              maxWidth: 900,
            }}
          >
            B.Tech IT (CGPA 8.30) · Real-time web systems, high-throughput ELT pipelines &amp; production ML.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid #1e293b",
          }}
        >
          <span style={{ fontSize: 18, fontFamily: "monospace", color: "#64748b" }}>
            github.com/2005swathi2000
          </span>
          <span style={{ fontSize: 18, fontFamily: "monospace", color: "#10b981" }}>
            Aditya College of Engineering &amp; Technology
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

