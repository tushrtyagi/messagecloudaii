<template>
  <div
    class="w-100 main-div-header d-flex  justify-content-between container-fluid bg-darkgrey align-items-start"
  >
    <div class="full_icon d-flex">
      <div>
        <NuxtLink to="/singlesend">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </NuxtLink>
      </div>
      <!-- <div>
        <i class="fa fa-eye" aria-hidden="true"></i>
        Preview
      </div> -->
     
      
    </div>
    <div class="btn-class d-flex ms-4 ">
      <button class="btn bg-aliceblue text-white ">Save</button>
      <NuxtLink to="/sendReview">
        <button class="btn bg-aliceblue text-white">Review & Send</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.input-tag {
  outline: 0;
  border-width: 0 0 2px;
  border-radius: 0px;
}
.main-div-header {
  min-height: 70px;
  padding-top: 20px;
  position: fixed;
  .full_icon img {
    background: transparent;
  }
  .btn:hover {
    background-color: #6eb9e1 !important;
    color: white;
  }
  .full_icon {
    gap: 16.5rem;
  }
  .btn-class{
    gap:40px;
    position:relative;
    bottom:7px;
    right:24px;
  }
}
.section_name {
    cursor: pointer;
     font-size:17px;
    font-weight:600;
    color: #000000;
    font-family: ' "Inter", sans-serif';
  
  }
  .tabs-class {
      position: fixed;
      top: 23px;
      z-index: 1;
      width: 22.3%;
      left: 41px;
  }
</style>
