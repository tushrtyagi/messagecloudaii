<template>
    <CModal class="smtp_key_modal">
      <CModalHeader class="">
        <CModalTitle
          class="text-customblack d-flex align-items-center justify-content-between w-100"
          >Your SMTP Keys
          <div class="cross_icon" style="cursor: pointer" @click="closemodal">
            <img src="../assets/image/cross_icon.svg" /></div
        ></CModalTitle>
      </CModalHeader>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-7">
          <CModalBody> <h4 class="text-customblack mb-4">Name your SMTP Key Name</h4>
                        <input
                          placeholder="enter your key name"
                          class="bg-white"
                          type="text"
                        /> </CModalBody>
          <CModalFooter class="pb-5">
            <div class="row">
              <div class="col-lg-6">
  
                <CButton
                  class="text-customblack bg-white login_btn"
                   @click="closemodal"
                >
                  Cancel
                </CButton>
                <div class="col-log-6">
  
                  <CButton class="bg-aliceblue login_btn text-white" @click="
                                () => {
                                  visibleLiveDemo = true;
                                }
                              " >Generate</CButton>
                               <SmtpKeyModal
                    :backdrop="true"
                    :keyboard="false"
                    :visible="visibleLiveDemo"
                    @closemodal="close"
                  />
                </div>
              </div>
            </div>
            
          </CModalFooter>
        </div>
      </div>
    </CModal>
  </template>
  
  <script>
  import { CModal,CButton } from "@coreui/vue";
  export default {
    components: { CModal,CButton },
    data() {
      return {
        visibleLiveDemo:false
      };
    },
      methods: {
         closemodal() {
            this.$emit('closemodal' , false)
        },
  
        close() {
          this.visibleLiveDemo = false;
        },
    },
  };
  </script>
  
  <style lang="scss">
  .modal_content {
  }
  </style>
  