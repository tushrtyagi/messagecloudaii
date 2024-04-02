<template>
  <CModal class="api_key_modal ">
    <CModalHeader class="bg-sidegrey">
      <CModalTitle
        class="text-customblack d-flex align-items-center justify-content-between w-100"
        >Your API Key
        <div class="cross_icon" style="cursor: pointer" @click="closemodal">
          <img src="../assets/image/cross_icon.svg" /></div
      ></CModalTitle>
    </CModalHeader>
    <div class="row header d-flex justify-content-center p-0 bg-sidegrey">
      <div class="col-lg-6 ms-5 ">
        <CModalBody> <h4 class="text-customblack mb-4">API Key name : </h4>
                      <input
                        placeholder="Enter your key name"
                        class="bg-white"
                        type="text"
                      /> </CModalBody>
        <CModalFooter class="pb-5">
          <div class="row">
            <div class="col-lg-6  align-items-center button-nav align-item-center justify-content-between">
          <div class="buttons">

            <button
              class="text-customblack bg-white login_btn"
               @click="closemodal"
            >
              Cancel
            </button>
            <button class="bg-aliceblue  text-white  login_btn ms-4" @click="
                          () => {
                            visibleLiveDemo = true;
                          }
                        " >Generate</button>
                         <ApiKeyModal
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
.button-nav{
  position: relative;
  left:250px;
  
  
}
.cancel_btn {
  padding: 12px 27px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
 
}
.cancel_btn:hover{
  color:rgba(255, 255, 255, 0.602);
}
.header{
  height:100%;
  width:100%;
  position: relative;
  left: 12px;
}
.buttons{

  display:flex;
  flex-direction: row;
    position: relative;
    right: 293px;
  
  
} 
.generate_btn {
  padding: 12px 27px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
 
}
.generate_btn:hover{
  color:rgba(255, 255, 255, 0.602);
}
</style>
