<script setup lang="ts">
import CartMain from './components/CartMain.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>
<template>
  <view>
    <CartMain :safe-area-bottom="safeAreaInsets?.bottom" />
  </view>
</template>
