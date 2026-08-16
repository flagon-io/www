type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * The Flagon tankard mark: body, lid, and handle.
 * Geometry mirrors @flagon/design logo-geometry.json.
 * Uses currentColor so it can be tinted from the parent.
 */
export function Logo({ className, title = "Flagon" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={3.2}
        strokeLinejoin="round"
        strokeLinecap="butt"
      >
        {/* body */}
        <path d="M18 22 L36 22 L39 50 L15 50 Z" />
        {/* lid */}
        <path d="M19 22 L21 15 L33 15 L35 22 Z" />
        {/* handle */}
        <path d="M37 28 L46 29 L49 34 L49 39 L46 44 L38 43" />
      </g>
    </svg>
  );
}
