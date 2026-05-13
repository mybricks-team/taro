import Taro from '@tarojs/api'
// [MyBricks.ai]
import { Current } from '@tarojs/runtime'

import { findDOM } from '../../utils'
import { CanvasContext } from './CanvasContext'

/**
 * 创建 canvas 的绘图上下文 CanvasContext 对象
 */
export const createCanvasContext: typeof Taro.createCanvasContext = (canvasId, inst) => {
  // const el = findDOM(inst) as HTMLElement
  // [MyBricks.ai] 兼容设计态没有Current.page的问题，目前实现方式要求不同页面的 canvasId 要做区分
  let el
  const page = Current.page
  const path = page === null || page === undefined ? undefined : page.path
  if (path == null) {
    el = document.getElementById('_mybricks-geo-webview_')!.shadowRoot
  } else {
    el = findDOM(inst)
  }
  const canvas = el?.querySelector(`canvas[canvas-id="${canvasId}"]`) as HTMLCanvasElement
  const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D
  const context = new CanvasContext(canvas, ctx)
  if (!ctx) return context
  context.canvas = canvas
  context.ctx = ctx

  return context
}
