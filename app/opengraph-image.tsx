import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Stealth Cyber - Global Managed Cybersecurity'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #0038FF, #6231F5)',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <div style={{ fontSize: 64, fontWeight: 700, color: 'white', marginBottom: 16, display: 'flex' }}>
            Stealth Cyber
          </div>
          <div style={{ fontSize: 28, color: '#94A3B8', marginBottom: 40, display: 'flex' }}>
            One Breach Can Change Everything. Don&apos;t Let It.
          </div>
          <div style={{ fontSize: 18, color: '#4DCCFF', marginBottom: 16, display: 'flex' }}>
            MDR &middot; Incident Response &middot; AI Security &middot; CMMC &middot; ISO 27001 &middot; Essential Eight
          </div>
          <div style={{ fontSize: 16, color: '#94A3B8', display: 'flex' }}>
            Gold Coast, AU &middot; S&atilde;o Paulo, BR &middot; Texas, US
          </div>
          <div
            style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #0038FF, #6231F5)',
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
