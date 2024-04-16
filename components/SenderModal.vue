<template>
    <CModal class="sender_modal">
      <CModalHeader class="bg-sidegrey">
        <CModalTitle class="text-customblack d-flex align-items-center justify-content-between w-100">
          <div class="cross_icon" style="cursor: pointer" @click="closemodal">
            <img src="../assets/image/cross_icon.svg" />
          </div>
        </CModalTitle>
      </CModalHeader>
      <div class="row header p-0 bg-sidegrey">
        <div class="col-lg-6 container">
          <CModalBody>
       

                <h3 class="text-customblack mb-4 ">Sender Verified   <img src="../assets/image/pass.svg" class="ms-3" alt=""></h3>
              
           
            <p>Congratulations! Your sender identity has been successfully verified</p>
          </CModalBody>
          <CModalFooter class="pb-5 ">
            <div class="buttons">
                <NuxtLink to="/senders">
                    <button class="bg-aliceblue text-white login_btn mx-5 px-3">Return to single sender list</button>
                </NuxtLink>
            </div>
          </CModalFooter>
        </div>
      </div>
    </CModal>
  </template>
  
  <script>
  import { CModal, CButton } from "@coreui/vue";
  
  export default {
    components: { CModal, CButton },
    data() {
      return {
        visibleLiveDemo: false,
        apiKeyName: "",
        generatedApiKey: "",
      };
    },
    methods: {
      closemodal() {
        this.$emit('closemodal', false);
      },
      generateApiKey() {
        const randomString = () => Math.random().toString(36).substring(2);
        const apiKey = `xkeysib-${randomString()}-${randomString()}-fuo`;
        this.generatedApiKey = apiKey;
        this.visibleLiveDemo = true;
        this.$emit("apikeygenerated", this.generatedApiKey);
      },
      close() {
        this.visibleLiveDemo = false;
      },
    },
  };
  </script>
  
  <style lang="scss">
  .container {
    position: relative;
    right: 26px;
    align-items: center;
    justify-content: center;
}
  .row.header.p-0.bg-sidegrey {
    position: relative;
    left: 12px;
    justify-content: center;
    align-items: center;
}
  .modal_content {}
  
  .header {
    width: 100%;
  }
  
 
  .buttons {
    display: flex;
  }
  .sender_modal .modal-body {
    padding: 41px 0px 0;
}
  
  .generate_btn {
    padding: 12px 27px;
    font-size: 1.2rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    font-weight: 600;
  }
  
  .generate_btn:hover {
    color: rgba(255, 255, 255, 0.602);
  }
  h3.text-customblack.mb-4 {
    position: relative;
    right: 50px;
    text-align: center;
    img{
        width:5%;
        height:5%;
    }
}
  .cross_icon {
    filter: invert(100%);
    cursor: pointer;
    img{

        position:relative;
        right:192px;
        
    }
  }
  </style>
  