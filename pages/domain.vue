<template>
  <div class="home_page bg-sidegrey pb-5 h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container domain_container">
            <div class="sub_section domain_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs ">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>
                      <CBreadcrumbItem href="/createdomain">SenderSetup</CBreadcrumbItem>
                      <CBreadcrumbItem active>Add Domain</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-darkgrey ">
                <div class="row">
                  <div class="col-lg-12 ">
                    <!-- <h2 class="text-customblack mb-0">Add First Domain</h2> -->
                    <div class="add_your_domain text-center bg-white mt-1">
                      <h3 class="text-customblack">Add your first domain</h3>
                      <p class="text-nickel mt-3">
                        Add your first Sending Domain to get started, you can add multiple domains to your account at a time 
                      </p>
                      <NuxtLink class="text-customblack " to="/createDomain">
                      <button class="bg-aliceblue text-white login_btn  mt-4">
                      Add Domain
                      </button>
                    </NuxtLink>
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
import { store } from '../stores/store';
export default defineComponent({
  components: {},
  setup() {
   
    return {
  
      store
    };
  },
  data() {
    return {};
  },
  methods: {},
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

  
   
.domain_container {
  .domain_section {
    border: 1px solid #ededed;
    .add_your_domain {
      padding: 138px 232px;
      border-radius: 7px;
      border: 0px #d3d3d3 solid;
      h3 {
        text-transform: uppercase;
        font-size:27px;
        
      }
      p{
        padding :1px 141px;
      }
      button.login_btn {
        font-weight: 400;
        box-shadow: unset;
      }
    
    }
    .add_your_domain:hover{
      box-shadow: 0px 0px 5px 0px;
      
    }
  }
}

// .breadcrumb {
//     margin-bottom: 0px;
   
//     display: flex;
//     align-items: baseline;
//     padding: 15px 30px;
//     border-bottom: 1px solid #D5D5D5;
// }



</style>
