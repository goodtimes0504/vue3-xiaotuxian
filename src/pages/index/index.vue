<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
//导入骨架图
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res);
  bannerList.value = res.result
}
//获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // console.log(res)
  categoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  // console.log(res)
}
//是否加载中的状态标记
const isLoading = ref(false)

//页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])

  isLoading.value = false
})
// //获取猜你喜欢组件实例
// const guessRef = ref<XtxGuessInstance>()
// //滚动到底部加载更多
// const OnScrollToLower = async () => {
//   console.log('滚动到底部加载更多')
//   guessRef.value?.getMore()
// }
//调用猜你喜欢组合式函数
const { guessRef, onScrolltolower } = useGuessList()
//当前下拉刷新状态
const isTriggered = ref(false)
//自定义下拉刷新被触发
const OnRefresherrefresh = async () => {
  // console.log('自定义下拉刷新被触发')
  //开始动画
  isTriggered.value = true
  //重新获取数据
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  //重置猜你喜欢数据
  guessRef.value.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value.getMore(),
  ])
  //结束动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="OnRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    scroll-y
    class="scroll-view"
  >
    <!-- 骨架图 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门组件 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//小程序背景颜色设置
page {
  // background-color:#eceaea
  background-color: #f3f1f1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
