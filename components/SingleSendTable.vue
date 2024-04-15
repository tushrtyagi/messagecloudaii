<template>
    <div class="domain_list">
      <div class="row">
        
         
          <div class="d-inline-block ms-4">
      <NuxtLink to="/singleSendSettingspage">
        <button class="create_btn bg-aliceblue px-4 mt-1 text-white">+ ADD </button>
      </NuxtLink>
    </div>
        
  
        <div class="col-lg-12">
          <div class="filter mt-1">
            <div class="d-inline-block">
              <div class="search-wrapper">
                <img class="search-icon" src="../assets/image/searchgrey.svg" alt="Search icon" />
                <input type="text" class="form-control" placeholder="Search Send Name" />
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
  
            <div class="d-inline-block sortby ms-5">
          
            </div>
          </div>
        </div> 
  
        <div class="col-lg-12 pt-2">
          <div class="table_data mt-2 bg-white">
            <table class="table">
              <thead>
                <tr>
                  <th>Single Send Name</th>
                  <th>Delivered</th>
                  <th> Opens</th>
                  <th>Clicks</th>
                  <th>Unsubscribes</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    <NuxtLink to="/">{{ item['Domain'] }}</NuxtLink>
                  </td>
                  <td>
                    1
                  </td>
                  <td>
                    <span class="tab-val" >
                      {{ item['Verified Domain'] }}
                    </span>
                  </td>
                  <td>{{ item['Date'] }}</td>
                  <td> 1</td>
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
            Domain: "Untitled ",
            "Verified Domain": "-",
            Date: "1"
          },
          {
            Domain: "Untitled ",
            "Verified Domain": "1",
            Date: "1"
          },
          {
            Domain: "Test",
            "Verified Domain": "-",
            Date: "-"
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
  