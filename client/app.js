import Vue from 'vue';
import store from './store/store';
import workspace from './components/workspace/workspace';
import calendar from './components/calendar/calendar';
import total from './components/total/total';

//import './styles/component-layout.scss';

const app = new Vue({
      components: {
            workspace,
            calendar,
            total,

      },
      render(h) {
            return(
                  <div class='app__container'>
                        <div class='app__header'>whatever</div>
                        <div class='app__body'>
                              <workspace></workspace>
                              <div class='app__sidebar'>
                                    <calendar></calendar>
                                    <total></total>
                              </div>
                        </div>
                  </div>
            )
      },
      store
});
export { app };