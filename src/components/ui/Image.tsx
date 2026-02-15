'use client'

import { useState } from 'react'
import NextImage from 'next/image'

function getWebPPath(src: string): string {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

interface BaseImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

interface FillImageProps extends BaseImageProps {
  fill: true
  width?: never
  height?: never
}

interface SizedImageProps extends BaseImageProps {
  fill?: false
  width: number
  height: number
}

type ImageProps = FillImageProps | SizedImageProps

export default function Image(props: ImageProps) {
  const isConvertible = /\.(jpg|jpeg|png)$/i.test(props.src)
  const [useWebP, setUseWebP] = useState(isConvertible)

  const resolvedSrc = useWebP ? getWebPPath(props.src) : props.src

  const handleError = () => {
    if (useWebP) {
      setUseWebP(false)
    }
  }

  if (props.fill) {
    return (
      <NextImage
        src={resolvedSrc}
        alt={props.alt}
        fill
        className={props.className}
        sizes={props.sizes}
        priority={props.priority}
        onError={handleError}
      />
    )
  }

  return (
    <NextImage
      src={resolvedSrc}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
      sizes={props.sizes}
      priority={props.priority}
      onError={handleError}
    />
  )
}
