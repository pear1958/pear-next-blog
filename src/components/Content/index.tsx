'use client'

import { FC, ReactNode } from 'react'
import ArticleType from '@/components/ArticleType'
import { ArticleList, TypeTree } from './type'

interface Props {
  type: TypeTree[]
  article_list: ArticleList
  children: ReactNode
}

const Content: FC<Props> = (props) => {
  return (
    <>
      <ArticleType
        data={props.type}
        change={({ type, tag, follow }) => {
          console.log('change')
          // option.current.tag = tag;
          // option.current.type = type;
          // option.current.follow = follow;
          // page.current = 1;
          // loadMoreData();
        }}
      />
    </>
  )
}

export default Content
