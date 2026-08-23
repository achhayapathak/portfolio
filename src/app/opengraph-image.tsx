import { ImageResponse } from "next/og";
import { site } from "@/data/content.config";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt = `${site.name} — ${site.title} & Backend Architect`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let logoDataUrl = "";
  try {
    const logoPath = path.join(process.cwd(), "public", "logo.jpeg");
    const logoBuffer = fs.readFileSync(logoPath);
    logoDataUrl = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;
  } catch {
    logoDataUrl = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fdf6e3",
          backgroundImage:
            "radial-gradient(#d6ceb8 1px, transparent 1px), radial-gradient(#d6ceb8 1px, #fdf6e3 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          padding: "44px 52px",
          fontFamily: "sans-serif",
          color: "#18181b",
          border: "16px solid #1c272e",
          boxSizing: "border-box",
        }}
      >
        {/* Top Ledger Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "3px solid #1c272e",
            paddingBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                backgroundColor: "#2e7d32",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1c272e",
              }}
            >
              FORM OV-00 · VERIFIED RECORD
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#1c272e",
              color: "#fdf6e3",
              padding: "6px 14px",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            IIT GUWAHATI MS ALUM
          </div>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            margin: "20px 0",
          }}
        >
          {/* Left Column: Bio & Core Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#a03d1b",
                }}
              >
                {"// PORTFOLIO & LEDGER"}
              </span>
            </div>

            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                lineHeight: 1.05,
                margin: "0 0 12px 0",
                letterSpacing: "-0.03em",
                color: "#111827",
                textTransform: "uppercase",
              }}
            >
              {site.name}
            </h1>

            <p
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#2f4f4f",
                margin: "0 0 18px 0",
                letterSpacing: "-0.01em",
              }}
            >
              {site.title} &nbsp;·&nbsp; {site.location}
            </p>

            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "#374151",
                margin: "0 0 24px 0",
                maxWidth: "620px",
                fontWeight: 500,
              }}
            >
              Building high-throughput distributed systems, event-driven microservices,
              and autonomous AI/LLM agents that scale seamlessly under heavy production load.
            </p>

            {/* Tags / Skills Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {[
                "Distributed Systems",
                "Agentic AI",
                "Go",
                "Python",
                "LLMs",
                "Next.js",
                "Kubernetes",
                "PostgreSQL",
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#e2e8f0" : "#dbeafe",
                    border: "1.5px solid #1c272e",
                    color: "#0f172a",
                    padding: "4px 12px",
                    borderRadius: "3px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Logo / Avatar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "16px",
                border: "4px solid #1c272e",
                overflow: "hidden",
                boxShadow: "8px 8px 0px #1c272e",
                backgroundColor: "#192932",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {logoDataUrl ? (
                <img
                  src={logoDataUrl}
                  alt={site.name}
                  width="250"
                  height="250"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "#fdf6e3",
                  }}
                >
                  AP
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "16px",
                backgroundColor: "#fef3c7",
                border: "2px solid #b45309",
                color: "#78350f",
                padding: "4px 14px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              CO-FOUNDER @ JOINUP
            </div>
          </div>
        </div>

        {/* Bottom Status Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "3px solid #1c272e",
            paddingTop: "14px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "0.05em",
              color: "#1c272e",
            }}
          >
            {site.siteUrl.replace(/^https?:\/\//, "")}
          </span>

          <span
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#4b5563",
            }}
          >
            Backend & Systems Architecture
          </span>

          <span
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: "#1c272e",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            STATUS: ACTIVE 
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
