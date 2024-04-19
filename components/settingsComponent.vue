<template>
  <div class="settings-component-class">
    <div class="d-flex gap-4 tabs-class bg-darkgrey  px-3 mb-2">
      <span
        class="section_name bg-darkgrey"
        :class="`${showSettings ? 'active' : ''}`"
        @click="showSettings = true"
      >
        Settings
      </span>
      <span
        class="section_name ms-2 bg-darkgrey"
        :class="`${!showSettings ? 'active' : ''}`"
        @click="showSettings = false"
      >
        Build
      </span>
      <hr />
    </div>
    <div class="form-div">
      <div >
        <div class="Single-send-div">
          <div
            class="single-send-dropdown mb-1"
            @click="showSettingsForm = !showSettingsForm"
            v-if="showSettings"
          >
            <i
              v-if="showSettingsForm"
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            <i v-else class="fa fa-angle-down" aria-hidden="true"></i>
            <span><strong>SINGLE SEND SETTINGS</strong></span>
          </div>
          <singleSenderDetailsForm v-if="showSettings && showSettingsForm" />
          <div v-else></div>
          <hr v-if="showSettings" />
        </div>
        <div class="test-email-div">
          <div
            class="single-send-dropdown mb-1"
            @click="showTestEmail = !showTestEmail"
            v-if="showSettings"
          >
            <i
              v-if="!showTestEmail"
              class="fa fa-angle-right"
              aria-hidden="true"
            ></i>
            <i v-else class="fa fa-angle-down" aria-hidden="true"></i>
            <span><strong>TEST YOUR EMAIL</strong></span>
          </div>
        </div>
      </div>
       <buildComponent v-if ="!showSettings"/>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSettings: true,
      showTestEmail: true,
      showSettingsForm: true,
    };
  },
};
</script>

<style scoped lang="scss">

.settings-component-class {
  overflow-y: auto;
  height: 80vh;
}
.single-send-dropdown {
  background-color: #fff;
  color: #000000;
  font-family: ' "Inter", sans-serif';
  font-size: 15px;
}
.fa {
  margin-right: 3px;
}
.section_name {
  cursor: pointer;
   font-size:17px;
  font-weight:600;
  color: #000000;
  font-family: ' "Inter", sans-serif';

}
.active {
  color: #3469ef;
  font-weight:600;
}
.tabs-class {
    position: fixed;
    top: 23px;
    z-index: 1;
    width: 22.3%;
    left: 41px;
}

.form-div {
  padding-top: 35px;
}
span,
  strong{
  font-family: "inter", "sans-serif";
}
</style>
