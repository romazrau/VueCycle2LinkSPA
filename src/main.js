import Vue from 'vue';

//匯入/安裝 Vuex 與 VueRouter
import Vuex from 'vuex'; //vuex套件須先安裝(npm install vuex)
import VueRouter from 'vue-router'; //vue-router套件須先安裝(npm install vue-router)
Vue.use(Vuex); //Install a Vue.js plugin: Vuex.
Vue.use(VueRouter); //Install a Vue.js plugin: Vue-Router.

// *匯入 單檔元件(Single File Ccomponents)
/*
之前的全域/區域元件可能僅適合中小型的專案，對於較複雜的專案，一般會使用單檔元件(.vue) 。
單檔元件可解決全域/區域元件所遭遇的問題，例如:
1. 字串模板無法提供syntax highlighting功能且不易排版
2. 元件的模板不支援CSS
等等
*/
import App from './App.vue';
import Home from './containers/Home.vue'
import Activity from './containers/Activity.vue';
import Community from './containers/Community.vue'


//匯入 jQuery
// eslint-disable-next-line
import $ from 'jquery'; //jquery套件需先安裝(npm install jquery)(註: 因index.html會匯入jQuery，左列在真正佈署到Web Server上時是不需的)

// *匯入 自定義樣式表
import './styles/main.css'

Vue.config.productionTip = true;//設定在瀏覽器之Console上顯示「生產模式提示」訊息

//---------------Vuex.Store---------------//
var store = new Vuex.Store({

});

//---------------VueRouter---------------//
var routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/",
        redirect: "/home"
    },

    {
        path: "/activity",
        name: "activity",
        component: Activity
    },
    {
        path: "/community",
        name: "community",
        component: Community
    },

];
var router = new VueRouter({
    routes: routes
});




//---------------root Vue instance---------------//
new Vue({
    router: router,
    store: store,
    render: h => h(App), //字串模板的代替方案。
    //該渲染函數接收一個createElement方法作為第一個參數來建立VNode(Virtual Node)。
    //也可寫成render: function(h){ return h(App); } 
    //App為經vue-loader處理解析過的單檔元件(Single File Component)
    created: function () {

    }
}).$mount('#app');
