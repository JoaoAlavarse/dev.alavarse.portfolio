import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          João Alavarse
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          Full Stack Developer | Startup Founder | Professor
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#64748b",
            marginTop: 24,
          }}
        >
          alavarsedev.com.br
        </div>
      </div>
    ),
    size
  )
}