import Vue from 'vue';
import Router from 'vue-router';
import calendar from './../components/calendar/calendar';
import search from './../components/search/search';
import total from './../components/total/total';
import workspace from './../components/workspace/workspace'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: workspace
        },
        {
            name: 'calendar',
            path: '/calendar',
            component: calendar
        },
        {
            name: 'search',
            path: '/workspace/search',
            component: search
        },

        {
            name: 'total',
            path: '/total',
            component: total
        },

    ]
});
