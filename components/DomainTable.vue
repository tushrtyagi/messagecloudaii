<template>
  <div class="domain_list">
    <div class="row">
      <div class="domain-field bg-darkgrey mt-2 mb-4 mx-3 px-4">
          <div class="col-lg-12 ">
            <h4 class="mt-4 pl-3 text-customblack mb-4">Adding your {{heading}}</h4>
          </div>
          <div class="col-lg-12 mb-3 ">
            <div class="create_domain mt-4 my-4 p-0 pr-4">
              <input
                class="text-black bg-white"
                type="text"
                placeholder="eg. sub.domain.com"
              />
              <NuxtLink to ="/verifydomain">
              <button class="add_btn  bg-aliceblue ms-4 px-4  text-white ">+ ADD</button>
            </NuxtLink>
          
          </div>
          </div>
        </div>

      <div class="col-lg-12">
        <div class="filter mt-1">
          <div class="d-inline-block">
          
            <div class="search-wrapper">
              <img class="search-icon" src="../assets/image/searchgrey.svg" alt="Search icon" />
              <input type="text" class="form-control" placeholder="Search Domain">
            </div>
          </div>
          <div class="d-inline-block ms-5">
         
            <select class="form-select " >
              <option value="" disabled selected>Domain Status</option>
              <option value="Verified">All</option>
              <option value="Verified">Verified</option>
              <option value="Unverified">Unverified</option>
              <option value="">Bounce</option>
            </select>
          </div>
          <div class="d-inline-block ms-5 ">
            <!-- <h2>Sort By</h2> -->
            <!-- <div class="sort "> -->
            <!-- <DatePickerModal timeStamp @getDate="getDate" label="Select a date range" size="lg" class="mt-8" /> --> 
              <!-- <DatePickerModal/> -->
            <!-- </div>  -->
              
          </div>
        </div>
      </div>

      <!-- <div v-if="index > 0" class="dropdown-toggle" @click="toggleDropdown(index)">
                {{ selectedItems[index] }}
              </div>
              <div v-if="index > 0 && openDropdown === index" class="menu-dropdown"
                :onmouseleave="closeDropDownAndCalender">
                <div v-for="(option, optionIndex) in value.options" :key="optionIndex" class="option_menu"
                  @click="selectOption(index, option, key)">
                  {{ option }}
                </div>
              </div> -->

      <div class="col-lg-12 pt-2">
        <div class="table_data mt-4 bg-white">
          <table class="table">
            <thead>
              <tr>
                <th>Domain</th>
                <th> Domain Status</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td><NuxtLink to="/domaindetail">
                  {{ item['Domain'] }}
                </NuxtLink></td>
                <td>
                  <span class="tab-val" :style="getStatusBackgroundStyle(item['Verified Domain'])">
                    {{ item['Verified Domain'] }}
                  </span>
                </td>
                <td>{{ item['Date'] }}</td>
                <td><img src="../assets/image/delete.svg" alt="Delete Icon" @click="deleteItem(index)" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { CButton, CTable } from "@coreui/vue";


export default {
  components: { CTable,CButton },
  props: {
    heading: {
      type: String,
      default: "Domain"
    },},
  data() {
    return {
      visibleLiveDemo: false,
      columns: ["Domain", "Verified Domain", "Date"],
      items: [
        {
          'Domain': "codalien.com",
          "Verified Domain": "Verified",
          "Date":"Feb 26,2024"
        },
        // {
        //   "Domain": "codalien.com",
        //   "Verified Domain": "Unverified",
        //   "Date":"Feb 26,2024"
        // },
        // {
        //   'Domain': "codalien.com",
        //   "Verified Domain": "Verified",
        //   "Date":"Feb 26,2024"
        // },
        // {
        //   'Domain': "codalien.com",
        //   "Verified Domain": "Unverified",
        //   "Date":"Feb 26,2024"
        // },
      ],
    };
  },
  methods: {
    getStatusBackgroundStyle(status) {
      if (status === 'Verified' ) {
        return {
          width: '84px',
    height: '32px',
    background: '#5ae678',
    'border-radius': '100px',
    display: 'inline-block',
    padding: '7px',
    'text-align': 'center',
    'line-height': '1.5em',
         
        };
      }
      return {
          width: '84px',
          height: '32px',
          background: '#fee57a',
          'border-radius': '100px',
          display: 'inline-block', 
          padding: '7px', 
           'text-align': 'center',
          'line-height': '1.5em', 
         
        };
    },
    
    closemodal(value) {
      this.visibleLiveDemo = value;
    },
    
  }
}
</script>

<style lang="scss">
.domain_list {
  .domain-field {
  width: 98%;
  height: 100%;

  border-radius: 14px;
  margin-left: 4px;
  
 
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

  .filter{
    h2{
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
        left: 20px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
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
    img{
      position: relative;
      left:13px;
    }
    span{
      display:block;
      margin:auto;
      padding:0 0;
    }
  
}

.form-control{
  padding : 5px 155px;
  text-align: left;
}

.form-control::placeholder {
  position: relative;
  right:105px;
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
    background-color: 
    #fee57a;
    color: white;
    border-radius: 100px;
    padding: 7px;
    text-align: center;
    line-height: 1.5em;
  }
}

.sort {
  border: 0.2px lightgrey;
  border-radius: 5px;

}

.add_btn {
  padding: 13px 35px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
 
}
.add_btn:hover{
  background-color: #6eb9e1 !important;
  color:white;
}
</style>
