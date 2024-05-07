<!-- eslint-disable vue/custom-event-name-casing -->
<template>
    <div :class="calendarClass">
      <div class="menu_div">
      <div v-for="(option, optionIndex) in options" :key="optionIndex" class="date_option"
                 @click="$emit('callSelected', 0, option, 'dateRange')">
                  {{ option }}
       </div>
      </div>
      <hr>
      <div :class="calendarContainerClass">
        <div
          v-for="(data, dataIdx) in monthsData"
          :key="'month_data' + dataIdx"
          :class="data.classes"
        >
          <div class="calendar-header">
            <div class="month-name">
              <template v-if="dataIdx == 0">
                <span
                  @click="movePrevMonth()"
                  class="prev-icon"
                  v-if="nextPrevIcon"
                  :class="{ disabled: isPrevMonthDisabled }"
                >
                </span>
                <span @click="movePrevMonth()" class="prev-text" v-else>
                  PREV
                </span>
              </template>
  
              <span class="month-text"> {{ data.monthName }} </span>
              <template
                v-if="(!enableSecondCalendar && dataIdx == 0) || dataIdx == 1"
              >
                <span
                  @click="moveNextMonth()"
                  class="next-icon"
                  v-if="nextPrevIcon"
                  :class="{ disabled: isNextMonthDisabled }"
                >
                </span>
                <span @click="moveNextMonth()" class="next-text" v-else>
                  NEXT
                </span>
              </template>
            </div>
            <div class="day-name">
              <span v-for="(day, index) in daysName" :key="'date_name' + index">
                {{ day }}
              </span>
            </div>
          </div>
          <div class="calendar-dates">
            <template
              v-for="dateRowIdx in data.calendarRows"
              :key="'date_row_' + dataIdx + dateRowIdx"
            >
              <div class="date-row">
                <template
                  v-for="(dt, index) in data.dates.slice(
                    7 * (dateRowIdx - 1),
                    7 * dateRowIdx
                  )"
                >
                  <template v-if="typeof dt === 'object'">
                    <div
                      class="date"
                      :class="{
                        'date-highlighted': dt.highlighted,
                        'date-selected': dt.selected,
                        'date-disabled': dt.isDisabled,
                        'date-today': dt.isToday,
                        'date-selected-start': dt.startDateSelected,
                        'date-selected-end': dt.endDateSelected,
                      }"
                      :key="'calendar_dates' + dateRowIdx + index"
                      @click="onSelectDate(dt)"
                      @mouseover="hoverDate(dt)"
                    >
                      <span>
                        {{ dt.dateNumber }}
                      </span>
                    </div>
                  </template>
                  <div
                    v-else
                    :key="'blank_days' + dateRowIdx + index"
                    class="blank-day"
                  >
                    <!-- <span ></span> -->
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div :class="calendarFooterClass">
        <div class="calendar-actions">
          <button
            class="btn btn-cancel"
            :class="btnCancelClass"
            @click="clickCancel"
          >
            {{ btnCancelText || "Cancel" }}
          </button>
          <button
            class="btn  btn-cancel"
            :class="btnClearClass"
            @click="clickClear"
          >
            {{ btnClearText || "Clear" }}
          </button>
        </div>
      </div>
    </div>
  </template>
    <script>
  import moment from "moment/moment";
 
  
  export default {
    props: {
      modelValue: {
        type: [Date, Object, String],
        default: null,
      },
      startMonth: {
        type: [Date, Object, Array, String],
        default: null,
      },
      isRange: {
        type: Boolean,
        default: true,
      },
      enableSecondCalendar: {
        type: Boolean,
        default: true,
      },
      givenDateFormat: {
        type: String,
        default: null,
      },
      monthFormat: {
        type: String,
        default: "MMM",
      },
      givenDays: {
        type: Array,
        default: null,
      },
      calendarClass: {
        type: String,
        default: "g-calendar",
      },
      calendarContainerClass: {
        type: String,
        default: "calendar-container",
      },
      calendarFooterClass: {
        type: String,
        default: "calendar-footer",
      },
      currentCalendarClass: {
        type: String,
        default: "current-calendar",
      },
      nextCalendarClass: {
        type: String,
        default: "next-calendar",
      },
      btnCancelClass: {
        type: String,
        default: null,
      },
      btnClearClass: {
        type: String,
        default: null,
      },
      btnCancelText: {
        type: String,
        default: null,
      },
      btnClearText: {
        type: String,
        default: null,
      },
      nextPrevIcon: {
        type: Boolean,
        default: false,
      },
      disabledDates: {
        type: Array,
        default: null,
      },
      disabledFromTo: {
        type: Object,
        default: () => {
          return null;
        },
      },
      disabledStartDates: {
        type: Array,
        default: null,
      },
      disabledStartFromTo: {
        type: Object,
        default: () => {
          return null;
        },
      },
      disabledEndDates: {
        type: Array,
        default: null,
      },
      disabledEndFromTo: {
        type: Object,
        default: () => {
          return null;
        },
      },
      isTodayHighlight: {
        type: Boolean,
        default: true,
      },
      lastMonth: {
        type: String,
        default: null,
      },
      firstMonth: {
        type: String,
        default: null,
      },
      options:{
        type: Array,
        default: null,
      }
    },
    data() {
      return {
        start_date: new Date(),
        current_date: new Date(),
        selected_date: null,
        selected: {
          start_date: null,
          end_date: null,
        },
        start_date_selected: false,
      };
    },
    computed: {
      currentMonth() {
        return moment(this.current_date)
          .subtract(1, "M")
          .format(this.monthFormat || "MMMM");
      },
      nextMonth() {
        return moment(this.current_date).format(this.monthFormat || "MMMM");
      },
      daysName() {
        if (
          this.givenDays &&
          Array.isArray(this.givenDays) &&
          this.givenDays.length
        ) {
          return this.givenDays;
        }
        return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      },
      totalCalendarRows() {
        return Math.ceil(this.dates.length / 7);
      },
      nextCalendarRows() {
        return Math.ceil(this.nextMonthDates.length / 7);
      },
      blankDays() {
        let firstDay = moment(this.current_date)
          .subtract(1, "M")
          .startOf("month")
          .day();
        if (firstDay === 0) {
          firstDay = 7;
        }
        firstDay = firstDay - 1;
        if (firstDay < 0) {
          firstDay = 0;
        }
        return firstDay;
      },
      nextMonthBlankDays() {
        let firstDay = moment(this.current_date).startOf("M").day();
        if (firstDay === 0) {
          firstDay = 7;
        }
        firstDay = firstDay - 1;
        if (firstDay < 0) {
          firstDay = 0;
        }
        return firstDay;
      },
      nextMonthDates() {
        let startDate = moment(this.current_date).clone().startOf("month");
        let lastDate = startDate.clone().endOf("month");
        if (this.nextMonthBlankDays > 0) {
          return Array(this.nextMonthBlankDays).concat(
            this.getDates(startDate, lastDate)
          );
        } else {
          return this.getDates(startDate, lastDate);
        }
      },
      dates() {
        let startDate = moment(this.current_date)
          .subtract(1, "M")
          .startOf("month");
        let lastDate = moment(this.current_date).subtract(1, "M").endOf("month");
        if (this.blankDays > 0) {
          return Array(this.blankDays).concat(this.getDates(startDate, lastDate));
        } else {
          return this.getDates(startDate, lastDate);
        }
      },
      highlightedDates() {
        let dates = [];
        if (this.selected && this.selected.start_date && this.selected.end_date) {
          const startDate = this.selected.start_date.clone();
          const endDate = this.selected.end_date.clone();
          if (startDate.isBefore(endDate)) {
            let idxDate = startDate;
            while (idxDate.isSameOrBefore(endDate)) {
              dates.push(idxDate.clone().format("D-M-YYYY"));
              idxDate.add(1, "days");
            }
          } else {
            let idxDate = endDate.clone();
            while (idxDate.isSameOrBefore(startDate)) {
              dates.push(idxDate.clone().format("D-M-YYYY"));
              idxDate.add(1, "days");
            }
          }
          dates.shift();
          if (!this.start_date_selected && dates.length) {
            dates.pop();
          }
        }
        return dates;
      },
      monthsData() {
        let months = [
          {
            monthName: this.currentMonth,
            calendarRows: this.totalCalendarRows,
            dates: this.dates,
            classes: this.currentCalendarClass,
            isCurrentMonth: true,
          },
        ];
        if (this.enableSecondCalendar) {
          months.push({
            monthName: this.nextMonth,
            calendarRows: this.nextCalendarRows,
            dates: this.nextMonthDates,
            classes: this.nextCalendarClass,
            isNextMonth: true,
          });
        } else {
          months = [
            {
              monthName: this.nextMonth,
              calendarRows: this.nextCalendarRows,
              dates: this.nextMonthDates,
              classes: this.nextCalendarClass,
              isNextMonth: true,
            },
          ];
        }
        return months;
      },
      _disabledDates() {
        let disabledDates = [];
        if (
          this.disabledDates &&
          Array.isArray(this.disabledDates) &&
          this.disabledDates.length
        ) {
          disabledDates = this.transformDateIntoMoment(this.disabledDates);
        }
        if (
          this.isRange &&
          !this.start_date_selected &&
          this.disabledStartDates &&
          Array.isArray(this.disabledStartDates) &&
          this.disabledStartDates.length
        ) {
          disabledDates = disabledDates.concat(
            this.transformDateIntoMoment(this.disabledStartDates)
          );
        }
        if (
          this.isRange &&
          this.start_date_selected &&
          this.disabledEndDates &&
          Array.isArray(this.disabledEndDates) &&
          this.disabledEndDates.length
        ) {
          disabledDates = disabledDates.concat(
            this.transformDateIntoMoment(this.disabledEndDates)
          );
        }
        return disabledDates.map((d) => d.format("D-M-YYYY"));
      },
      isNextMonthDisabled() {
        if (this.lastMonth) {
          let currentDate = moment(this.current_date).clone();
  
          const lastMonth = this.transformDateIntoMoment(this.lastMonth);
          if (moment.isMoment(lastMonth)) {
            if (
              currentDate.isSameOrAfter(lastMonth, "month") &&
              currentDate.isSameOrAfter(lastMonth, "year")
            ) {
              return true;
            }
          }
        }
        return false;
      },
      isPrevMonthDisabled() {
        if (this.firstMonth) {
          let currentDate = moment(this.current_date).clone();
          if (this.enableSecondCalendar) {
            currentDate = currentDate.subtract(1, "M");
          }
          const firstMonth = this.transformDateIntoMoment(this.firstMonth);
          if (moment.isMoment(firstMonth)) {
            if (
              currentDate.isSameOrBefore(firstMonth, "month") &&
              currentDate.isSameOrBefore(firstMonth, "year")
            ) {
              return true;
            }
          }
        }
        return false;
      },
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        if (this.isRange) {
          if (
            this.modelValue &&
            Array.isArray(this.modelValue) &&
            this.modelValue.length == 2
          ) {
            const startDate = this.modelValue[0];
            const endDate = this.modelValue[1];
            if (moment.isMoment(startDate)) {
              this.selected.start_date = startDate.startOf("day");
            } else {
              if (
                this.givenDateFormat &&
                this.givenDateFormat !== null &&
                this.givenDateFormat !== ""
              ) {
                this.selected.start_date = moment(startDate).startOf("day");
              } else {
                this.selected.start_date = moment(
                  startDate,
                  this.givenDateFormat
                ).startOf("day");
              }
            }
            if (moment.isMoment(endDate)) {
              this.selected.end_date = endDate.startOf("day");
            } else {
              if (
                this.givenDateFormat &&
                this.givenDateFormat !== null &&
                this.givenDateFormat !== ""
              ) {
                this.selected.end_date = moment(
                  endDate,
                  this.givenDateFormat
                ).startOf("day");
              } else {
                this.selected.end_date = moment(endDate).startOf("day");
              }
            }
          }
        } else {
          if (this.modelValue) {
            const selectedDate = this.modelValue;
            if (moment.isMoment(selectedDate)) {
              this.selected_date = selectedDate.startOf("day");
            } else {
              if (
                this.givenDateFormat &&
                this.givenDateFormat !== null &&
                this.givenDateFormat !== ""
              ) {
                this.selected_date = moment(
                  selectedDate,
                  this.givenDateFormat
                ).startOf("day");
              } else {
                this.selected_date = moment(selectedDate).startOf("day");
              }
            }
          }
        }
        if (this.startMonth && this.startMonth !== null) {
          if (moment.isMoment(this.startMonth)) {
            this.current_date = this.startMonth.toDate();
          } else {
            if (
              this.givenDateFormat &&
              this.givenDateFormat !== null &&
              this.givenDateFormat !== ""
            ) {
              this.current_date = moment(this.startMonth, this.givenDateFormat)
                .startOf("day")
                .toDate();
            } else {
              this.current_date = moment(this.startMonth).startOf("day").toDate();
            }
          }
        }
      },
      onSelectDate(dt) {
        if (dt.isDisabled) {
          return;
        }
        if (this.isRange) {
          if (!this.start_date_selected) {
            this.start_date_selected = true;
            this.selected.end_date = null;
            this.selected.start_date = dt.date.clone();
          } else {
            this.start_date_selected = false;
            if (this.selected.start_date.isAfter(dt.date)) {
              this.selected.end_date = this.selected.start_date;
              this.selected.start_date = dt.date;
            } else {
              this.selected.end_date = dt.date.clone();
            }
            this.emitRangeDate();
          }
        } else {
          this.selected_date = dt.date;
          this.emitRangeDate();
        }
      },
      hoverDate(dt) {
        if (this.start_date_selected) {
          // if( this.selected.start_date.isAfter( dt.date ) ){
  
          this.selected.end_date = dt.date.clone();
          // }else{
          //     this.selected.end_date = this.selected.start_date;
          //     this.selected.start_date = dt.date;
          // }
        }
      },
      isStartDate(dt) {
        if (
          this.isRange &&
          this.selected.start_date &&
          this.selected.start_date.isSame(dt)
        ) {
          return true;
        }
        return false;
      },
      isEndDate(dt) {
        if (
          this.isRange &&
          !this.start_date_selected &&
          this.selected.end_date &&
          this.selected.end_date.isSame(dt)
        ) {
          return true;
        }
        return false;
      },
      isSelectedDate(dt) {
        if (
          !this.isRange &&
          this.selected_date &&
          this.selected_date.isSame(dt)
        ) {
          return true;
        }
        return false;
      },
      isHighlightedDate(dt) {
        if (
          this.highlightedDates &&
          this.highlightedDates.length &&
          this.highlightedDates.includes(dt.format("D-M-YYYY"))
        ) {
          return true;
        }
        return false;
      },
      getDates(startDate, lastDate) {
        let dates = [];
        while (startDate.isBefore(lastDate)) {
          var isHighlighted = this.isHighlightedDate(startDate);
          var isToday =
            this.isTodayHighlight && moment().startOf("day").isSame(startDate);
          var isStartDate = this.isStartDate(startDate);
          var isEndDate = this.isEndDate(startDate);
          var isSelected =
            this.isSelectedDate(startDate) || isStartDate || isEndDate;
          var isDisabled = this.isDisabledDate(startDate);
          let tmpDt = {
            date: startDate.clone(),
            dateNumber: startDate.format("D"),
            highlighted: isHighlighted,
            selected: isSelected,
            toDate: startDate.toDate(),
            isDisabled: isDisabled,
            isToday: isToday,
            startDateSelected: isStartDate,
            endDateSelected: isEndDate,
          };
          dates.push(tmpDt);
          startDate = startDate.add(1, "day");
        }
        return dates;
      },
      moveNextMonth() {
        if (this.isNextMonthDisabled) {
          return;
        }
        this.current_date = moment(this.current_date).add(1, "M").toDate();
      },
      movePrevMonth() {
        if (this.isPrevMonthDisabled) {
          return;
        }
        this.current_date = moment(this.current_date).subtract(1, "M").toDate();
      },
      emitRangeDate() {
        let selected;
        if (this.isRange) {
          selected = [this.selected.start_date, this.selected.end_date];
        } else {
          selected = this.selected_date;
        }
        // eslint-disable-next-line vue/custom-event-name-casing
        this.$emit("onSelect", selected);
        this.$emit("update:modelValue", selected);
      },
      clickClear() {
        if (this.isRange) {
          this.start_date_selected = false;
          this.selected.start_date = null;
          this.selected.end_date = null;
        } else {
          this.selected_date = null;
        }
        // eslint-disable-next-line vue/custom-event-name-casing
        this.$emit("clearDates");
      },
      clickCancel() {
        // eslint-disable-next-line vue/custom-event-name-casing
        this.$emit("onCancel");
      },
      transformDateIntoMoment(dates) {
        if (Array.isArray(dates)) {
          return dates.map((d) => {
            if (moment.isMoment(d)) {
              return d.startOf("day");
            } else {
              if (
                this.givenDateFormat &&
                this.givenDateFormat !== null &&
                this.givenDateFormat !== ""
              ) {
                return moment(d, this.givenDateFormat).startOf("day");
              } else {
                return moment(d).startOf("day");
              }
            }
          });
        } else {
          if (moment.isMoment(dates)) {
            return dates.startOf("day");
          } else {
            if (
              this.givenDateFormat &&
              this.givenDateFormat !== null &&
              this.givenDateFormat !== ""
            ) {
              return moment(dates, this.givenDateFormat).startOf("day");
            } else {
              return moment(dates).startOf("day");
            }
          }
        }
      },
      isInRangeFromTo(data, dt) {
        let fromDate = null;
        let toDate = null;
        if (data && typeof data == "object" && ("from" in data || "to" in data)) {
          if ("from" in data) {
            fromDate = this.transformDateIntoMoment(data.from);
          }
          if ("to" in data) {
            toDate = this.transformDateIntoMoment(data.to);
          }
        }
        if (fromDate && toDate) {
          if (dt.isSameOrAfter(fromDate) && dt.isSameOrBefore(toDate)) {
            return true;
          }
        } else {
          if (fromDate && dt.isSameOrAfter(fromDate)) {
            return true;
          }
          if (toDate && dt.isSameOrBefore(toDate)) {
            return true;
          }
        }
        return false;
      },
      isDisabledDate(dt) {
        if (
          this._disabledDates &&
          this._disabledDates.length &&
          this._disabledDates.includes(dt.format("D-M-YYYY"))
        ) {
          return true;
        }
        if (this.isInRangeFromTo(this.disabledFromTo, dt)) {
          return true;
        }
  
        if (this.isRange) {
          if (!this.start_date_selected) {
            if (this.isInRangeFromTo(this.disabledStartDates, dt)) {
              return true;
            }
          } else {
            if (this.isInRangeFromTo(this.disabledEndDates, dt)) {
              return true;
            }
          }
        }
        return false;
      },
    },
  };
  </script>
  <style lang="scss">
  .menu_div {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  left: 0;
  z-index: 1000;
  padding: 0px 10px;
  color: rgb(42, 184, 232);
}
.date_option{
   display: flex;
   margin: 0px;
   background-color: #dfeeff;
   cursor: pointer;
   border: 1px solid #0471d8;
   border-radius: 0.5rem;
   align-items: center;
   justify-content: center;
   text-align: center;
   width: 9vw;
   height: 8vh
}
.date_option:active{  
   background-color: #0471d8;
}
.date_option:hover {
    background-color:#0471d8;
    color: white
}
.btn-cancel{
  padding: 0.5rem 2.75rem;
  margin: 10px 5px
}
.g-calendar {
    .calendar-container {
      display: flex;
  
      .current-calendar,
      .next-calendar {
        flex: 1;
      }
      .current-calendar {
        padding-right: 5px;
        border-right: #999 1px solid;
      }
      .next-calendar {
        margin-left: 2px;
        padding-left: 2px;
      }
      .next-icon {
        width: 0; 
        height: 0; 
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        
        border-left: 12px solid grey;
      }
      .prev-icon {
        width: 0; 
        height: 0; 
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent; 
        
        border-right:12px solid grey;
      }
      .next-icon,
      .prev-icon{
        &.disabled{
          border-right-color: #a7a4a46b;
          border-left-color: #a7a4a46b;
        }
      }
      // width: 50%;
      .day-name {
        display: flex;
        justify-content: space-between;
        padding-top: 2px;
        padding-bottom: 2px;
        span {
          width: 100%;
          text-align: center;
          font-weight: 550;
        }
      }
      .month-name {
        display: flex;
        // justify-content: space-evenly;
        padding: 5px;
        font-size: 22px;
        font-weight: 480;
  
        .prev-icon{
          padding-left: 7px;
        } 
        .month-text {
          margin: auto;
          color: black;
        }
      }
      .calendar-dates .date-row {
        display: flex;
        // justify-content: space-between;
  
        .blank-day,
        .date {
          width: 14.28%;
          text-align: center;
          padding: 7px;
  
          &.date-selected-start {
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
          }
          &.date-selected-end {
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
          }
          &.date-disabled {
            background: #7a7575 ;
            color: #a19c9cf0 ;
          }
          &.date-today{
            background: #0471D8 ;
            color: rgb(45, 45,45) ;
            
          }
          &.date-highlighted {
            background: #DFEEFF !important;
            color: #0471D8 ;
          }
          &.date-selected {
            background: #0471D8 !important;
            color: #FFF;
          }
        }
      }
    }
  }
  </style>
  