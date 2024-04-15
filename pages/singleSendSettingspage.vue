<template>
  <div class="bg-white main-page">
    <div class="single-send-header">
      <Header />
      <SingleSenderDetailsHeader />
    </div>

    <div class="container-fluid main-content">
      <div class="row">
        <div class="col-lg-3 border-end min-vh-100">
          <div class="row">
            <div class="col-lg-12">
              <SettingsComponent v-if="showSettings" />
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="div-header">
            <p class="mb-1"><strong>Subject: </strong>bumper Sale!</p>
            <p><strong>Preheader: </strong>Sale</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      showSettings: true,
    };
  },
};

</script>
<style scoped lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.main-page{
  height: 100vh;
  overflow: hidden;
}

span:hover {
  color: #3469ef;
}

.div-header p {
  background-color: #fff;
  color: #000000;
  font-family: ' "Inter", sans-serif';
  font-size: 15px;
}
.main-content {
  padding-top: 80px;
}
</style>
