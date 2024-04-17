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

                        <CBreadcrumbItem  href="/createdomain">SenderSetup</CBreadcrumbItem>
                        <CBreadcrumbItem href="/senders"> Senders </CBreadcrumbItem>
  
                
                        <CBreadcrumbItem active> New Sender</CBreadcrumbItem>

                      </CBreadcrumb>
                    </div>
                  </div>
                </div>
                <div class="right_panel_global_section bg-white">
                  <div class="row">
                    <div class="col-lg-12 ">
                      <div class="tab_content">
    <div class="row mt-2">
      <div class="col-lg-3 mx-2 ">
        <h2 class="text-customblack">Create Sender Details</h2>
        <p class="mt-5 mx-1 text-muted">To comply with anti-spam laws such as CAN-SPAM and CASL, it's important to include your company's contact information, including a physical mailing address, in every promotional email you send. This ensures transparency and trust with recipients, as they can easily identify the sender and reach out if needed. Make sure to include your company name, email address, and physical address at the bottom of each email to meet legal requirements and build credibility with your audience.</p>
      </div>
      <div class="col-lg-7">
        <div class="personal_info_tab bg-sidegrey ">
          <div class="form">
            <div class="row">
            
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >From Name<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="Name " />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >From Email Address<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  v-model="fromEmailAddress"
                  placeholder="Sending Email Address"
                />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Reply To<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Recieving Email Address"
                />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Company Address <sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Company Address Line 2 </label
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

              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  > Nickname<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="" />
              </div>
            

              <div class="col-lg-6 mt-5 ">
             

                <button class="login_btn bg-aliceblue text-white " @click="
                        () => {
                          visibleLiveDemo = true;
                        }
                      ">Create</button>
      
      <ResendsenderModal
                      :backdrop="true"
                      :keyboard="false"
                      @closemodal="closesendermodal"
                      :visible="visibleLiveDemo"
                      :email="fromEmailAddress"
                    />
                   

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
      const expanded = useExpanded();
      return {
        expanded,
        store,
      };
    },
    data() {
      return {
        fromEmailAddress:"abc@gmail.com",
        visibleLiveDemo: false,
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
      changeTab(index) {
        console.log(index);
        this.activeTab = index;
      },
      closesendermodal(value) {
      this.visibleLiveDemo = value;
    },
    },
  };
  </script>
  
  <style lang="scss">
  @import "../assets/scss/colors.scss";
  @import "../assets/scss/style.scss";
  
  .right_panel {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
  .shrink_screen.right_panel {
    width: calc(100% - 12rem);
    margin-left: 12rem;
  }
  .sending_domain_container {
    padding: 0px 31px 0px;
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
  </style>
  