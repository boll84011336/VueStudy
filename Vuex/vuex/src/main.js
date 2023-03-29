import Vue from 'vue'
import App from './App.vue'
import store from './store'

console.log(this.$store.count)

new Vue({
  render: h => h(App),
  store, // 將 store 注入到 Vue 實例中
}).$mount('#app')
