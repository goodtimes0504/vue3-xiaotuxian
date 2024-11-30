import type { BannerItem, CategoryItem } from '@/types/home'
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
// 首页模块
// 首页-前台分类-小程序
// GET
// /home/category/mutli
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
