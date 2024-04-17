<template>
    <div class="home_page bg-sidegrey pb-5 h-100">
      <div class="container-fluid p-0">
        <div class="d-flex justify-content-between w-100 vh-100">
          <Sidebar />
          <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
            <Header />
            <div class="sub_container sending_domain_container bg-white">
              <div class="sub_section sending_domain_section bg-white">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="breadcrumbs text-sm">
                      <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                        <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>

                        <CBreadcrumbItem  href="/singlesend">Campaigning</CBreadcrumbItem>
                        <CBreadcrumbItem href="/contacts"> Contacts</CBreadcrumbItem>
  
                
                        <CBreadcrumbItem active> New contact</CBreadcrumbItem>

                      </CBreadcrumb>
                    </div>
                  </div>
                </div>
                <div class="right_panel_global_section bg-white">
                  <div class="row">
                    <div class="col-lg-12 ">
                      <div class="tab_content">
    <div class="row mt-2 contact-add">
      <div class="col-lg-3 mx-2 ">
        <h2 class="text-customblack">Add Contacts manually</h2>
        <p class="mt-4 mb-5 mx-1 text-muted">
The contact you're adding will not be notified. You can add additional custom fields for this contact on the Contact Details page or by uploading a CSV.</p>
      </div>
      <div class="col-lg-4 p-3 ms-3 mt-3">
  <div class="listing ">
    <div class="listing-item p-1" @click="toggleAddContacts">
      <div class="toggle-bullet" :class="{ active: addContacts }"></div>
      <span>Add Contacts</span>
    </div>
    <div class="listing-item p-1" @click="toggleAddContactsAndInclude">
      <div class="toggle-bullet" :class="{ active: addContactsAndInclude }"></div>
      <span>Add Contacts and include in existing list</span>
    </div>
    <div class="listing-item p-1" @click="toggleAddContactsToNewList">
      <div class="toggle-bullet" :class="{ active: addContactsToNewList }"></div>
      <span>Add Contacts to a new list</span>
    </div>
  </div>
</div>
      <div class="col-lg-7">
        <div class="personal_info_tab bg-sidegrey ">
          <div class="form">
            
        <div v-if="addContactsAndInclude" class="row">
          <div class="col-lg-6 mb-2">
            <label class="d-block text-customblack">Add Contacts to Existing List <sup class="text-danger">*</sup></label>
            <select class="bg-white w-100 ">
    
      <option value="list1 text-customblack" >List 1</option>
      <option value="list2 text-customblack">List 2</option>
      <option value="list3 text-customblack">List 3</option>

    </select>
          </div>
        </div>
        <div v-if="addContactsToNewList" class="row">
          <div class="col-lg-6 mb-2">
            <label class="d-block text-customblack">Create a new List <sup class="text-maximumred">*</sup></label>
            <input class="bg-white w-100" type="text" placeholder="" />
          </div>
        </div>
            <div class="row">
            
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >First Name</label
                >
                <input class="bg-white w-100" type="text" placeholder="Name " />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >Last Name</label
                >
                <input class="bg-white w-100" type="text" placeholder="Name " />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  > Email Address<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="email"
                  placeholder="Sending Email Address"
                />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  > Alternate Email</label>
                <input
                  class="bg-white w-100"
                  type="email"
                  placeholder="Sending Email Address"
                />
              </div>
            
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Address Line 1 <sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Address Line 2 </label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="(Optional)"
                />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >ZIP Code<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter your Zip Code"
                />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >City<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="Enter Your City" />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >Country<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter Your Country"
                />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >State<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter Your Country"
                />
              </div>


              <div class="col-lg-6 mt-5 ">
                <button class="login_btn bg-aliceblue text-white"@click="
                        () => {
                          visibleLiveDemo = true;
                        }
                      ">ADD</button>
                      <ContactaddModal
                      :backdrop="true"
                      :keyboard="false"
                      @closemodal="closeeditmodal"
                      :visible="visibleLiveDemo"
                      :email="fromEmailAddress"
                    />
                   

<!-- Bootstrap toast
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" v-if="showToast">
  <div class="toast-header">
    <strong class="me-auto">Success</strong>
    <button type="button" class="btn-close" @click="showToast = false"></button>
  </div>
  <div class="toast-body">
    Contact successfully added!
  </div>
</div> -->
          
              <button class="bg-white text-customblack cancel-btn mx-4">Cancel</button>
       
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
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  
  <script>
  import { store } from "../stores/store";
  
  export default {
    components: {},
    setup() {
      
      return {
       
        store,
      };
    },
    data() {
      return {
        visibleLiveDemo: false,
        showToast: false,
        addContacts: true,
      addContactsAndInclude: false,
      addContactsToNewList: false,
        activeTab: 0,
        arr: [
          {
            heading: "Sending Domain",
            subtext: "Sending domains are used to indicate who an email is from via the \"From\" header. DNS records can be configured for a sending domain, which allows recipient mail servers to authenticate messages sent from Messagecloud.ai.",
          },
          {
            heading: "Bounce Domain",
            subtext: "Custom bounce domains override the default Return-Path value, also known as the envelope FROM value, which denotes the destination for out-of-band bounces.",
          },
          {
            heading: "Tracking Domain",
            subtext: "Tracking domains are used in engagement tracking to report email opens and link clicks. Custom tracking domains will replace the domain portion of the URL.",
          },
        ],
      };
    },
    methods: {
      addContact() {
   
      this.showToast = true;
    },
      changeTab(index) {
        console.log(index);
        this.activeTab = index;
      },
      toggleAddContacts() {
      this.addContacts = !this.addContacts;
      this.addContactsAndInclude = false;
      this.addContactsToNewList = false;
    },
    toggleAddContactsAndInclude() {
      this.addContactsAndInclude = !this.addContactsAndInclude;
      this.addContacts = false;
      this.addContactsToNewList = false;
    },
    toggleAddContactsToNewList() {
      this.addContactsToNewList = !this.addContactsToNewList;
      this.addContacts = false;
      this.addContactsAndInclude = false;
    },
    closeeditmodal(value) {
      this.visibleLiveDemo = value;
    },
    },
  };
  </script>
  
  <style lang="scss">
  @import "../assets/scss/colors.scss";
  @import "../assets/scss/style.scss";

  .contact-add{
    display: flex;
    flex-direction: row;
  }
  
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
      .searc_domain_container {
        border-radius: 7px;
        border: 1px solid #7e7e7e;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
        padding: 0px 13px;
        img {
          object-fit: contain;
          padding: 0 10px 0 0;
        }
        input {
          border: none;
          border-radius: 0px 7px 7px 0px;
          border-left: 1px solid #7E7E7E;
          padding: 8px 24px;
          font-size:17px;
          font-weight: 400;
        }
      }
      .domain_tabs
      {
        .tabs {
           width: 40%;
        }
      }
    }
  }
  
  
  .tab-content {
    display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: flex-start; 
  
    .domain_content {
     
      .btn_conatiner button:hover {
        background-color: $darkcerulean;
      }
    }
  
    label {
      font-size: 17px;
      font-weight: 600;
    }
    
    .btn_conatiner {
      button {
        font-weight: 400;
        font-size: 1.063rem;
      }
      .sending_doc_btn {
        border: none;
        border-radius: 10px;
        padding: 13px;
        background: $aliceblue;
        border: 1px solid;
        position: relative;
        right: 25px;
        top: -6px;
      }
    }
  }
  
  .detail-record-modal {
    display: inline-block;
  }

  .cancel-btn{
    padding: 12px 27px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
  }
 
  .cancel-btn:hover{
    color: #7e7e7e;
  }
  .listing {
  .listing-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    .toggle-bullet {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin-right: 10px;
      border: 1px solid grey;
    //   background-color: #ccc;
      &.active {
        background-color: $aliceblue; /* Change color for active state */
      }
    }
  }
}

select{
    border: 1px solid #d9d9d9;
    margin: 10px 0 14px;
    padding: 12px 20px;
    border-radius: 7px;
    
}

  </style>
  