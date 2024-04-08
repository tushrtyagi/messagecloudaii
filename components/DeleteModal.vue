<template>
  <CModal class="deletemodal">
    <CModalHeader class="bg-sidegrey">
      <CModalTitle class="text-customblack d-flex justify-content-between align-items-center">
        <span>Delete Confirmation</span>
        <div class="cross_icon" style="cursor: pointer" @click="close">
          <img src="../assets/image/cross_icon.svg" />
        </div>
      </CModalTitle>
    </CModalHeader>
    <CModalBody class="bg-sidegrey px-5 pt-4">
      Are you sure you want to delete this item?
    </CModalBody>
    <CModalFooter class="bg-sidegrey py-3 px-3">
      <button class="cancel_btn  ms-5" @click="close">Cancel</button>
      <button class="delete_btn text-white bg-red ms-5"  @click="confirmDelete">Delete</button>
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
.deletemodal{
display: block;
margin: auto;
width:50%;
margin-left:25%;
padding: 32px ;
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

.delete_btn {
  font-size: 17px;
  border: 1px solid black;
  border-radius: 5px;

  padding: 9px 27px;
  &:hover {
    background-color: rgb(222, 138, 161);
    color: white !important;
  }
}

.cancel_btn {
  font-size: 17px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  padding: 9px 27px;
  &:hover {
    background-color: rgb(218, 230, 235);
    color: white !important;
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
