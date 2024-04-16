<template>
  <div class="home_page bg-sidegrey pb-5 h-100">
    <div class="container-fluid p-0">
      <!-- Removed the d-flex and justify-content-between classes -->
      <div class="vh-100">
        <!-- Removed the class binding for the right_panel -->
        <div class="right_panel">
          <Header />
          <div class="sub_container domain_container">
            <div class="sub_section domain_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>
                      <CBreadcrumbItem href="#">Campaigning</CBreadcrumbItem>
                      <CBreadcrumbItem href="/singlesend">Single Send</CBreadcrumbItem>
                      <CBreadcrumbItem active>Add manually</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-darkgrey">
                <div class="bg-white main-page">
                  <div class="container-fluid main-content">
                    <div class="row">
                      <div class="col-lg-12"> <!-- Changed col-lg-3 to col-lg-12 to make the right panel span full width -->
                        <div class="row">
                          <div class="col-lg-12">
                            <SettingsComponent v-if="showSettings" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12"> <!-- Changed col-lg-9 to col-lg-12 to make the right panel span full width -->
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
</template>

<script>

import { CBreadcrumb, CBreadcrumbItem } from "@coreui/vue";

export default {
  components: {
  
    CBreadcrumb,
    CBreadcrumbItem
  },
  data() {
    return {
      showSettings: true
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.main-page {
  height: 100vh;
  overflow: hidden;
}

.span:hover {
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

.domain_container {
  .domain_section {
    border: 1px solid #ededed;
    .add_your_domain {
      padding: 138px 232px;
      border-radius: 7px;
      border: 0px #d3d3d3 solid;
      h3 {
        text-transform: uppercase;
        font-size: 27px;
      }
      p {
        padding: 1px 141px;
      }
      button.login_btn {
        font-weight: 400;
        box-shadow: unset;
      }
    }
    .add_your_domain:hover {
      box-shadow: 0px 0px 5px 0px;
    }
  }
}
</style>
