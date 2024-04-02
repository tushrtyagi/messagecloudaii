


<template>
  <div class="home_page bg-sidegrey pb-5 h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container sending_domain_container">
            <div class="sub_section sending_domain_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>

                      <CBreadcrumbItem active>Suppression</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-white">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="suppression_box bg-white">
                      <h2 class="text-customblack w-100 d-block">Suppression</h2>
                      <!-- <input
                        type="text"
                        class="w-100 mt-3 bg-white d-block"
                        placeholder="filters"
                      /> -->
                      <select class="form-select mt-5" >
              <option value="" disabled selected> Filters</option>
              <option value="Bounce">Bounce</option>
              <option value="Spam Report">Spam Report</option>
              <option value="Invalid">Invalid</option>
              <option value="Blocks">Blocks</option>
            </select>
                    </div>
                    <div class="table_data mt-5 bg-white">
                      <table class="table table-striped" style="width: 100%">
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Reason</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in items" :key="index">
                            <td>{{ item.Email }}</td>
                            <td>{{ item.Type }}</td>
                            <td>{{ item.Reason }}</td>
                            <td>{{ item.Date }}</td>
                          </tr>
                        </tbody>
                      </table>
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
  setup() {
    const expanded = useExpanded();
    return {
      expanded,
      store
    };
  },
  data() {
    return {
      items: [
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "",
        },
      ],
    };
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
    .suppression_box {
     .form-select{

     }
    }
  }
}
</style>
