import Vue from 'vue';
import store from './store/store';
import workspace from './components/workspace/workspace';
import calendar from './components/calendar/calendar';
import total from './components/total/total';
import router from './router';
import { sync } from 'vuex-router-sync';
import App from './components/app';

//import './styles/component-layout.scss';

sync(store, router);

const app = new Vue({
    router,
    store,
    ...App
});

export { app, router, store }