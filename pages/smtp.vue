<template>
  <div class="home_page bg-sidegrey pb-5 h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container">
            <div class="sub_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>
                      <CBreadcrumbItem href="/createdomain">Sender Identity</CBreadcrumbItem>
                      <CBreadcrumbItem active>SMTP</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-white">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="smptp_settings_container ">
                      <div class="row">
                        <div class="c">
                          <div class="smtp_info bg-white">
                            <div class="settings_title text-customblack bg-darkgrey d-flex justify-content-between align-items-center">
                              <div>
                                Your SMTP Settings
                              </div>
                              <div class="button-container d-flex align-items-center">
                                <button
                                  class="bg-aliceblue text-white login_btn mt-3"
                                  @click="() => { visibleLiveDemo = true; }"
                                >
                                  <label  for="">Generate SMTP Key</label>
                                </button>
                                <SmtpModal
                                  :backdrop="true"
                                  :keyboard="false"
                                  @closemodal="closemodal"
                                  :visible="visibleLiveDemo"
                                />
                              </div>
                            </div>
                            <div class="smtp_content bg-darkgrey">
                              <ul class="mb-0">
                                <li
                                  class="d-flex mb-3 text-customblack"
                                  v-for="(element, index) in elements"
                                  :key="index"
                                >
                                  <label>{{ element.key }}</label>{{ element.value }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 btn_container mt-5">
                    <div class="smtp_api">
                      <h3 class="text-customblack">Your SMTP Keys</h3>
                      <div class="table_data mt-4 mb-4 bg-white">
                        <table id="smtpTable" class="table table-striped" style="width:100%">
                          <thead>
                            <tr>
                              <th>SMTP key name</th>
                              <th>SMTP key value</th>
                              <th class="me-3">Status</th>
                              <th>Created on</th>
                              <th > </th>
                            </tr>
                          </thead>
                          <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item['SMTP key name'] }}</td>
        <td>{{ item['SMTP key value'] }}</td>
        <td>
          <span :style="getStatusBackgroundStyle(item.Status)">
            {{ item.Status }}
          </span>
        </td>
        <td>{{ item['Created on'] }}</td>
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
    @close="closedelete" 
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
  </div>

  
</template>

<script>
import { CButton } from "@coreui/vue";
import { store } from "../stores/store";

export default {
  components: { CButton },
  setup() {

    return {
      visibleStaticBackdropDemo: false,
 
      store,
      visibleLiveDemo: false,
  
      columns: ["SMTP key name", "SMTP key value", "Status", "Created on", "Delete"],
      items: [
        {
          "SMTP key name": "abc test",
          "SMTP key value": "**********cD55oB",
          Status: "Active",
          "Created on": "21 nov 2023 9:10 am",
        },
        {
          "SMTP key name": "xyz test",
          "SMTP key value": "**********xyz123",
          Status: "InActive",
          "Created on": "21 nov 2023 9:10 am",
        },
        {
          "SMTP key name": "pqr test",
          "SMTP key value": "**********pqr789",
          Status: "Active",
          "Created on": "21 nov 2023 9:10 am",
        },
      ],
      elements: [
        { key: "SMTP Server", value: "smtp-relay.brevo.com" },
        { key: "Port", value: "587" },
        { key: "Login", value: "nisha.bhatt@codalien.com" },
      ],
    };
  },

  methods: {
    closemodal(value) {
      this.visibleLiveDemo = value;
      
    },
    closedelete(value) {
      this. visibleStaticBackdropDemo = value;
    },
    deleteItem(index) {
      
      console.log("Delete item at index", index);
    },
    getStatusBackgroundStyle(status) {
      if (status === 'Active' ) {
        return {
          width: '100%',
          height: '100%',
          background: '#5ae678',
          'border-radius': '100px',
          display: 'inline-block', 
          padding: '7px', 
           'text-align': 'center',
          'line-height': '1.5em', 
      
         
        };
      }
      return {
          width: '100%',
          height: '100%',
          background: '#fee57a',
          color:'black',
          'border-radius': '100px',
          display: 'inline-block', 
          padding: '7px', 
           'text-align': 'center',
          'line-height': '1.5em',
         
         
        };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";


.btn_container {
    position: relative;
    left: -4px;
}
.right_panel {
  width: calc(100% - 80px);
  margin-left: 80px;
}
.shrink_screen.right_panel {
  width: calc(100% - 14rem);
  margin-left: 14rem;
}



.smtp_api {
  margin-left: 5px;
  h3 {
    position: relative;
    left: 0px;
    padding-bottom: 10px;
  }
  button {
    font-size: 1.063rem;
    font-weight: 400;
  }
  button:hover {
    background-color: $darkcerulean;
  }// Ensures the span only takes the necessary width
  table{

  }
}
.status{
  width: '100%';
  height: '100%';
  border-radius: '100px';
  display: 'inline-block'; 
   padding: '2px';
}

.smptp_settings_container {
  width: 100%;
  .smtp_info {
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 0.5 solid #d9d9d9;
    .settings_title {
      font-size: 15px;
      font-weight: 600;
      padding: 9px 35px;
      border-radius: 7px 7px 0 0;
    }
    .smtp_content {
      padding: 0px 35px 10px;
      li {
        font-size: 15px;
        font-weight: 400;
        label {
          width: 200px;
        }
      }
    }
  }
}

.login_btn {
  width: 211px;
  height: 50px;
  label {
    font-size: 15px;
  }
}


.table_data img {
  position: relative;
  left:12px;
}
</style>
