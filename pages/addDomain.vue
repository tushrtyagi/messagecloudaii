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
                      <CBreadcrumbItem href="/createdomain">SenderSetup</CBreadcrumbItem>
                      <CBreadcrumbItem  active>Domain</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section">
                <div class="row ml-5">
            
                    <div class="col-lg-12 domain-heading mt-3 ">
                      Domain
                    </div>
                  
                </div>
                <div class="row ml-5">
                  <div class="col-lg-12 sub_panel_global_section mt-5">
                    <ul>
                      <li>
                        <h3>Sending Domain</h3>
                        <p>Sending domains are used to indicate who an email is from via the "From" header. DNS records can be configured for a sending domain, which allows recipient mail servers to authenticate messages sent from MessageCloud.al</p>
                      </li>
                      <li>
                        <h3>Bounce Domains</h3>
                        <p>Custom bounce domains override the default Return-Path value, also known as the envelope FROM value, which denotes the destination for out-of-band bounces.</p>
                      </li>
                      <li>
                        <h3>Tracking Domains</h3>
                        <p>Tracking domains are used in engagement tracking to report email opens and link clicks. Custom tracking domains will replace the domain portion of the URL</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tabcontent">
                <div class="row ml-5">
                
                  <div class="col-lg-12 mt-1">
                      <DomainType/>
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
import {store} from "../stores/store"
export default defineComponent({
  components: {},
  setup() {
    
    return {
   
      store,
      domain: ''
    };
  },
  methods: {
    saveDomain() {
      // Logic to save the domain
      console.log('Domain saved:', this.domain);
      // Redirect to the next page or perform further actions
    }
  }
});
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.sub_panel_global_section ul li {
  position: relative;
  margin-bottom: 35px;
  padding-left: 30px; 
  justify-content: center;
  align-items: center;
  width:72%;
}


.sub_panel_global_section ul li h3 {
  position: relative;
  color: black;
  font-size: 25px;
  font-family: Inter;
  font-weight: 600;
  line-height: 19px;
  word-wrap: break-word;
}

.sub_panel_global_section ul li::before {
    content: "";
    position: absolute;
    top: 9%;
    left: 0;
    transform: translateY(-50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1.75px #0394E3 solid;

}


.sub_panel_global_section ul li p {
    color: black;
    font-size: 15px;
    font-family: Inter;
    font-weight: 400;
    line-height: 30px;
    // word-wrap: break-word;
    margin: 13px -30px;
    
}

.col-lg-12.sub_panel_global_section.mt-5 {
    margin-top: 4rem !important;
}
.domain-input {
  margin: 2rem 0;
  padding: 1rem;
}
.domain-heading{

   color: black; 
   font-size: 20px; 
   font-family: Inter; 
   font-weight: 500; 
   line-height: 14px;
    word-wrap: break-word
}

</style>
