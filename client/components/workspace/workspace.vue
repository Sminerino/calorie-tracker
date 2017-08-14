<template>
      <div class='app__container'>
            <div class='app__header'>whatever</div>

            <div class='app__body'>

                  <div class='workspace-container'>
                        <div class='intake intake_type_breakfast' v-for='intake in getUserIntakeList'>
                              <p class='intake__title'>{{ intake.title }}</p>
                              <div class='intake__food-tiles-container'>
                                    <div class='intake__column-headers' v-if='intake.foods.length>0'>
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
                                    <div class='food-tile' v-for='food in intake.foods' :class=" { 'food-tile_last':intake.foods[intake.foods.length-1]===food } " >
                                          <div class='food-tile__title'>{{ food.title }}
                                          </div>
                                          <div class='food-tile__remove-button' @click='removeFood(intake, food)'>x</div>
                                          <div class='food-tile__amount'>
                                                <div class='food-tile__weight'>{{ food.weight }}
                                                </div>
                                                <div class='food-tile__calories'>{{ Math.round(food.calories/100*food.weight) }}
                                                </div>
                                          </div>
                                          <div class='food-tile__composition'>
                                                <div class='food-tile__carb'>{{ Math.round(food.carb/100*food.weight) }}
                                                </div>
                                                <div class='food-tile__prot'>{{ Math.round(food.prot/100*food.weight) }}
                                                </div>
                                                <div class='food-tile__fats'>{{ Math.round(food.fats/100*food.weight) }}
                                                </div>
                                          </div>
                                    </div>

                                    <div class='intake__add-button-container' v-bind:class="{'intake__add-button-container_disabled': intake.searchEnabled}" @click='toggleSearch(intake)'>
                                          <div class='intake__add-button'>+</div>
                                    </div>

                                    <div class="search-outer" v-bind:class="{ 'search-outer_disabled': !intake.searchEnabled}"><search :intakeIndex="getUserIntakeList.indexOf(intake)"></search></div>

                              </div>

                        </div>
                  </div>
                  <div class='app__sidebar'>
                        <div class='calendar-temp'></div>
                        <div class='total-temp'></div>
                  </div>

            </div>
      </div>
</template>

<script>
      import search from '../search/search';
      export default {
            computed: {
                  getUserIntakeList: function(){
                        return this.$store.state.userIntakeList;
                  },
                  
            },
            methods: {
                  addMockFood: function (intake) {
                              this.$store.commit('addMockFood', intake);
                  },
                  removeFood: function (intake, food) {
                              this.$store.commit('removeFood', { intake_:intake, food_:food, });
                  },
                  toggleSearch: function (intake) {
                      if (intake.searchEnabled == false)
                          intake.searchEnabled = true;
                      else intake.searchEnabled = false;
                  },

            },
            components: {
                'search': search
            },
          data: {
                kik: true
          }
      }
</script>