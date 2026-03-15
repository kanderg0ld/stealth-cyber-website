export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Encode </script> sequences so injected CMS content can't break out of the script block.
  // JSON.stringify already escapes quotes; this additionally neutralises tag boundaries.
  const safeJson = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  )
}
