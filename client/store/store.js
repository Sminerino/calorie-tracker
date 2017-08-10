import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
      userIntakeList: [
            { 
                  title: 'Breakfast',
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

      ]
};

const mutations = {
      removeFood(state, payload) {
             state.userIntakeList[state.userIntakeList.indexOf(payload.intake_)]
            .foods.splice(state.userIntakeList[state.userIntakeList.indexOf(payload.intake_)]
            .foods.indexOf(payload.food_),1); 
      },
      addMockFood(state, intake) {
            state.userIntakeList[state.userIntakeList.indexOf(intake)].foods.push(
                  {
                              title: 'Oats',
                              weight: 110,
                              calories: 330,
                              carb: 66,
                              prot: 11,
                              fats: 2,

                  }); 
      },
      
};

const store = new Vuex.Store({
      state,
      mutations,

});

export default store;