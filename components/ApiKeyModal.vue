<template>
  <CModal class="api_key_modal">
    <CModalHeader class="bg-sidegrey">
      <CModalTitle class="text-customblack d-flex align-items-center justify-content-between w-100"
        >API Key
        <div class="cross_icon" style="cursor: pointer" @click="closemodal">
          <img src="../assets/image/cross_icon.svg" /></div
      ></CModalTitle>
    </CModalHeader>
    <CModalBody class="bg-sidegrey">
      <p class="text-customblack">
        API key has been generated successfully. Please copy this key and save it
        somewhere safe. For security reason, we cannot show it to you again.
      </p>
      <input type="text" class="bg-white w-100" placeholder=" Your API key" />
    </CModalBody>
    <CModalFooter class="pb-5 align-items-center d-flex justify-content-center px-1 bg-sidegrey">
      <CButton
        class="text-black bg-white   " 
        @click="
          () => {
            visibleLiveDemo = false;
          }
        "
      >
        <img src="../assets/image/tabler_copy.svg" alt="copy_icon" class="mr-3" /> Copy link
      </CButton>
      <CButton class="bg-darkcerulean login_btn text-white "  @click="closemodal">OK</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import { CModal } from "@coreui/vue";
export default {
  components: { CModal },
  data() {
    return {};
  },
   methods: {
        closemodal() {
          this.$emit('closemodal' , false)
      }
  },
};
</script>

<style lang="scss">
.modal.fade.api_key_modal.show {
  .modal-dialog {
    max-width: 50%;
  }
}

.home_page.api_key_modal.modal-footer {
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.home_page.api_key_modal.modal-footer button {
  margin: 0 5px;
  min-width: 80px;
  font-size: 14px;
  font-weight: 600;
}
.modal-footer button.btn {
    font-size: 17px;
    border: 1px solid #0394E3;
    background-color: #0394E3;
    padding: 9px 30px;
    margin: 0 10px;
    position: relative;
    left:8px;
}
</style>
