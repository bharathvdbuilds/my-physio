type SceneProps = { className?: string };

export function SessionScene({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 520 640" className={className} role="img" aria-label="Illustration of a calm home physiotherapy corner">
      <rect width="520" height="640" fill="#EAF5FA" />
      <rect x="300" y="48" width="150" height="180" rx="8" fill="#ffffff" />
      <path d="M375 48v180M300 138h150" stroke="#D7E3EC" strokeWidth="2" />
      <path d="M318 78c28 18 48 18 70 0" fill="none" stroke="#12A89D" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="118" cy="168" r="34" fill="#12A89D" opacity="0.16" />
      <path d="M118 210c-18 24-22 48-16 78" fill="none" stroke="#176B91" strokeWidth="2" strokeLinecap="round" />
      <path d="M102 186c18 16 34 10 46-8" fill="none" stroke="#0C6E68" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 470h440" stroke="#D7E3EC" strokeWidth="2" />
      <rect x="86" y="392" width="300" height="92" rx="18" fill="#ffffff" stroke="#102A43" strokeWidth="2" />
      <path d="M110 438h250" stroke="#12A89D" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <circle cx="250" cy="300" r="22" fill="none" stroke="#102A43" strokeWidth="2.2" />
      <path
        d="M250 324c-2 46-8 70-28 96"
        fill="none"
        stroke="#102A43"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M248 352c36-8 62 6 78 28"
        fill="none"
        stroke="#102A43"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M236 404c-34 8-48 36-42 62"
        fill="none"
        stroke="#102A43"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M244 418c40 6 70 28 86 58"
        fill="none"
        stroke="#102A43"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M70 520c40 18 90 18 140 0" fill="none" stroke="#176B91" strokeWidth="1.5" opacity="0.45" />
      <text x="40" y="590" fill="#526477" fontSize="15" fontFamily="Inter, sans-serif" letterSpacing="1.5">
        ORIGINAL ILLUSTRATION
      </text>
    </svg>
  );
}

export function SettingScene({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 520 620" className={className} role="img" aria-label="Illustration of simple home exercise equipment">
      <rect width="520" height="620" fill="#F8FAFC" />
      <path d="M0 430c80-40 160-40 240 0s160 40 280 0v190H0V430Z" fill="#EAF5FA" />
      <rect x="78" y="250" width="250" height="150" rx="22" fill="#ffffff" stroke="#102A43" strokeWidth="2" />
      <path d="M104 325h198" stroke="#12A89D" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="390" cy="300" rx="46" ry="70" fill="none" stroke="#176B91" strokeWidth="8" />
      <rect x="150" y="430" width="120" height="36" rx="10" fill="#102A43" />
      <rect x="162" y="414" width="96" height="28" rx="8" fill="#D6A45C" />
      <rect x="300" y="168" width="46" height="78" rx="16" fill="none" stroke="#0C6E68" strokeWidth="2" />
      <path d="M312 188h22" stroke="#0C6E68" strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="150" r="36" fill="#12A89D" opacity="0.14" />
      <text x="40" y="580" fill="#526477" fontSize="15" fontFamily="Inter, sans-serif" letterSpacing="1.5">
        ORIGINAL ILLUSTRATION
      </text>
    </svg>
  );
}

export function AreaScene({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 560 460" className={className} role="img" aria-label="Map illustration centred on Chandapura–Anekal Road, without a fixed visit radius">
      <rect width="560" height="460" rx="28" fill="#F8FAFC" />
      <g stroke="#D7E3EC" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, index) => (
          <line key={`v-${index}`} x1={70 + index * 60} y1="36" x2={70 + index * 60} y2="360" />
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <line key={`h-${index}`} x1="40" y1={50 + index * 54} x2="520" y2={50 + index * 54} />
        ))}
      </g>
      <circle cx="280" cy="214" r="128" fill="none" stroke="#12A89D" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="280" cy="214" r="78" fill="none" stroke="#176B91" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="280" cy="214" r="18" fill="#EAF5FA" stroke="#102A43" strokeWidth="2" />
      <path d="M280 132c-22 18-28 36-16 58 8 14 16 18 16 32" fill="none" stroke="#0C6E68" strokeWidth="2" strokeLinecap="round" />
      <circle cx="280" cy="214" r="5" fill="#D6A45C" />
      <text x="280" y="400" textAnchor="middle" fill="#102A43" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="650">
        Chandapura–Anekal Road
      </text>
      <text x="280" y="428" textAnchor="middle" fill="#526477" fontSize="15" fontFamily="Inter, sans-serif">
        Bengaluru · availability confirmed on enquiry
      </text>
    </svg>
  );
}
