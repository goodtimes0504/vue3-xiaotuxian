/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
// declare module 'vue' {
//   export interface GlobalComponents {
//     //
//   }
// }

// src/types/components.d.ts
import XtxSwiper from '@components/XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
