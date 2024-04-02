<template>
    <CModal :backdrop="false" :keyboard="false" visible>
      <CModalHeader>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>Modal body text goes here.</CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="closeModal">Close</CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
  </template>
  
  <script>
  import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/vue';
  
  export default {
    components: {
      CModal,
      CModalHeader,
      CModalTitle,
      CModalBody,
      CModalFooter,
      CButton
    },
    methods: {
      closeModal() {
        // Implement closing modal logic here
        // For example: this.$emit('close');
      }
    }
  };
  </script>
  