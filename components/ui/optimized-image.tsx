"use client"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallbackQuery?: string
  loading?: "lazy" | "eager"
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackQuery,
  loading = "lazy",
  onError,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    console.log("error", src);
    setHasError(true)
    onError?.()
  }

  const imageSrc = src.startsWith("/") ? src : `/${src}`

  const fallbackSrc = fallbackQuery
    ? `/placeholder.svg?height=400&width=300&query=${encodeURIComponent(fallbackQuery)}`
    : "/placeholder.svg?height=400&width=300"

  return (
    <img
      src={hasError ? fallbackSrc : imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={console.log}
      onLoad={() => console.log(`[v0] Image loaded successfully: ${imageSrc}`)}
    />
  )
}
