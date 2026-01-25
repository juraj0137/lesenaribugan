import { getImagePath } from '@/lib/config'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export default function Image({ src, alt, ...props }: ImageProps) {
  const imageSrc = src.startsWith('/') ? getImagePath(src) : src
  return <img src={imageSrc} alt={alt} {...props} />
}
