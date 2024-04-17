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
                      <CBreadcrumbItem active>Suppressions</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section bg-white">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="suppression_box bg-white">
                      <h2 class="text-customblack w-100 d-block">Suppressions</h2>
                      <div class="d-flex align-items-center">
                        <div class="search-wrapper">
                          <img class="search-icon mt-3" src="../assets/image/searchgrey.svg" alt="Search icon" />
                          <input type="text" class="form-control px-5 mt-4 ms-1" placeholder="Search Type" />
                        </div>
                        <select class="form-select mt-4 ms-4">
                          <option value="" disabled selected>Filters</option>
                          <option value="Bounce">Bounce</option>
                          <option value="Spam Report">Spam Report</option>
                          <option value="Invalid">Invalid</option>
                          <option value="Blocks">Blocks</option>
                        </select>
                      </div>
                    </div>
                    <div class="table_data mt-4 mb-3 bg-white">
                      <table class="table table-striped" style="width: 100%">
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Reason</th>
                            <th>Date</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in items" :key="index">
                            <td>{{ item.Email }}</td>
                            <td>{{ item.Type }}</td>
                            <td>{{ item.Reason }}</td>
                            <td>{{ item.Date }}</td>
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
      visibleStaticBackdropDemo: false,
      items: [
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
        {
          Email: "bounce@simulator.amazonses.com",
          Type: "Hard Bounce",
          Reason: "failed to connect",
          Date: "Feb 26, 2024",
        },
      ],
    };
  },
  methods: {
    close(value) {
      this.visibleStaticBackdropDemo = value;
    },
  },
};
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
.sending_domain_container {
  padding: 0px 31px 0px 0;
  .sending_domain_section {
    .suppression_box {
      .form-control {
        padding:0 px;
       &::placeholder{
        position:relative;
        left:0px;
       }
      }
    }
  }
}

.search-wrapper {
  position: relative;
  display: inline-block;
  .search-icon {
    position: absolute;
    top: 50%;
    left: 19px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    fill: #808080;
  }
}

input.control-type {
  border: 1px solid darkgrey;
  border-radius: 7px;
  padding: 4px 50px;
}
</style>
