<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res);
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel />
  <!-- 商品列表 -->
  <view class="index">index</view>
</template>

<style lang="scss">
//小程序背景颜色设置
page {
  // background-color:#eceaea
  background-color: #f3f1f1;
}
</style>
