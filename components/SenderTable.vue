<template>
    <div class="domain_list">
      <div class="row">
        <!-- <div class="d-inline-block ms-5 mx-5">
      <NuxtLink to="/sendercreate">
        <button class="create_btn bg-aliceblue px-4 mb-4 mt-3 text-white">+ ADD</button>
      </NuxtLink>
    </div> -->
<!--   
        <div class="col-lg-12">
          <div class="filter mt-1">
            <div class="d-inline-block">
              <div class="search-wrapper">
                <img class="search-icon" src="../assets/image/searchgrey.svg" alt="Search icon" />
                <input type="text" class="form-control" placeholder="Search Domain" />
              </div>
            </div>
            <div class="d-inline-block ms-5">
              <select class="form-select">
                <option value="" disabled selected>Domain Status</option>
                <option value="Verified">All</option>
                <option value="Verified">Verified</option>
                <option value="Unverified">Unverified</option>
                <option value="">Bounce</option>
              </select>
            </div>
  
            <div class="d-inline-block sortby ms-5">
              <datepicker
      v-model="selected"
      :locale="locale"
      :upperLimit="to"
      :lowerLimit="from"
      :clearable="true"
    /> -->
            <!-- </div> -->
          <!-- </div>
        </div>  -->
  
        <div class="col-lg-12 mt-4 ">
          <div class="table_data my-2  bg-white">
            <table class="table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    <NuxtLink to="/editsender">{{ item['Domain'] }}</NuxtLink>
                  </td>
                  <td>
                    {{ item['Domain'] }}
                  </td>
                  <td>
                    <span class="tab-val" :style="getStatusBackgroundStyle(item['Verified Domain'])">
                      {{ item['Verified Domain'] }}
                    </span>
                  </td>
                  <td>{{ item['Date'] }}</td>
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
      @close="() => { visibleStaticBackdropDemo = false }" 
      aria-labelledby="StaticBackdropExampleLabel"
                  />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CButton, CTable } from "@coreui/vue";
  // import DatePicker from 'vue3-datepicker';
  // import 'vue3-datepicker/index.css';
  
  
  export default {
    components: { CTable, CButton},
    props: {
     
    },
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
            Domain: "abc.123@codalien.com",
            "Verified Domain": "Verified",
            Date: "   -   "
          },
          {
            Domain: "abc.123@gmail.com",
            "Verified Domain": "Unverified",
            Date: "   -   "
          },
          {
            Domain: "abc.123@codalien.com",
            "Verified Domain": "Verified",
            Date: "   -   "
          }
        ],
        selectedDate: [new Date(), new Date()],
        picker: {
          show: {
            calendar: false
          },
          firstDt: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
          todayDt: new Date()
        }
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
            lineHeight: "1.5em"
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
          lineHeight: "1.5em"
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
      }
    }
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
    .create_btn {
      padding: 13px 35px;
      font-size: 1rem;
      border-radius: 7px;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
      font-weight: 600;
    }
    .create_btn:hover {
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
  </style>
  