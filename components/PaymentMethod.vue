<template>
  <div class="tab_content px-5">
    <div class="row">
      <div class="col-lg-12">
        <div class="add_your_domain bg-white text-center bg-white mt-5">
          <h3 class="text-customblack">Add your first PAYMENT METHOD</h3>
          <p class="text-nickel mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <CButton
            class="bg-darkcerulean login_btn text-white mt-4"
            @click="
              () => {
                visibleLiveDemo = true;
              }
            "
          >
            Add a new payment method
          </CButton>
          <PaymentsMethodModal
            :backdrop="true"
            :keyboard="false"
            :visible="visibleLiveDemo"
            @closemodal="closemodal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CButton } from "@coreui/vue";
export default {
  components: { CButton },
  data() {
    return {
        visibleLiveDemo: false,
    };
  },
  methods: {
    closemodal(value){
      this.visibleLiveDemo = value; 
    }
  }
};
</script>

<style lang="scss">
.plan_container {
  .plan_section {
    .add_your_domain {
      padding: 77px 232px;
      border-radius: 7px;
      border: 1px solid #02487b;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
      h3 {
        text-transform: uppercase;
        font-size: 27px;
      }
      button.login_btn {
        font-weight: 400;
        box-shadow: unset;
      }
    }
  }
}
.btn:hover {
  background: #02487b !important;
}
</style>
