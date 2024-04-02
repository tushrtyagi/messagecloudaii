<template>
  <CModal class="payment_method_modal">
    <CModalHeader class="bg-darkcerulean text-white">
      <CModalTitle class="text-center w-100 ms-4"
        >ADD YOUR FIRST PAYMENT METHOD</CModalTitle
      >
      <div class="cross_icon" style="cursor: pointer" @click="closemodal">
        <img src="../assets/image/cross_icon.svg" />
      </div>
    </CModalHeader>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-7">
        <CModalBody>
          <div class="modal_content">
            <span class="text-customblack text-start d-block">Credit/Debit card</span>
            <form class="form_container">
              <div class="row">
                <div class="col-lg-12 mb-2">
                  <label class="d-block text-customblack">Card number</label>
                  <input
                    class="bg-white w-100"
                    type="text"
                    placeholder="1234 1232 1234 1234"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="d-block text-customblack">Expiration</label>
                  <input class="bg-white w-100" type="text" placeholder="MM / YY" />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="d-block text-customblack">CVC</label>
                  <input class="bg-white w-100" type="text" placeholder="CVC" />
                </div>
                <div class="col-lg-12 mb-2">
                  <label class="d-block text-customblack">Country</label>
                  <div
                    class="input position-relative country_dropdown"
                    @click="toggleList"
                  >
                    {{ selectedCountry || "Select Country" }}
                    <img src="../assets/image/dropdownarrow.svg" alt="dropdown" />
                    <div class="selected_country" v-if="isExpanded">
                      <ul>
                        <li
                          class="pb-2"
                          v-for="(country, index) in countries"
                          :key="index"
                          @click="selectCountry(country)"
                          :class="{ selected: selectedCountry === country }"
                        >
                          {{ country }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </CModalBody>
        <CModalFooter class="pb-5">
          <CButton class="text-black login_btn" @click="closemodal"> Cancel </CButton>
          <CButton class="bg-darkcerulean login_btn text-white">Confirm</CButton>
        </CModalFooter>
      </div>
    </div>
  </CModal>
</template>

<script>
import { CModal } from "@coreui/vue";
export default {
  components: { CModal },
  data() {
    return {
      isExpanded: false,
      selectedCountry: null,
      countries: ["India", "Nepal", "Bangladesh", "Bhutan", "Maldives"],
    };
  },
  methods: {
    closemodal() {
      this.$emit("closemodal", false);
    },
    toggleList() {
      this.isExpanded = !this.isExpanded;
    },
    selectCountry(country) {
      this.selectedCountry = country;
      this.isExpanded = true;
    },
  },
};
</script>

<style lang="scss">
.modal_content {
  font-size: 18px;
  font-weight: 500;
  .form_container {
    text-align: left;
    padding: 30px 0 0;
    label {
      font-weight: 400;
    }
    input {
      border: 1px solid #d9d9d9;
      margin: 10px 0 14px;
      padding: 12px 20px;
      border-radius: 7px;
    }
  }
}
.modal-footer {
  .btn:hover {
    color: white !important;
  }
}
.country_dropdown {
  border: 1px solid #d9d9d9;
  margin: 10px 0 14px;
  padding: 12px 20px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  color: #737373;
  font-size: 17px;
  font-weight: 400;
  img {
    position: absolute;
    right: 24px;
  }
}
.selected_country {
  width: 100%;
  background: white;
  border: 1px solid #dad7d7;
  border-radius: 7px;
  bottom: auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1490196078);
  left: 0;
  position: absolute;
  top: 50px;
  z-index: 2;
  padding: 18px;
  ul {
    li {
      cursor: pointer;
      color: #737373;
      font-size: 17px;
      font-weight: 400;
    }
  }
}
</style>
