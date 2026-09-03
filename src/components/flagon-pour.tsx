/**
 * The hero centerpiece: the Flagon tankard, filling.
 *
 * The mark's body/lid/handle geometry matches <Logo> (and @flagon/design), so
 * this is the same vessel scaled up, with teal "brew" clipped inside the body.
 * The liquid pours in once on load, then the surface keeps a slow living wave
 * with a few rising bubbles — a literal read on "something new is on tap."
 *
 * All motion is CSS (see globals.css) and driven by transforms only, so it's
 * cheap; it halts under prefers-reduced-motion, leaving the vessel filled and
 * still. Nothing here is random, so server and client render identically.
 */

// One wavelength of the surface is 30 user units; the path is drawn far wider
// than the vessel so a −30u horizontal loop is seamless once clipped.
const WAVE_BACK =
  "M-38 34 q7.5 -1.3 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 L97 60 L-38 60 Z";
const WAVE_FRONT =
  "M-38 34.3 q7.5 1.4 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 L97 60 L-38 60 Z";

const bubbles = [
  { cx: 25, r: 0.9, dur: "5.2s", delay: "0.2s" },
  { cx: 30, r: 0.7, dur: "6.4s", delay: "1.6s" },
  { cx: 33, r: 1.1, dur: "4.6s", delay: "3.1s" },
  { cx: 22, r: 0.6, dur: "7.1s", delay: "2.3s" },
];

export function FlagonPour({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(20,184,166,0.45), transparent 68%)",
        }}
      />

      <svg viewBox="0 0 64 64" fill="none" role="img" aria-label="Flagon">
        <defs>
          <clipPath id="pour-body">
            <path d="M18 22 L36 22 L39 50 L15 50 Z" />
          </clipPath>
          <linearGradient id="pour-liquid" x1="0" y1="0.5" x2="0" y2="1">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
        </defs>

        {/* brew, clipped to the vessel body */}
        <g clipPath="url(#pour-body)">
          <g className="pour-rise">
            <g className="pour-bob">
              <path
                className="pour-wave-back"
                d={WAVE_BACK}
                fill="url(#pour-liquid)"
                fillOpacity={0.92}
              />
              <path
                className="pour-wave-front"
                d={WAVE_FRONT}
                fill="#5eead4"
                fillOpacity={0.3}
                stroke="#ccfbf1"
                strokeOpacity={0.5}
                strokeWidth={0.5}
              />
              {bubbles.map((b, i) => (
                <circle
                  key={i}
                  className="pour-bubble"
                  cx={b.cx}
                  cy={47}
                  r={b.r}
                  fill="#ccfbf1"
                  fillOpacity={0.6}
                  style={{ animationDuration: b.dur, animationDelay: b.delay }}
                />
              ))}
            </g>
          </g>
        </g>

        {/* vessel outline, over the brew */}
        <g
          fill="none"
          stroke="#2dd4bf"
          strokeWidth={2.8}
          strokeLinejoin="round"
          strokeLinecap="butt"
          style={{ filter: "drop-shadow(0 0 5px rgba(45,212,191,0.35))" }}
        >
          <path d="M18 22 L36 22 L39 50 L15 50 Z" />
          <path d="M19 22 L21 15 L33 15 L35 22 Z" />
          <path d="M37 28 L46 29 L49 34 L49 39 L46 44 L38 43" />
        </g>
      </svg>
    </div>
  );
}
