<template>
    <div class="total-component">
        <p class="total-title">Total</p>
        <div class='total-container'>
            <div class="carbs-container">
                <div class="carbs__title">Carbohydrates</div>
                <div class="carbs__value">{{this.getCarbs}}</div>
            </div>
            <div class="prots-container">
                <div class="carbs__title">Proteins</div>
                <div class="carbs__value">{{this.getProts}}</div>
            </div>
            <div class="fats-container">
                <div class="carbs__title">Fats</div>
                <div class="carbs__value">{{this.getFats}}</div>
            </div>
            <div class="calories-container">
                <div class="carbs__title">Calories</div>
                <div class="carbs__value">{{this.getCalories}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            getCarbs: function(){
                return this.$store.getters.getTotalCarbs;
            },
            getProts: function(){
                return this.$store.getters.getTotalProts;
            },
            getFats: function(){
                return this.$store.getters.getTotalFats;
            },
            getCalories: function(){
                return this.$store.getters.getTotalCalories;
            },

        }
    }
</script>