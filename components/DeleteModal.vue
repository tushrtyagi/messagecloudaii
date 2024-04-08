<template>
  
    <CModal 
    class="deletemodal "
    >
    <CModalHeader class="bg-sidegrey">
      <CModalTitle class="text-customblack">Delete Confirmation</CModalTitle>
    </CModalHeader>
    <CModalBody class="bg-sidegrey">
      Are you sure you want to delete this item?
    </CModalBody>
    <CModalFooter class="bg-sidegrey">
      <CButton class="cancel_btn" @click="closemodal">Cancel</CButton>
      <CButton class="delete_btn text-white btn-danger"  @click="confirmDelete">Delete</CButton>
    </CModalFooter>
    </CModal>
  </template>
  <script>
    export default {
      data() {
        return { 
  
        }
      },
      methods:{
        closemodal() {
          this.$emit('closemodal' , false)
      },
      }
    }
  </script>
  <style>

  .delete_btn{
    background: red;
  }
  
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

.key{
  font-size: 26px;
  font-weight: 600;
}</style>