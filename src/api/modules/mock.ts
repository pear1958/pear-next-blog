export const typeList = [
  {
    id: 'recommend',
    name: '综合',
    children: [], // 无具体子项（或根据实际逻辑生成）
  },
  {
    id: 'follow',
    name: '关注',
    isLogin: true,
    children: [],
  },
  {
    id: '1', // 假设缓存中的tree数据包含id为1的类型
    name: '技术',
    children: [
      { id: '1', name: '全部' }, // 固定添加的“全部”子项
      { id: '101', name: '前端开发' }, // 原类型下的子标签
      { id: '102', name: '后端开发' },
    ],
  },
  {
    id: '2',
    name: '生活',
    children: [
      { id: '2', name: '全部' },
      { id: '201', name: '旅行' },
      { id: '202', name: '美食' },
    ],
  },
]

export const articleList = []