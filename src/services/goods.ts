import { http } from '@/utils/http'
/**
 * 商品详情
 * @param id 商品id
 * 小程序里不管是get 还是post 参数统一用data传
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
