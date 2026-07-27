import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #102a43 52%, #111827 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#67e8f9",
            marginBottom: 24,
          }}
        >
          AlavarseDev
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#f8fafc",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          João Paulo Almeida Alavarse
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          Engenheiro de Software • Docente do Ensino Superior
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            marginTop: 32,
            textAlign: "center",
          }}
        >
          Sistemas reais • Modernização • Produto • Ensino
        </div>
      </div>
    ),
    size,
  );
}
