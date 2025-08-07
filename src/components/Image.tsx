'use client'

import type { FC } from 'react'
import ImageNext from 'next/image'
import type { ImageProps } from 'next/image'

const Image: FC<ImageProps> = (props) => {
  return (
    <ImageNext
      {...props}
      src={props.src}
      loader={({ src, width, quality }) => {
        return `${process.env.NEXT_PUBLIC_CDN}${src}?w=${width}&q=${100}`
      }}
      // 是否应预加载图片
      priority={true}
    />
  )
}

export default Image
