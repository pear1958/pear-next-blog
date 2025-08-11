import HeadInfo from '@/components/HeadInfo'
import Header from '@/components/Header'

import { getArticleList, getTypeTree } from '@/api/modules/article'
import Content from '@/components/Content'

const Home = async () => {
  const reponse = (await Promise.all([getTypeTree(), getArticleList()])) as any

  return (
    <>
      <HeadInfo
        title={`${process.env.NEXT_PUBLIC_SITE_NAME}-技术社区`}
        description={`${process.env.NEXT_PUBLIC_SITE_NAME}是面向中文开发者的技术内容分享与交流平台。我们通过技术文章、问答服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。`}
        keywords={[process.env.NEXT_PUBLIC_SITE_NAME, '技术社区,博客,前端开发,WEB']}
      />

      <Header />

      <Content type={reponse[0]} article_list={reponse[1]}>
        <div>111</div>
      </Content>
    </>
  )
}

export default Home
