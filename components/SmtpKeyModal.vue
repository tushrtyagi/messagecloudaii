<template>
  <CModal class="api_key_modal smtp_key_modal">
    <CModalHeader class="">
      <CModalTitle
        class="text-customblack d-flex align-items-center justify-content-between w-100"
        >{{ modalTitle }}
        <div class="cross_icon" style="cursor: pointer" @click="closemodal">
          <img src="../assets/image/cross_icon.svg" />
        </div>
      </CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p class="text-customblack">{{ modalText }}</p>
      <input type="text" class="bg-white w-100" />
    </CModalBody>
    <CModalFooter class="pb-5">
      <CButton class="text-black login_btn" :class="hideimage" @click="closemodal"
        ><img class="me-2" src="../assets/image/tabler_copy.svg" />{{
          cancelButtonText
        }}</CButton
      >
      <CButton class="bg-aliceblue login_btn text-white" @click="generateSmtpKey"
        >Create</CButton
      >
    </CModalFooter>
  </CModal>
</template>

<script>
import { CModal,CButton } from "@coreui/vue";
export default {
  components: { CModal,CButton },
  data() {
    return {
      modalTitle: "Your SMTP Key",
      modalText: "Name your SMTP key",
      cancelButtonText: "Cancel",
      hideimage: "copy_icon_hide",
    };
  },
  methods: {
    closemodal() {
      this.$emit("closemodal", false);
    },
    generateSmtpKey() {
      this.modalTitle = "Your SMTP Keys";
      this.modalText = `SMTP key has been generated successfully. Please copy this key and save it somewhere safe. For security reason, we cannot show it to you again.`;
      this.cancelButtonText = "Copy Link";
      this.hideimage = "copy_icon_show";
    },
  },
};
</script>

<style lang="scss">
.modal.fade.api_key_modal.smtp_key_modal.show {
  .modal-dialog {
    max-width: 45%;
  }
}
.login_btn.copy_icon_hide{
    img{
        display:none;
    }
}
</style>
