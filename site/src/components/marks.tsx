type MarkProps = { className?: string };

export function LogoMark({ className = "size-10" }: MarkProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="12" fill="#102A43" />
      <path
        d="M9.5 26.5c2.2-8.2 7.2-12.8 15.8-12.2"
        fill="none"
        stroke="#12A89D"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="26.2" cy="14.1" r="2.1" fill="#D6A45C" />
      <path
        d="M15 21.5v6.2M11.9 24.6h6.2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.41.49-.14.14-.28.29-.12.55.16.27.72 1.18 1.54 1.91 1.06.94 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.92.28.15.47.21.54.33.07.12.07.69-.17 1.37Z"
      />
    </svg>
  );
}

export function SpineMark({ className = "size-12" }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M24 11h16c2.4 2.2 2.6 4.4.4 6.8H25.2C22.4 15.6 22 13.2 24 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M21 23.2h20.4c2.6 2.3 2.7 4.6.3 7.1H22.6c-2.8-2.3-3.2-4.6-1.6-7.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M22.4 36h19.2c2.4 2.2 2.5 4.4.2 6.8H23.8c-2.6-2.2-3-4.4-1.4-6.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M25 47.6h14.6c2 1.8 2.1 3.6.2 5.6H26.2c-2.2-1.8-2.5-3.6-1.2-5.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M40 14.2h6.5M41.2 26.6H49M40.4 39.2h6.2M39 50.2h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShoulderMark({ className = "size-12" }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M8 28c12-10 24-11 38-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M36 25c7 1.2 11 7 9.2 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="44" cy="39" r="7.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M48.5 45.2 56 57" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="44" cy="22.5" r="1.7" fill="#D6A45C" />
    </svg>
  );
}

export function KneeMark({ className = "size-12" }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M24 8v15.5c0 5.2 3.6 8 8 8s8-2.8 8-8V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M22 18h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="45.5" cy="34" r="4.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M21 42.5h22L41.5 58h-17L21 42.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="45.5" cy="34" r="1.3" fill="#D6A45C" />
    </svg>
  );
}

export function HomeMark({ className = "size-12" }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M8 30.5 32 10l24 20.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 28.5V54h32V28.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M32 36.5v12M26 42.5h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const marks = {
  spine: SpineMark,
  shoulder: ShoulderMark,
  knee: KneeMark,
  home: HomeMark,
} as const;

export function ServiceMark({
  id,
  className,
}: {
  id: keyof typeof marks;
  className?: string;
}) {
  const Mark = marks[id];
  return <Mark className={className} />;
}
