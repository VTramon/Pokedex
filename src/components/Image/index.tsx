import { ReactEventHandler } from 'react'

type ImageProps = {
  src: string
  alt: string
  onLoad: ReactEventHandler<HTMLImageElement>
}

export const Image = (props: ImageProps) => {
  return (
    <img loading="lazy" src={props.src} alt={props.alt} onLoad={props.onLoad} />
  )
}
