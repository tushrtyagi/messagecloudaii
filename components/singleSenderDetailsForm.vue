<template>
  <div class="w-100 main-div bg-white mt-4">
    <form>
      <label >Single Send Name *</label>
      <input type="text" class="input-tag w-100 " />

      <label>From Sender *</label>

      <select required class="w-100 input-tag mb-1 " >
        <option value="" disabled selected hidden>Select Sender</option> 
          <option>test@gmail.com</option>
          <option>test2@gmail.com</option>
      </select>

      <label>Subject</label>
      <input type="text" class="input-tag w-100" />

      <label>Preheader</label>
      <input type="text" class="input-tag w-100" />

      <hr />
      <p class="mb-1">RECIPIENTS</p>
      <hr />
      <label>Send To*</label>
      <select required class="w-100 input-tag mb-2">
        <option value="" disabled selected hidden>Select recipients</option> 
        <option>test@gmail.com</option>
        <option>test2@gmail.com</option>
      </select>

      <label>Unsubscribe group*</label>
      <select required class="w-100 input-tag mb-2" id="floatingInput">
        <option value="" disabled selected hidden>Select an unsubscribe group</option> 
        <option>test@gmail.com</option>
        <option>test2@gmail.com</option>
      </select>
      <hr />
      <p class="mb-1 ">SCHEDULE</p>
      <hr />
      <label>Schedule *</label>
      <select class="w-100 input-tag mb-2" id="floatingInput">
        <option value="" disabled selected hidden>Send immediately</option> 
        <option>test@gmail.com</option>
        <option>test2@gmail.com</option>
        
      </select>
    </form>
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
.main-div {
  label,
  select {
    font-size: 15px;
    color: #000000;
    font-family: ' "Inter", sans-serif';
  }
  .floatingInput {
    border-radius: 0;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
    -webkit-border-radius: 0; 
    border-radius: 0;
    transition:ease-in 2s;
  
  }
  p {
    font-weight: 700;
    background-color: #fff;
    color: #000000;
    font-family: 'Inter', 'sans-serif';
  }
  
}
</style>
