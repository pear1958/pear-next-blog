'use client'

import { Button, Card, Input } from 'antd'

export default function Home() {
  const test = () => {
    console.log('11111111')
  }

  return (
    <div className="text-green-400">
      <Card title="官方简易版示例">
        <Input placeholder="输入内容" style={{ marginBottom: 16 }} />
        <Button type="primary" onClick={test}>提交</Button>
      </Card>
    </div>
  )
}
