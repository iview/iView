/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    history: true
});

router.map({
    '/index': {
        component: function (resolve) {
            require(['./routers/index.vue'], resolve);
        }
    },
    '/button': {
        component: function (resolve) {
            require(['./routers/button.vue'], resolve);
        }
    },
    '/page': {
        component: function (resolve) {
            require(['./routers/page.vue'], resolve);
        }
    },
    '/more': {
        component: function (resolve) {
            require(['./routers/more.vue'], resolve);
        }
    },
    '/layout': {
        component: function (resolve) {
            require(['./routers/layout.vue'], resolve);
        }
    },
    '/radio': {
        component: function (resolve) {
            require(['./routers/radio.vue'], resolve);
        }
    },
    '/msg': {
        component: function (resolve) {
            require(['./routers/msg.vue'], resolve);
        }
    },
    '/notice': {
        component: function (resolve) {
            require(['./routers/notice.vue'], resolve);
        }
    },
    '/tag': {
        component: function (resolve) {
            require(['./routers/tag.vue'], resolve);
        }
    },
    '/select': {
        component: function (resolve) {
            require(['./routers/select.vue'], resolve);
        }
    }
});

router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.afterEach(function (transition) {

});

router.redirect({
    '*': "/index"
});
router.start(App, '#app');
