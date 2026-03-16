import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { width: 140, height: 30 },
  md: { width: 180, height: 38 },
  lg: { width: 240, height: 51 },
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { width, height } = sizes[size]
  return (
    <Image
      src="/Primary-Reversed-Dark.png"
      alt="Stealth Cyber"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}
