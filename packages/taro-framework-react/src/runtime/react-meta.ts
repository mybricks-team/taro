import { EMPTY_OBJ } from '@tarojs/shared'
// [MyBricks.ai] 导入React
import React from 'react'

interface ReactMeta {
  PageContext: React.Context<string>
  R: typeof React
  // [MyBricks.ai] 取消调试后的重制操作
  destroy: () => void
}

export const reactMeta: ReactMeta = {
  PageContext: EMPTY_OBJ,
  // [MyBricks.ai] 设计态需要调用hooks，但此时没有创建react应用，默认注入React兼容
  R: React,
  destroy: () => {}
}
