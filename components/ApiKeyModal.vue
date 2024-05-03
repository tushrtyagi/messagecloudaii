<template>
  <CModal class="api_key_modal mt-1">
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
      
    </CModalBody>
    <CModalFooter class="pb-5 align-items-center d-flex justify-content-center px-0 bg-sidegrey ">
      <p class="key">{{ apiKey }}</p>
      <div class="d-flex me-5 d-inline">

        <button class="copy_btn mt-4 mx-4 px-3 bg-white ms-2 "><img src="../assets/image/tabler_copy.svg" alt="copy_icon"  /> Copy link</button> 
     
       <button class="bg-darkcerulean ok_btn text-white mx-0 mt-4"  @click="closemodal">OK</button>
      </div>

    </CModalFooter>
  </CModal>
</template>

<script>
import { CModal } from "@coreui/vue";
export default {
  components: { CModal },
  props: {
   apiKey : {
      
      default: "api key"
    },},
  data() {
    return {};
  },
   methods: {
        closemodal() {
          this.$emit('closemodal' , false)
      },
    
  },
};
</script>

<style lang="scss">
.modal.fade.api_key_modal.show {
  .modal-dialog {
    max-width: 30%;
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
.key{
  font-size: 20px;

    border:1px solid grey;
    padding: 7px 80px;
    border-radius: 10px;
}
.cross_icon {
  filter: invert(100%);
  cursor: pointer;
  position: relative;
  left:200px;
}
.ok_btn{
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
  &:hover{
    background-color: #6eb9e1 !important;
  color:white;
  }
}

.copy_btn{

  font-size: 1rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);

  &:hover{
    background-color: white !important;
 
  }
}

</style>
