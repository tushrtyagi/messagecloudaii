<template>
  <div class="domain_list">
    <div class="row">
      <!--          
          <div class="d-inline-block ms-4">
      <NuxtLink to="/singleSendSettingspage">
        <button class="add_btn bg-aliceblue px-4 mt-0 text-white">+ ADD </button>
      </NuxtLink>
    </div> -->

      <div class="col-lg-12">
        <div class="filter mt-1">
          <div class="d-inline-block">
            <div class="search-wrapper">
              <img
                class="search-icon"
                src="../assets/image/searchgrey.svg"
                alt="Search icon"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Search Send Name"
              />
            </div>
          </div>
          <div class="d-inline-block ms-5">
            <select class="form-select">
              <option value="" disabled selected>All</option>
              <option value="Verified">Draft</option>
              <option value="Verified">Scheduled</option>
              <option value="Unverified">Sent</option>
              <option value="">Expired</option>
            </select>
          </div>

          <div class="d-inline-block  ms-5">
            <div
              class="dropdown-daterange"
              style="cursor: pointer"
              @click="showCalendar()"
            >
              <div v-if="selected['dateRange'] === 'All Time'">All Time</div>
              <div v-else>
                {{ selectedDate[0].format("YYYY-MM-DD") }} -
                {{ selectedDate[1].format("YYYY-MM-DD") }}
              </div>
              <i class="fa fa-calendar"></i>
            </div>
            <div
              v-show="picker.show.calendar"
              class="row mt-1 border calander_picker"
            >
              <DatePicker
                v-model="selectedDate"
                :options="dateRange.options"
                :first-month="picker.firstDt"
                :last-month="picker.todayDt"
                :enable-second-calendar="true"
                :next-prev-icon="false"
                @onSelect="showCalendar"
                @onCancel="showCalendar"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12 mt-2 pb-4">
        <div class="table_data mt-2 bg-white">
          <table class="table">
            <thead>
              <tr>
                <th>Single Send Name</th>
                <th>Delivered</th>
                <th>Opens</th>
                <th>Clicks</th>
                <th>Unsubscribes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>
                  <NuxtLink to="/">{{ item["Domain"] }}</NuxtLink>
                </td>
                <td>1</td>
                <td>
                  <span class="tab-val">
                    {{ item["Verified Domain"] }}
                  </span>
                </td>
                <td>{{ item["Date"] }}</td>
                <td>1</td>
                <td>
                  <img
                    src="../assets/image/delete.svg"
                    alt="Delete Icon"
                    @click="
                      () => {
                        visibleStaticBackdropDemo = true;
                      }
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <DeleteModal
            :backdrop="true"
            :keyboard="false"
            :visible="visibleStaticBackdropDemo"
            @close="
              () => {
                visibleStaticBackdropDemo = false;
              }
            "
            aria-labelledby="StaticBackdropExampleLabel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CButton, CTable } from "@coreui/vue";
import DatePicker from "./DatePicker/DatePicker.vue";
import moment from "moment";
// import DatePicker from 'vue3-datepicker';
// import 'vue3-datepicker/index.css';

export default {
  components: { CTable, CButton },
  props: {},
  data() {
    return {
      visibleStaticBackdropDemo: false,
      time0: null,
      time1: null,
      time2: null,
      time3: null,
      visibleLiveDemo: false,
      columns: ["Domain", "Verified Domain", "Date"],
      items: [
        {
          Domain: "Untitled ",
          "Verified Domain": "-",
          Date: "1",
        },
        {
          Domain: "Untitled ",
          "Verified Domain": "1",
          Date: "1",
        },
        {
          Domain: "Test",
          "Verified Domain": "-",
          Date: "-",
        },
      ],
      dateRange: {
        name: "Date range",
        options: ["Today", "Yesterday", "Last Week", "Last Month", "All Time"],
      },
      selected: {
        dateRange: "Last Week",
      },
      picker: {
        show: {
          calendar: false,
        },
        todayDt: moment(),
        firstDt: moment().subtract(8, "M"),
      },
      selectedDate: [
        moment().subtract(7, "days").startOf("day"),
        moment().endOf("day"),
      ],
      
    };
  },
  methods: {
    getStatusBackgroundStyle(status) {
      if (status === "Verified") {
        return {
          width: "84px",
          height: "32px",
          background: "#5ae678",
          borderRadius: "100px",
          display: "inline-block",
          padding: "7px",
          textAlign: "center",
          lineHeight: "1.5em",
        };
      }
      return {
        width: "84px",
        height: "32px",
        background: "#fee57a",
        borderRadius: "100px",
        display: "inline-block",
        padding: "7px",
        textAlign: "center",
        lineHeight: "1.5em",
      };
    },
    closemodal(value) {
      this.visibleLiveDemo = value;
    },
    showCalendar() {
      this.picker.show.calendar = !this.picker.show.calendar;
    },
    closeDropDownAndCalender() {
      this.picker.show.calendar = false;
      this.openDropdown = 0;
    },
  },
};
</script>

<style lang="scss">
.domain_list {
  .domain-field {
    width: 98%;
    height: 100%;
    border-radius: 14px;
    margin-left: 4px;
    box-shadow: 1px 1px 1px 1px #d3d3d3;
  }
  .create_domain {
    border-radius: 7px;
    border: 0px solid;
    input {
      border-radius: 7px;
      border: 1px solid rgba(2, 72, 123, 0.99);
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
      padding: 12px 14px;
      margin-left: -2px;
      margin-top: -2px;
      &::placeholder {
        color: #bcbcbc;
        font-size: 13px;
        font-weight: 400;
      }
    }
    button {
      font-size: 15px;
      font-weight: 400;
      padding-left: 0px;
    }
  }
  .filter {
    h2 {
      color: black;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      margin: 26px 0;
      word-wrap: break-word;
    }
    .search-wrapper {
      position: relative;
      display: inline-block;
      .search-icon {
        position: absolute;
        top: 50%;
        left: 19px;
        transform: translateY(-50%);
        width: 18px;
        height: 18px;
        fill: #808080;
      }
    }
    select {
      option:disabled,
      option[selected] {
        font-size: 8px;
      }
    }
  }
  .table_data td {
    border: none;
    img {
      position: relative;
      left: 13px;
    }
    span {
      display: block;
      margin: auto;
      padding: 0 0;
    }
  }
  .form-control {
    padding: 5px 43px;
    text-align: left;
  }
  .form-control::placeholder {
    position: relative;
    left: 1px;
  }
  .verified-domain {
    width: 130px;
    height: 32px;
    background: #5ae678;
    border-radius: 100px;
    display: inline-block;
    padding: 7px;
    text-align: center;
    line-height: 1.5em;
  }
  .unverified-domain {
    background-color: #fee57a;
    color: white;
    border-radius: 100px;
    padding: 7px;
    text-align: center;
    line-height: 1.5em;
  }
  .sort {
    border: 0.2px lightgrey;
    border-radius: 5px;
  }
  .add_btn {
    padding: 10px 35px;
    font-size: 1rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    font-weight: 600;
  }
  .add_btn:hover {
    background-color: #6eb9e1 !important;
    color: white;
  }
  .sortby {
    .date-picker-wrapper {
      position: relative;
      display: inline-block;
      .calendar-icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        fill: #808080;
      }
    }
  }
}

.d-inline-block {
  display: inline-block;
}

.table_data td {
  border: none;
  text-align: center; /* Align the text to the right */
}
.table_data th {
  border: none;
  text-align: center; /* Align the text to the right */
}
.dropdown-daterange {
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-weight: 400;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  color: black;
  background: white;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 15px;
    width: 15px;
    object-fit: contain;
  }
}
.calander_picker {
  position: absolute;
  z-index: 9;
  // left: 15px;
  // top: 100%;
  background: white;

  .g-calendar .calendar-container .month-name {
    padding: 18px;
    font-size: 17px;
    display: flex;
    align-items: center;
  }

  .g-calendar .calendar-container .prev-icon {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid black;
  }

  .g-calendar .calendar-container .next-icon {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid black;
  }

  .g-calendar .calendar-container .day-name span {
    padding: 10px;
    color: black;
  }
}
.btn.btn-cancel {
  position: relative;
  padding: 7px 30px;
  font-size: 0.8rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
}
</style>
