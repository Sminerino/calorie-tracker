<template>
      <div class='search-container'>
            <input class='search__input' @input="findFood($event.target.value)" placeholder="Food"></input>
            <div class="search__content-wrapper">
                  <div class='search__result-container' v-if="foundFood.length>0">
                        <div class='found-food' v-for='food in foundFood'>
                              <input type="checkbox" class='found-food__checkbox' v-model="food.checked" @click="toggleCheck(food)"></input>
                              <div class='found-food__title'>{{ food.title }}
                              </div>
                              <input class='found-food__weight-input' v-model.number="food.weight" placeholder="100" type="number"></input>
                              <div class='found-food__total-calories'> {{ food.weight*food.calories + ' cal' }}
                              </div>
                        </div>
                  </div>
                  <div class="search__done-button-container"><div class="search__done-button" @click="addFood">Add</div></div>
            </div>
      </div>
</template>

<script>
      export default {
            computed: {

            },
            props:['intakeIndex'],
            methods: {
                  findFood: function(value) {
                      this.$store.dispatch('findFood', value).then((res) => {
                        this.foundFood=res;
                      });
                  },

                  toggleCheck: function(food) {
                      if (food.checked == true) {
                          this.checkedList.push(food);
                      }
                      else {
                          this.checkedList.splice(this.checkedList.indexOf(food), 1);
                      }
                  },
                  addFood: function() {
                        this.$store.commit('addFood', { _intakeIndex:this.intakeIndex, _addList:this.checkedList });

                  }

            },
           data: function() {
               return ({
                   checkedList: [],
                   foundFood: [{title:'kappa', calories: 23, weight: 2}],

               });
           }

      }
</script>