import { ArticleAttributes, TagAttributes, UserAttributes } from '@/types/model-attribute'

export interface TypeTree {
  id: string
  name: string
  children: TypeTree[]
  isLogin?: boolean
}

// 文章列表，单个文章主要的字段类型
export type ArticleItem = Pick<
  ArticleAttributes,
  | 'id'
  | 'title'
  | 'description'
  | 'view_count'
  | 'cover_url'
  | 'update_time'
  | 'create_time'
  | 'comment_count'
  | 'like_count'
  | 'state'
> & {
  tag: Pick<TagAttributes, 'id' | 'name'>[]
  author_data: Pick<UserAttributes, 'name'>
}

export interface ArticleList {
  total: number
  list: ArticleItem[]
}
