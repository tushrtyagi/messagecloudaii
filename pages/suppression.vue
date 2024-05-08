<template>
  <div class="home_page bg-sidegrey pb-5 h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container sending_domain_container">
            <div class="sub_section sending_domain_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>
                      <CBreadcrumbItem active>Suppressions</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-white">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="suppression_box bg-white">
                      <h2 class="text-customblack w-100 d-block">Suppressions</h2>
                      <div class="d-flex align-items-center">
                        <div class="search-wrapper">
                          <img class="search-icon mt-3" src="../assets/image/searchgrey.svg" alt="Search icon" />
                          <input type="text" class="form-control px-5 mt-4 ms-1" placeholder="Search Type" />
                        </div>
                        <select class=" filter form-select mt-4 ms-4">
                          <option value="" disabled selected hidden>Filters</option>
                          <option value="Bounce">Bounce</option>
                          <option value="Spam Report">Spam Report</option>
                          <option value="Invalid">Invalid</option>
                          <option value="Blocks">Blocks</option>
                        </select>
                        <div class="d-inline-block mt-4 ms-4">
                          <div
                            class="dropdown-daterange"
                            style="cursor: pointer"
                            @click="showCalendar()"
                          >
                            <div v-if="selected['dateRange'] === 'All Time'">
                              All Time
                            </div>
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
                    <div class="table_data mt-4 mb-3 bg-white">
                      <table class="table table-striped" style="width: 100%">
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Reason</th>
                            <th>Date</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in items" :key="index">
                            <td>{{ item.Email }}</td>
                            <td>{{ item.Type }}</td>
                            <td>{{ item.Reason }}</td>
                            <td>{{ item.Date }}</td>
                            <td> 
                              <img src="../assets/image/delete.svg" alt="Delete Icon"  @click="() => { visibleStaticBackdropDemo = true }" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <DeleteModal
                        :backdrop="true"
                        :keyboard="false"
                        :visible="visibleStaticBackdropDemo"
                        @close="close" 
                        aria-labelledby="StaticBackdropExampleLabel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../stores/store";
import DatePicker from "~/components/DatePicker/DatePicker.vue";
import moment from "moment";
export default {
  setup() {

    return {
  
      store
    };
  },
  data() {
    return {
      visibleStaticBackdropDemo: false,
      items: [
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
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
    close(value) {
      this.visibleStaticBackdropDemo = value;
    },
    showCalendar() {
      this.picker.show.calendar = !this.picker.show.calendar;
      // if (this.picker.show.calendar === false) {
      //   this.openDropdown = null;
      // }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.right_panel {
  width: calc(100% - 80px);
  margin-left: 80px;
}
.shrink_screen.right_panel {
  width: calc(100% - 14rem);
  margin-left: 14rem;
}
.sending_domain_container {
  padding: 0px 31px 0px 0;
  .sending_domain_section {
    .suppression_box {
      .form-control {
        padding:0 px;
       &::placeholder{
        position:relative;
        left:0px;
       }
      }
    }
  }
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

input.control-type {
  border: 1px solid darkgrey;
  border-radius: 7px;
  padding: 4px 50px;
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
.filter{
  width: auto;
}
</style>
