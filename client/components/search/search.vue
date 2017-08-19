<template>
      <div class='search-container'>
            <input lazy class='search__input' @input="findFood($event.target.value)" placeholder="Food"></input>
            <div class="search__content-wrapper">
                  <div class='search__result-container'>
                              <div class='found-food' v-for='food in getCurrentSearch'>
                                    <div class="found-food__title-wrapper">
                                          <input type="checkbox" class='found-food__checkbox' v-model="food.checked" @click="toggleCheck(food)"></input>
                                          <div class='found-food__title'>{{ food.title }}
                                          </div>
                                    </div>
                                    <div class="found-food__calories-wrapper">
                                          <input class='found-food__weight-input' v-model.number="food.weight" placeholder="100" type="number"></input>
                                          <div class='found-food__total-calories'> {{ Math.round(food.weight/100*food.calories) + ' cal' }}
                                          </div>
                                    </div>
                              </div>
                  </div>
                  <div class="search__done-button-container"><div class="search__done-button" @click="addFood">Add {{this.checkedList.length>0 ? this.checkedList.length : ''}}</div></div>
            </div>
      </div>
</template>

<script>
      export default {
            computed: {
                  getCurrentSearch: function() {
                      return this.$store.state.currentSearch;
                  }
            },
            props:['intakeID'],
            methods: {
                  findFood: function(value) {
                      this.$store.dispatch('findFood', value);
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
                        this.$store.dispatch('addFood', { _intakeID:this.intakeID, _addList:this.checkedList });

                  },


            },
           data: function() {
               return ({
                   checkedList: [],
                   foundFood: [],

               });
           }

      }
</script>