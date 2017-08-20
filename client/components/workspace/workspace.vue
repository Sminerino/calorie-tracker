<template>
      <div class='app__container'>
            <div class='app__header'>Beautiful and sophisticated title</div>

            <div class='app__body'>

                  <div class='workspace-container'>
                        <div class='intake intake_type_breakfast' v-for='intake in getIntakeList'>
                              <p class='intake__title'>{{ intake.title }}</p>
                              <div class='intake__food-tiles-container'>
                                    <div class='intake__column-headers' v-if='intake.food.length>0'>
                                          <div class='intake__title-filler'></div>
                                          <div class = 'intake__amount-headers'>
                                                <p class='intake__column intake__column_type_weight'>g</p>
                                                <p class='intake__column intake__column_type_calories'>Cal</p>
                                          </div>
                                          <div class='intake__composition-headers'>
                                                <div class='intake__column intake__column_type_carb'>Carb</div>
                                                <div class='intake__column intake__column_type_prot'>Prot</div>
                                                <div class='intake__column intake__column_type_fats'>Fats</div>
                                          </div>
                                    </div>
                                    <div class='food-tile' v-for='food in intake.food' :class=" { 'food-tile_last':intake.food[intake.food.length-1]===food } " >
                                          <div class='food-tile__title'>{{ food.title }}
                                          </div>
                                          <div class='food-tile__remove-button' @click='removeFood(food)'>x</div>
                                          <div class='food-tile__amount'>
                                                <div class='food-tile__weight'>{{ food.weight }}
                                                </div>
                                                <div class='food-tile__calories'>{{ Math.round(food.calories/100*food.weight) }}
                                                </div>
                                          </div>
                                          <div class='food-tile__composition'>
                                                <div class='food-tile__carb'>{{ Math.round(food.carbs/100*food.weight) }}
                                                </div>
                                                <div class='food-tile__prot'>{{ Math.round(food.prots/100*food.weight) }}
                                                </div>
                                                <div class='food-tile__fats'>{{ Math.round(food.fats/100*food.weight) }}
                                                </div>
                                          </div>
                                    </div>

                                    <div class='intake__add-button-container' v-bind:class="{'intake__add-button-container_disabled': intake.searchEnabled}" @click='toggleSearch(intake)'>
                                          <div class='intake__add-button'>+</div>
                                    </div>

                                    <div class="search-outer" v-bind:class="{ 'search-outer_disabled': !intake.searchEnabled}"><search :intakeID="getIntakeList.indexOf(intake)"></search></div>

                              </div>

                        </div>

                  </div>
                  <div class='app__sidebar'>
                        <calendar></calendar>
                        <total></total>
                  </div>

            </div>
      </div>
</template>

<script>
      import axios from 'axios';
      import search from '../search/search';
      import total from '../total/total';
      import calendar from '../calendar/calendar';

      export default {
            computed: {
                  getIntakeList: function(){
                       return this.$store.state.userIntakeList;
                  },
                  
            },
            mounted: function() {
                this.$store.dispatch('getUserIntakeList');
                this.$store.dispatch('getUserFoodList');

            },
            methods: {
                  removeFood: function (food) {
                      this.$store.commit('removeFood', food);
                  },
                  toggleSearch: function (intake) {
                      this.getIntakeList.forEach((element, ...rest) => { this.$set(element,'searchEnabled',false) }) //this property is created after the mounting so we need to update component when it's present
                     if (!intake.searchEnabled)
                          intake.searchEnabled = true;
                     else intake.searchEnabled = false;
                  },


            },
            components: {
                'search': search,
                'total': total,
                'calendar': calendar
            },

      }
</script>