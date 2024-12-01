import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

//封装一个获取热门推荐的参数的类型
type HotParams = PageParams & { subType?: string }

//封装获取热门推荐数据的方法
/**
 *
 * @param url 请求地址
 * @param data 请求参数
 * @returns
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
