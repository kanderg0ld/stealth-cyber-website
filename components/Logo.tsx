interface LogoProps {
  className?: string
  /** 'light' = white text (for dark backgrounds), 'dark' = dark text (for light backgrounds) */
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { icon: 28, text: 'text-base' },
  md: { icon: 36, text: 'text-xl' },
  lg: { icon: 48, text: 'text-2xl' },
}

export default function Logo({ className = '', variant = 'light', size = 'md' }: LogoProps) {
  const { icon: iconSize, text: textSize } = sizes[size]
  const textColor = variant === 'light' ? '#FFFFFF' : '#07091A'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Staircase icon — two blue rectangles offset like the brand logo */}
      <svg
        width={iconSize}
        height={Math.round(iconSize * 0.75)}
        viewBox="0 0 40 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bottom-left smaller block */}
        <rect x="0" y="14" width="18" height="16" rx="3" fill="#00A2FF" />
        {/* Top-right larger block */}
        <rect x="10" y="0" width="30" height="22" rx="3" fill="#0099FF" />
      </svg>

      {/* Wordmark */}
      <span
        className={`font-bold ${textSize} leading-none`}
        style={{ color: textColor }}
      >
        Stealth{' '}
        <span style={{ color: '#00A2FF' }}>Cyber</span>
      </span>
    </span>
  )
}
