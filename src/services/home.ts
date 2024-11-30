import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'
// 获取首页轮播图数据的接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
