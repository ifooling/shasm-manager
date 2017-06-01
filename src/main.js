// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'styles/index.scss'; // 全局自定义的css样式
import 'components/Icon-svg/index'; // 封装的svg组件
import 'assets/iconfont/iconfont'

Vue.config.productionTip = true;
Vue.use(iView);
Vue.use(Element);

var app1 = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
