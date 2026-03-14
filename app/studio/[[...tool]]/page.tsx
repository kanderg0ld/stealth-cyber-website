// Server component — required so generateStaticParams can coexist with client rendering
import StudioClientPage from './StudioClientPage'

// Pre-generate /studio as a static HTML shell; studio loads client-side
export function generateStaticParams() {
  return [{}]
}

export default function StudioPage() {
  return <StudioClientPage />
}
