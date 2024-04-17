<template>
  <div class="home_page bg-sidegrey h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container profile_container">
            <div class="sub_section profile_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '/'">
                      <CBreadcrumbItem href="/"><img src="../assets/image/home_icon (1).svg" alt="configuration" /></CBreadcrumbItem>
                      <CBreadcrumbItem href="#">Settings</CBreadcrumbItem>
                      <CBreadcrumbItem active>My profile</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section pb-5">
                <div class="row">
                  <div class="col-lg-12">
                    <h2 class="text-customblack">My profile</h2>
                    <div class="">
                      <Tabs
                        @changeTab="changeTab"
                        class="profile_tabs"
                        :tabs="['Information', 'Password', 'Legal Documents']"
                      />
                      <div class="tab-content">
                        <ProfileData v-if="(activeTab == 0)" />
                         <LegealDocs v-if="(activeTab == 2)" />
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
import {store} from "../stores/store"
export default defineComponent({
  components: {},
  setup() {
  
    return {

      store
    };
  },
  data() {
      return {
        activeTab: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
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
.profile_tabs {
  .tabs {
    width: 44%;
  }
}
</style>
