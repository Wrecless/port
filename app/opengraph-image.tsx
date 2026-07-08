import { ImageResponse } from "next/og";

export const alt = "Bruno Mata — CS Educator & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#07090d",
          backgroundImage:
            "radial-gradient(circle at 22% 20%, rgba(29,214,197,0.14), transparent 45%), radial-gradient(circle at 82% 78%, rgba(79,142,247,0.12), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#1dd6c5",
            fontSize: 24,
            letterSpacing: 8,
          }}
        >
          <div style={{ width: 48, height: 2, backgroundColor: "#1dd6c5", display: "flex" }} />
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112 }}>
            <span style={{ color: "#dde4f0" }}>Bruno</span>
            <span style={{ color: "#1dd6c5", marginLeft: 30 }}>Mata.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#8892a4", marginTop: 20 }}>
            CS Educator · Full-Stack Developer · Head of Department
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5e6b7e",
            fontSize: 22,
          }}
        >
          <span>BSc Computer Science — First Class Honours</span>
          <span style={{ color: "#1dd6c5" }}>github.com/Wrecless</span>
        </div>
      </div>
    ),
    size
  );
}
