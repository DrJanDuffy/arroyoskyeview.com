interface GoogleMapEmbedProps {
  address: string
  className?: string
  height?: string
}

export default function GoogleMapEmbed({ 
  address, 
  className = '', 
  height = '300px' 
}: GoogleMapEmbedProps) {
  // Encode the address for the Google Maps embed URL (no API key required)
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '8px' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title={`Map showing ${address}`}
      />
    </div>
  )
}

