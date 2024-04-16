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
       

                <h3 class="text-customblack mb-4 ">Sender has been created  </h3>
              
           
            <p>To verify sender identity, check your inbox at {{email}}</p>
          </CModalBody>
          <CModalFooter class="pb-5 ">
            <div class="buttons">
              
                   <button class="bg-white text-customblack  mx-5 px-3" @click="resendmail">Resend email</button>
                   <SenderModal
              :backdrop="true"
              :keyboard="false"
              :apiKey="generatedApiKey"
              :visible="visibleLiveDemo"
              @closemodal="closeresend"
            />
              
               <NuxtLink to="/senders">
                   <button class="bg-aliceblue text-white login_btn mx-1 px-3">Close</button>
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
    props: {
      email: {
        type: String,
        default: "",
      },
    },
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
      resendmail() {
       
        this.visibleLiveDemo = true;
       
      },
      closeresend() {
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
    button{
        padding: 12px 10px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
 
    }
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
  