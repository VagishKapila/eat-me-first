import { ReactNode, CSSProperties } from 'react'

interface StickerProps {
  children: ReactNode
  rotate?: number
  color?: string
  textColor?: string
  className?: string
  style?: CSSProperties
}

export function Sticker({
  children,
  rotate = -6,
  color = '#FF3D7F',
  textColor = '#FFFFFF',
  className = '',
  style = {},
}: StickerProps) {
  return (
    <div
      className={`inline-flex items-center px-4 py-2 text-sm font-bold tracking-wide ${className}`}
      style={{
        background: color,
        color: textColor,
        transform: `rotate(${rotate}deg)`,
        borderRadius: '999px',
        fontFamily: 'var(--font-sans)',
        boxShadow: '0 4px 0 rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.10)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
