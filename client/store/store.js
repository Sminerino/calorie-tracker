import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {
      userIntakeList: [
            { 
                  title: 'Breakfast',
                  searchEnabled:false,
                  foods: [{
                              title: 'Milk',
                              weight: 530,
                              calories: 53,
                              carb: 5,
                              prot: 3,
                              fats: 3,

                        },
                        {
                              title: 'Oatskies',
                              weight: 110,
                              calories: 330,
                              carb: 66,
                              prot: 11,
                              fats: 2,

                        },

                  ]
            },
            {
                  title: 'Lunch',
                searchEnabled:false,
                  foods: [{
                              title: 'Milk',
                              weight: 530,
                              calories: 53,
                              carb: 5,
                              prot: 3,
                              fats: 3,

                        },
                        {
                              title: 'Oats',
                              weight: 110,
                              calories: 330,
                              carb: 66,
                              prot: 11,
                              fats: 2,

                        },

                  ]
            },
            {
                  title: 'Dinner',
                searchEnabled:false,
                  foods: [{
                              title: 'Milk',
                              weight: 530,
                              calories: 53,
                              carb: 5,
                              prot: 3,
                              fats: 3,

                        },
                        {
                              title: 'Oats',
                              weight: 110,
                              calories: 330,
                              carb: 66,
                              prot: 11,
                              fats: 2,

                        },

                  ]
            },

      ],

};

const mutations = {
      removeFood(state, payload) {
             state.userIntakeList[state.userIntakeList.indexOf(payload.intake_)]
            .foods.splice(state.userIntakeList[state.userIntakeList.indexOf(payload.intake_)]
            .foods.indexOf(payload.food_),1); 
      },

      addFood(state, payload) {
          state.userIntakeList[payload._intakeIndex].foods.push(...payload._addList);
          state.userIntakeList[payload._intakeIndex].searchEnabled=false;
      }
      
};
const actions = {
    findFood({state}, value) {

    }
}

const store = new Vuex.Store({
      state,
      mutations,

});

export default store;