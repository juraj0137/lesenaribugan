import { getImagePath } from '@/lib/config'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

function getWebPPath(src: string): string {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

export default function Image({ src, alt, ...props }: ImageProps) {
  const imageSrc = src.startsWith('/') ? getImagePath(src) : src
  const webpSrc = getWebPPath(imageSrc)
  const isOptimizable = /\.(jpg|jpeg|png)$/i.test(src)

  if (isOptimizable) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={imageSrc} alt={alt} {...props} />
      </picture>
    )
  }

  return <img src={imageSrc} alt={alt} {...props} />
}
