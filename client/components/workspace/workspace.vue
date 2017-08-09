<template>
<div class='container'>
      <div class='intake intake_type_breakfast' v-for='intake in getUserIntakeList'>
            <p class='intake__title'>{{ intake.title }}</p>
            <div class='intake__food-tiles-container'>
                  <div class='intake__column-headers'>
                        <div class = 'intake__amount-headers'>
                              <p class='intake__column intake__column_type_weight'>g</p>
                              <p class='intake__column intake__column_type_calories'>Cal</p>
                        </div>
                        <div class='intake__composition-headers'>
                              <div class='intake__column intake__column_type_carb'>Carb</div>
                              <div class='intake__column intake__column_type_carb'>Prot</div>
                              <div class='intake__column intake__column_type_carb'>Fats</div>
                        </div>
                  </div>
                  <div class='food-tile' v-for='food in intake.foods'>
                        <div class='food-tile__title'>{{ food.title }}
                        </div>
                        <div class='food-tile__amount'>
                              <div class='food-tile__weight'>{{ food.weight }}
                              </div>
                              <div class='food-tile__calories'>{{ food.calories/100*food.weight }}
                              </div>
                        </div>
                        <div class='food-tile__composition'>
                              <div class='food-tile__carb'>{{ food.carb/100*food.weight }}
                              </div>
                              <div class='food-tile__prot'>{{ food.prot/100*food.weight }}
                              </div>
                              <div class='food-tile__fats'>{{ food.fats/100*food.weight }}
                              </div>
                        </div>
                  </div>

                  <div class='intake__add-button-container'>
                  <div class='intake__add-button' @click='addMockFood(intake)'>+</div>
                  </div>

          </div>
        </div>
      </div>
</template>

<script>
      export default {
            computed: {
                  getUserIntakeList: function(){
                        return this.$store.state.userIntakeList;
                  },
                  
            },
            methods: {
                  addMockFood: function (city) {
                              this.$store.commit('addMockFood', intake);
                        },
                  removeFoodFromIntake: function (intake, food) {
                              this.$store.commit('removeFood', { intake:(intake), food:(food), });
                        }
            }
      }
</script>