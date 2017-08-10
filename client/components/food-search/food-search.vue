<template>
      <div class='search-container'>
            <div class='search__input'></div>
            <div class='search__result-container'>
                  <div class='found-food' v-for='food in foundFood'>
                        <div class='found-food__checkbox'></div>
                        <div class='found-food__title'>{{ food.title }}
                        </div>
                        <div class='found-food__weight-input' @input='food.weight==$event.target.value'></div>
                        <div class='found-food__total-calories'> {{ food.weight*food.calories }}
                        </div>
                  </div>
            </div>
      </div>
</template>
