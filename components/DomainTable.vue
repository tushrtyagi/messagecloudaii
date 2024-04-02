<template>
  <div class="domain_list">
    <div class="row">
      <div class="domain-field bg-darkgrey mt-5 mb-4 mx-3 px-4">
        <div class="col-lg-12">
          <h4 class="mt-4 pl-3 text-customblack mb-4">Adding your {{ heading }}</h4>
        </div>
        <div class="col-lg-12 mb-3 ">
          <div class="create_domain mt-4 my-3 p-0 pr-4">
            <input
              class="text-black bg-white"
              type="text"
              placeholder="eg. sub.domain.com"
            />
            <router-link :to="{ path: '/verifydomain', query: { heading: heading } }">
              <button class="login_btn  bg-aliceblue ms-5 text-white ">+ ADD</button>
            </router-link>        
           
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="filter mt-1">
          <div class="d-inline-block">
            <h2>Filter Domains</h2>
            <div class="search-wrapper">
              <img class="search-icon" src="../assets/image/searchgrey.svg" alt="Search icon" />
              <input type="text" class="form-control" placeholder="e.g. test.codalien.com">
            </div>
          </div>
          <div class="d-inline-block ms-5">
            <h2> Domain Status</h2>
            <select class="form-select " placeholder="Verified,Bounce,Unverified">
              <option value="" disabled selected>All</option>
              <option value="Verified">All</option>
              <option value="Verified">Verified</option>
              <option value="Unverified">Unverified</option>
              <option value="">Bounce</option>
            </select>
          </div>
          <div class="d-inline-block ms-5 ">
            <h2>Sort By</h2>
            <!-- <div class="sort ">
            <DatePickerModal timeStamp @getDate="getDate" label="Select a date range" size="lg" class="mt-8" /> -->
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
  .create_domain {
    border-radius: 7px;
    border: 0px solid;

    input {
      border-radius: 7px;
    border: 1px solid rgba(2, 72, 123, 0.99);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
    padding: 15px 17px;
    margin-left: -2px;
    margin-top: -2px;
      &::placeholder {
        color: #bcbcbc;
        font-size: 13px;
        font-weight: 400;
      }
    }
    button {
      font-size: 17px;
      font-weight: 400;
      padding-left: 16px;
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
  .domain-field {
  width: 100%;
  height: 100%;
  background-color: #bcbcbc;
  border-radius: 14px;
  margin-left: 4px;
  
  h4{
    position: relative;
    left:20px;
    padding: 10px;
  }
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
</style>
