<template>
  <div class="tab_content">
    <div class="row">
      <div class="col-lg-8 col-md-9">
        <h3 class="text-customblack">{{ heading }}</h3>
        <p class="text-customblack mt-3">
        {{ subtext }}
        </p>
        <label class="d-block text-customblack"
          >Enter your email domain<sup class="text-maximumred">*</sup></label
        >
        <input class="w-100 my-3 bg-white" type="text" placeholder="eg.sub.domain.com" />
        <p class="suggestion_text text-customblack d-block mb-5">
          Do not add “http”, “https”, “www”, or “/”.
        </p>
        <div class="btn_conatiner d-flex">
         <button 
            class="login_btn bg-aliceblue text-white"
            @click="
              () => {
                visibleLiveDemo = true;
              }
            "
          >
            Save & Continue
            </button>
          <ApiModal
            :backdrop="true"
            :keyboard="false"
            :visible="visibleLiveDemo"
            @closemodal="closemodal"
          />
          <button class="sending_doc_btn bg-white text-black ms-4">
            Sending Domain Documentation
          </button>
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
    props: {
        heading: String,
        subtext: String
  },
  methods: {
    closemodal(value) {
       this.visibleLiveDemo = value; 
    }
  }
};
</script>

<style lang="scss">
.tab_content {
  padding-top: 10px;
  label {
    font-size: 17px;
    font-weight: 600;
  }
  sup {
    font-size: 17px;
    font-weight: 600;
    position: relative;
    top: -2px;
    left: 2px;
  }
  input {
    border-radius: 7px;
    border: 1px solid #02487b;
    padding: 12px 31px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
    font-size: 17px;
    font-weight: 400;
    &::placeholder {
      color: #bcbcbc;
    }
  }
  .btn_conatiner {
    button {
      font-weight: 400;
      font-size: 1.063rem;
    }
    .sending_doc_btn {
      border: 1px solid black;
      border-radius: 10px;
    }
  }
}
</style>
