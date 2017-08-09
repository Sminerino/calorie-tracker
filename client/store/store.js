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
            state.userIntakeList[payload.intake.indexOf].foods.splice(state.userIntakeList[payload.intake.indexOf].foods.indexOf(payload.food),1);
      },
      addMockFood(state, intake) { 
            state.userIntakeList[intake.indexOf].foods.push(
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