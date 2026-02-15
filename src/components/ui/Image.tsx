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
  const optimizedSrc = /\.(jpg|jpeg|png)$/i.test(props.src) ? getWebPPath(props.src) : props.src

  if (props.fill) {
    return (
      <NextImage
        src={optimizedSrc}
        alt={props.alt}
        fill
        className={props.className}
        sizes={props.sizes}
        priority={props.priority}
      />
    )
  }

  return (
    <NextImage
      src={optimizedSrc}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
      sizes={props.sizes}
      priority={props.priority}
    />
  )
}
