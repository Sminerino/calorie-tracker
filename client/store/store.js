import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Config from './../../config.json';
Vue.use(Vuex);

let host;
if (Config.hasOwnProperty('apiServer')) {
    host = `${Config.apiServer.host}:${Config.apiServer.port}`;
} else {
    host = '';
}

const state = {
      userIntakeList: [

      ], //id, title
      userFoodList: [], //id, title, calories, carbs, prots, fatgs, weight, intakeID
      currentSearch: [], //id, title, calories, carbs, prots, fats, weight
      currentDate: Date(),

      userIntakeListIdDictionary: [],

};

const getters = {
    getTotalCarbs: function() {
        let carbs=0;
        for (let i=0;i<state.userIntakeList.length;i++)
        {
            for(let j=0;j<state.userIntakeList[i].food.length;j++)
                carbs+=state.userIntakeList[i].food[j].carbs;
        }
        return carbs;
    },
    getTotalProts: function() {
        let prots=0;
        for (let i=0;i<state.userIntakeList.length;i++)
        {
            for(let j=0;j<state.userIntakeList[i].food.length;j++)
                prots+=state.userIntakeList[i].food[j].prots;
        }
        return prots;
    },
    getTotalFats: function() {
        let fats=0;
        for (let i=0;i<state.userIntakeList.length;i++)
        {
            for(let j=0;j<state.userIntakeList[i].food.length;j++)
                fats+=state.userIntakeList[i].food[j].fats;
        }
        return fats;
    },
    getTotalCalories: function() {
        let calories=0;
        for (let i=0;i<state.userIntakeList.length;i++)
        {
            for(let j=0;j<state.userIntakeList[i].food.length;j++)
                calories+=state.userIntakeList[i].food[j].calories;
        }
        return calories;
    }
};

const mutations = {
      removeFood(state, food) {
          let index=state.userIntakeList
          .findIndex(intake => intake.id == food.intakeID);
          state.userIntakeList[index].food.splice(state.userIntakeList[index].food.indexOf(food), 1);
          axios.delete( host+'/userFoods/'+food.id );
      },
      setCurrentSearch(state, foundFood) {
            state.currentSearch=[];
            state.currentSearch=foundFood;
      },

      setUserFoodList(state, data) {
        state.userFoodList=data;
          function addFoodToIntakeList(element, index, array) {
              state.userIntakeList[state.userIntakeListIdDictionary[element.intakeID]].food.push(element);
          }
          state.userFoodList.forEach(addFoodToIntakeList);
      },
      setUserIntakeList(state, data) {
          state.userIntakeList = data;
          state.userIntakeList.forEach(( (element, index, array) => { state.userIntakeListIdDictionary[element.id]=index; } ))
      },

      setSearchNotFound(state) {
          state.currentSearch=[];
      },
      addFoodToList(state, {_intakeID, _addList})
      {
          function addToUserFoodList(element, index, array) {
              element.intakeID=state.userIntakeList[_intakeID].id;
              state.userIntakeList[_intakeID].food.push(element);
          }
          _addList.forEach(addToUserFoodList);
          state.userIntakeList[_intakeID].searchEnabled=false;
      },
      changeDate(state, date) {
          state.currentDate=date;
      }
      
};
const actions = {
    getUserIntakeList( {commit} ) {
        axios.get( host+'/intake').
            then((res) => {
            commit('setUserIntakeList', res.data);
            dispatch('getUserFoodList');
        });
    },
    getUserFoodList( {commit} ) {
        let date=new Date(state.currentDate);
        axios.get(host+'/userFoods?date='+parseInt(''+date.getDate()+(date.getMonth()+1)+date.getFullYear())).
            then((res) => { commit('setUserFoodList', res.data); });
    },
    findFood({commit}, value ) {
        if(value.length>0)
        axios.get(host+'/food?title_like='+value).
            then((res) => { commit('setCurrentSearch', res.data); });
    },
    addFood({commit}, {_intakeID, _addList } ) {
        commit('addFoodToList', {_intakeID, _addList});
        let date=new Date(state.currentDate);
        function axPostToFile(item) {
            axios.post(host+'/userFoods', {
                title:item.title, intakeID:item.intakeID, weight:item.weight,
                calories:item.calories, carbs:item.carbs, prots:item.prots,
                fats:item.fats, date:parseInt(''+date.getDate()+(date.getMonth()+1)+date.getFullYear())
            });
        }
        _addList.forEach(axPostToFile);
    },
}

const store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters,

});

export default store;