<template>
  <CModal class="api_key_modal mt-1">
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
                        v-model="apiKeyName" 
                      /> </CModalBody>
        <CModalFooter class="pb-5">
          <div class="row">
            <div class="col-lg-6  align-items-center button-nav align-item-center justify-content-between">
          <div class="buttons">

            <button
              class="text-customblack bg-white cancel_btn"
               @click="closemodal"
            >
              Cancel
            </button>
            <button class="bg-aliceblue  text-white  login_btn ms-4" @click="generateApiKey" >Generate</button>
                         <ApiKeyModal
              :backdrop="true"
              :keyboard="false"
              :apiKey="generatedApiKey"
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
      visibleLiveDemo: false,
      apiKeyName: "",
      generatedApiKey: "",
    };
  },
    methods: {
       closemodal() {
          this.$emit('closemodal' , false)
      },
      generateApiKey() {
        const randomString = () => Math.random().toString(36).substring(2);
  const apiKey = `xkeysib-${randomString()}-${randomString()}-fuo`;
  this.generatedApiKey = apiKey;
  this.visibleLiveDemo = true;
  this.$emit("apikeygenerated", this.generatedApiKey);
     
  //       const keyLength = 36; 
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // let apiKey = '';

  // for (let i = 0; i < keyLength; i++) {
  //   apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
  // }

  // this.generatedApiKey = apiKey;
  // this.visibleLiveDemo = true;


  // this.$emit('apikeygenerated', this.generatedApiKey);
    },
      close() {
        this.visibleLiveDemo = false;
      },
  },
};
</script>

<style lang="scss">

.button-nav{
  position: relative;
  left:250px;
  
  
}

.header{
  height:100%;
  width:100%;
  position: relative;
  left: 12px;
 border-radius:10px;
}
.buttons{

  display:flex;
  flex-direction: row;
    position: relative;
    right: 255px;
  
  
} 
.cancel_btn,
.generate_btn {
  padding: 12px 27px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
 
}
.cancel_btn:hover
.generate_btn:hover{
  color:rgba(255, 255, 255, 0.602);
}
.cross_icon {
  filter: invert(100%);
  cursor: pointer;
  position: relative;
  left:200px;
}


</style>
