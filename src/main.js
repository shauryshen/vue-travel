// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端点击延迟300毫秒的问题
import fastClick from 'fastclick'
// 轮播插件，具体在github上
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
// 保证各个浏览器显示效果一样
import 'styles/reset.css'
// 移动端1px边框
import 'styles/border.css'
import 'styles/iconfont.css'
// 轮播插件的css
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
