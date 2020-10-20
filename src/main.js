import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import moment from 'moment' //日期格式化插件
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css'


import axios from 'axios'
axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

// 注册全局过滤器
Vue.filter('fmtdate',(v) => {
        return moment(v).format("YYYY-MM-DD")
    })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
