<template>
  <div class="home_page bg-sidegrey pb-5 vh-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container api_container">
            <div class="sub_section api_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/">
                       
                          <img src="../assets/image/home_icon (1).svg" alt="configuration" />
                        
                        </CBreadcrumbItem>
                      
                      <CBreadcrumbItem href="/createdomain">SenderSetup</CBreadcrumbItem>
                      <CBreadcrumbItem active>API key</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-white">
                <div class="row mb-5">
                  <div class="col-lg-12">
                    <div class="user_api d-flex align-items-center justify-content-between bg-white">
                      <h3 class="text-customblack mb-4 ms-5">Your API Keys</h3>
                    </div>
                    <p class="text-customblack">
                      The API keys include a key ID, which is utilized for referencing the key when making edits or deletions via the API.
                    </p>
                    <div class="table_data mt-4 bg-white">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Version</th>
                            <th>Key ID</th>
                            <th>Name</th>
                            <th>Created on</th>
                          
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in items" :key="index">
                            <td>{{ item.Domain }}</td>
                            <td>{{ item['Verified Domain'] }}</td>
                            <td>{{ item.Label }}</td>
                            <td>{{ item['API key'] }}</td>
                       
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
                <div class="row top-box bg-darkgrey ml-5">
                  <div class="col-lg-8 ">
                    <div
                      class="domain_flex "
                    >
                      <h2 class="text-customblack">API Key</h2>
                      <p class="text-customblack mt-4">
                        The MessageCloud.ai API makes it easy for programmers to integrate many of MessageCloud.ai features into other applications. Interested in learning more?
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-12 btn_container d-flex mt-3">
                    <button class=" sending_doc_btn bg-white text-black mx-2 ">
                     Read API key Documentation
                    </button>
                    <button class="login_btn bg-aliceblue text-white"  @click="
                        () => {
                          visibleLiveDemo = true;
                        }
                      ">
                     <label for="">
                    Generate API Key
                    </label> 
                  </button>
                    <ApiModal
                      :backdrop="true"
                      :keyboard="false"
                      @closemodal="closemodal"
                      :visible="visibleLiveDemo"
                    />

                  
                  </div>
                </div>
                <div class="api_documentation bg-white mt-5">
                      <ApiTabs />
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
// import Delete from "../assets/image/delete.svg";
import {CButton} from "@coreui/vue";
export default defineComponent({
  components:{CButton},
  setup() {
   
    return {
   
      store
    };
  },
  data() {
    return {
      visibleLiveDemo: false,
      visibleStaticBackdropDemo: false,
   
      items: [
        {
          Domain: "rhecenter.com",
          "Verified Domain": 2337846347274975,
          Label: "Not Set",
          "API key": "Feb 26,2024",
      
          Remove: "",
        },
        {
          Domain: "rhecenter.com",
          "Verified Domain": 2337846347274975,
          Label: "Not Set",
          "API key": "Feb 26,2024",
    
          Remove: "",
        },
        {
          Domain: "rhecenter.com",
          "Verified Domain": 2337846347274975,
          Label: "Not Set",
          "API key": "Feb 26,2024",
       
          Remove: "",
        },
        {
          Domain: "rhecenter.com",
          "Verified Domain": 2337846347274975,
          Label: "Not Set",
          "API key": "Feb 26,2024",
          Status: "",
          Remove: "",
        },
      ],
    };
  },

  methods: {
    deleteItem(index) {
      
      console.log("Delete item at index", index);
    
    },
  
    closemodal(value) {
      this.visibleLiveDemo = value;
    },
    close(value) {
      this. visibleStaticBackdropDemo = value;
    },
  }
});
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
.user_api {
  width: 90%;
  .top-box{
    padding:40px;
  }
  button {
    font-weight: 400;
    font-size: 1.063rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  }
  button.sending_doc_btn {
    background-color: $aliceblue;
    border: 1px solid #02487B;
  }
}
.api_documentation {
  border-radius: 7px;
  border: 1px solid #D9D9D9;
}

.top-box{
  background: #f4f4f4;
    border-radius: 10px;
    padding: 16px 4px;
    

}
.api_documentation {
  border-radius: 7px;
  border: 1px solid #D9D9D9;
}
.right_panel_global_section {
  display: flex; // Make it a flex container
  flex-direction: column; // Arrange its children in a column
  flex: 1; // Allow it to grow and shrink as needed within its container
  overflow: auto; // Add scroll if content exceeds container height
}

.right_panel {
  width: calc(100% - 80px);
  margin-left: 80px;
}
.shrink_screen.right_panel {
  margin-left: 80px;
  // margin-left: min(calc(12rem - 60px), calc(100% - 12rem));
}
.btn_container {
   position: relative;
   left:-25px;
    .login_btn {
      font-weight: 400;
      font-size: 1.063rem;
    }
    .login_btn:hover{
       background-color: $darkcerulean;
       
    }
    .sending_doc_btn {
      font-weight: 400;
      font-size: 1rem;
      border: 1px solid black;
      margin:0 12px;
      border-radius: 10px;
      background-color: #F4F4F4;
      padding: 0 10px;

    }
    .sending_doc_btn:hover{
      background-color:white;

    }
  }


  .custom-box {
  // width: 1000px;
  // height: 397px;
  background: white;
  border-radius: 10px;
  border: 1px #d9d9d9 solid;
  margin:5px;
}

.custom-header {
  height: 70px;
  background: #339be7;
  margin: 0 -11px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px; }

.listing-elements {
  display: flex;
  list-style: none;
  padding: 0;
  width:30px;
  height:12px;
  
}

.listing-elements li {
    margin: 10px;
    color: white;
    font-size: 13px;
    font-family: Inter;
    font-weight: 500;
    line-height: 14px;
    word-wrap: break-word;
}
.code-block {
  height: 300px;
  width: 1000px;
  height: calc(100% - 70px); // Adjust height as needed
  padding: 20px; // Adjust padding as needed
  color: black;
  font-size: 15px;
  font-family: Inter;
  font-weight: 300;
  line-height: 23px;
  scroll-behavior:smooth ;
  word-wrap: break-word;
  overflow-y: auto; // Add scrollbar if content exceeds container height
}

.login_btn label {
    font-size: 15px;
    position: relative;
    top: -3px;
}

</style>
