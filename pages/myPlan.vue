<template>
  <div class="home_page bg-sidegrey">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100">
        <Sidebar />
        <div :class="`${expanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container plan_container">
            <div class="sub_section plan_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '>'">
                      <CBreadcrumbItem href="#">Settings</CBreadcrumbItem>
                      <CBreadcrumbItem active>My plan</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section pb-5">
                <div class="row">
                  <div class="col-lg-12">
                    <h2 class="text-customblack">My plan</h2>
                    <div class="">
                      <Tabs
                        @changeTab="changeTab"
                        class="plan_tabs"
                        :tabs="[
                          'Subscriptions',
                          'Payment Methods',
                          'Billing Information',
                          'Billing History',
                          'Credit notes and refunds',
                        ]"
                      />
                      <div class="tab-content">
                         <PaymentMethod v-if="(activeTab == 0)" />
                          <BillingInformation v-if="(activeTab == 1)" />
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
export default defineComponent({
  components: {},
  setup() {
    const expanded = useExpanded();
    return {
      expanded,
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
  width: calc(100% - 60px);
  margin-left: 60px;
}
.shrink_screen.right_panel {
  width: calc(100% - 12rem);
  margin-left: 12rem;
}
.plan_tabs {
  .tabs {
    width: 64%;
  }
}
</style>
