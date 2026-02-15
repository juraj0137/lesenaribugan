interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

function getWebPPath(src: string): string {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

export default function Image({ src, alt, ...props }: ImageProps) {
  const webpSrc = getWebPPath(src)
  const isOptimizable = /\.(jpg|jpeg|png)$/i.test(src)

  if (isOptimizable) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} {...props} />
      </picture>
    )
  }

  return <img src={src} alt={alt} {...props} />
}
