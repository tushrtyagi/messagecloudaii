<template>
  <CModal class="deletemodal">
    <CModalHeader class="bg-sidegrey">
      <CModalTitle class="text-customblack d-flex head-pop justify-content-center align-items-center">
        <span class="mb-0 mt">Delete Confirmation</span>
        <div class="cross_icon" style="cursor: pointer" @click="close">
          <img src="../assets/image/cross_icon.svg" />
        </div>
      </CModalTitle>
    </CModalHeader>
    <CModalBody class="bg-sidegrey px-5 pt-4">
      <p class=" head-q mt-2 ms-3">Are you sure you want to delete this item?</p>
      
    </CModalBody>
    <CModalFooter class="bg-sidegrey py-3 px-4 ">
      <button class="cancel_btn bg-white text-customeblack " @click="close">Cancel</button>
      <button class="delete_btn text-white bg-red ms-3"  @click="confirmDelete">Delete</button>
    </CModalFooter>
  </CModal>
</template>

<script>
import { CModal } from '@coreui/vue';

export default {
  components: { CModal },

  methods: {
    close() {
      this.$emit('close', false);
    },
    confirmDelete() {
      // Handle delete confirmation
    }
  }
}
</script>

<style>
.modal-body.bg-sidegrey.px-5.pt-4 {
    margin: -9px 0px;
   
  
}
.head-q{
 font-size: 12px;
}
.deletemodal{
display: block;
margin: auto;
width:50%;
margin-left:25%;
padding: 30px ;
}
.modal.fade.api_key_modal.show {
  .modal-dialog {
    max-width: 30%;
  }
}

.head-pop span {
     
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

.delete_btn {
  padding: 9px 16px;
    font-size: 1.1rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    font-weight: 600;

  &:hover {
    background-color: rgb(222, 138, 161);
    color: white !important;
  }
}

.cancel_btn {
  padding: 9px 15px;
    font-size: 1.1rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    font-weight: 700;
 
    &:hover {
        background-color: rgb(164, 170, 173);
        color: black !important;
      }
}

.key {
  font-size: 26px;
  font-weight: 600;
}

.cross_icon {
  filter: invert(100%);
  cursor: pointer;
  position: relative;
  left:200px;
}
</style>
