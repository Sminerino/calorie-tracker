<template>
    <div class='calendar__container'>
        <div class="calendar__header">
            <div class="calendar__month-change-button" @click="setMonthBack()"> < </div>
            <p class="calendar__title" > {{ getCurrentMonthName + ' \'' + currentYear.toString().substr(2)}}</p>
            <div class="calendar__month-change-button" @click="setMonthForward()"> > </div>
        </div>
        <div class="calendar__tiles-container">
            <div class='calendar__cell'
                 v-for="cell in this.cells"
                 @click="setCurrentDate(cell)"
                 v-bind:class="{'calendar__cell_past':cell.past,
                                'calendar__cell_current':cell.current}">
                {{ cell.value }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                numberOfColumns:5,
                currentDate: new Date(),
                cells:[],

            }
        },
        props:['initialDate'],
        computed: {
            getNumberOfRows: function() {
                return Math.ceil(this.getNumberOfDays/this.numberOfColumns);
            },
            getNumberOfDays: function() {
                return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, 0).getDate();
            },
            getCurrentMonthName: function() {
                const months=['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                return months[this.currentDate.getMonth()];
            },
            getCurrentYear: function() {
                return this.currentDate.getFullYear;
            },
            getCurrentDate: function() {
                return this.currentDate.getDate();
            },
            currentMonth: {
                get: function() {
                    return this.currentDate.getMonth();
                },
                set: function(value) {
                    let date=this.currentDate;
                    date.setMonth(value);
                    this.currentDate = new Date(date);
                    this.createRowsColumnsArray();

                }
            },
            currentDay: {
                get: function() {
                    return this.currentDate.getDate();
                },
                set: function(value) {
                    let date=this.currentDate;
                    date.setDate(value);
                    this.currentDate=new Date(date);
                }
            },
            currentYear: {
                get: function() {
                    return this.currentDate.getFullYear();
                },
                set: function(value) {
                    let date=this.currentDate;
                    date.setFullYear(value);
                    this.currentDate=new Date(date);
                }
            },

        },
        methods: {
            createRowsColumnsArray: function() {
                this.cells=[];
                let dayNumber=1;
                for(let i=0;i<this.getNumberOfDays;i++) {
                    this.cells.push({value: dayNumber, index: i});
                    dayNumber++;
                };
            },
            setCurrentDate: function(cell) {
                this.cells.forEach((element)=>{element.current=false});
                this.$set(cell,'current',true);
                this.currentDay=cell.value;
                this.cells.forEach((element, ...rest) => { if(element.index < cell.index)
                                                                this.$set(element,'past',true)
                                                           else
                                                                this.$set(element,'past',false) });
                this.$emit('dateChanged', this.currentDate);
            },
            setMonthBack: function() {
                this.currentMonth=this.currentDate.getMonth()-1;
                this.setCurrentDate(this.cells[this.cells.length-1]);
            },
            setMonthForward: function() {
                this.currentMonth=this.currentMonth+1;
                this.setCurrentDate(this.cells[0]);
            }

        },
        mounted: function() {
            this.createRowsColumnsArray()
            this.setCurrentDate(this.cells[this.currentDate.getDate()-1]);
        },

    }
</script>