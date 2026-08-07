/**
 * Inject schema.org JSON-LD for structured data.
 * Pass a single object or an array of objects.
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data : [data];
  const cleaned = payload.filter(Boolean);
  if (cleaned.length === 0) return null;

  return (
    <>
      {cleaned.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={item["@type"] ? `${item["@type"]}-${index}` : `jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
