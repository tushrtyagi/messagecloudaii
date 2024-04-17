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
               
                        <CBreadcrumbItem href="#">Campaigning</CBreadcrumbItem>
                        <CBreadcrumbItem href="/singlesend">Single Send</CBreadcrumbItem>

                         <CBreadcrumbItem active> Add manually</CBreadcrumbItem>
                      </CBreadcrumb>
                  </div>
                </div>
              </div>
      <div class="right_panel_global_section bg-darkgrey ">
        <div class="bg-white main-page">
          <!-- <div class="single-send-header">
        
            <SingleSenderDetailsHeader />
          </div> -->
           
      
          <div class="container-fluid main-content">
            <div class="row">
              <div class="col-lg-3 border-end min-vh-100">
                <div class="row">
                  <div class="col-lg-12">
                    <SettingsComponent v-if="showSettings" />
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="div-header">
                  <p class="mb-1"><strong>Subject: </strong>bumper Sale!</p>
                  <p><strong>Preheader: </strong>Sale</p>
                  <hr />
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
'

  
  
</template>

<script>
import { store } from '../stores/store';
export default defineComponent({
  setup() {
    const expanded = useExpanded();
    return {
      expanded,
      store
    };
  },
  data() {
    return {
      showSettings: true,
    };
  },
});

</script>
<style scoped lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.main-page{
  height: 100vh;
  overflow: hidden;
}

span:hover {
  color: #3469ef;
}

.div-header p {
  background-color: #fff;
  color: #000000;
  font-family: ' "Inter", sans-serif';
  font-size: 15px;
}
.main-content {
  padding-top: 80px;
}
.right_panel {
  width: calc(100% - 60px);
  margin-left: 60px;
}
.shrink_screen.right_panel {
  width: calc(100% - 12rem);
  margin-left: 12rem;
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
</style>
