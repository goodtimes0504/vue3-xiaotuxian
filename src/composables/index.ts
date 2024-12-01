import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 *
 * 猜你喜欢组合式函数
 */

//组合式函数一般用use开头
export const useGuessList = () => {
  //获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  // 滚动到底部加载更多
  const onScrolltolower = () => {
    // console.log('滚动到底部')
    guessRef.value?.getMore()
  }
  //返回 ref和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
