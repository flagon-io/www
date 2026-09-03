import { ImageResponse } from "next/og";

export const alt = "Flagon: Something new is on tap. Coming soon.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 64 64' fill='none'><g fill='none' stroke='#2dd4bf' stroke-width='3.2' stroke-linejoin='round' stroke-linecap='butt'><path d='M18 22 L36 22 L39 50 L15 50 Z'/><path d='M19 22 L21 15 L33 15 L35 22 Z'/><path d='M37 28 L46 29 L49 34 L49 39 L46 44 L38 43'/></g></svg>`;

export default function OpengraphImage() {
  const mark = `data:image/svg+xml;utf8,${encodeURIComponent(markSvg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#ededed",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(1000px circle at 78% -10%, rgba(20,184,166,0.28), transparent 55%), radial-gradient(700px circle at 12% 120%, rgba(45,212,191,0.14), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={72} height={72} alt="" />
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1 }}>
            Flagon
          </div>
        </div>

        {/* message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 500,
              color: "#2dd4bf",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Rebuilding · Coming soon
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Something new is on tap.
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          Being rebuilt from the ground up · flagon.io
        </div>
      </div>
    ),
    { ...size },
  );
}
