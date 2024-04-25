<template>
  <div class="account_verification_page">
    <div class="section_height w-100">
      <div class="row g-0 vh-100 d-flex">
        <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
          <div class="logo_panel d-flex align-items-center">
            <div class="logo_text_area text-white text-center">
              <div class="emailer_logo">
                <img src="../assets/image/logo.svg" alt="logo" />
              </div>
              <div style="color: #070585; font-size: 35px; font-family: Poppins; font-weight: 600; line-height: 41px; word-wrap: break-word">
                Fast & Reliable Email Delivery System
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
          <div class="form_section d-flex align-items-center">
            <div class="inner_container">
              <div class="header_form">
                <div class="login_title text-customblack mb-0">
                  Great! Now let’s verify your email address.
                </div>
                <div class="verification_image_container">
                  <img src="../assets/image/verificationImage.svg" alt="verification" />
                </div>
                <span class="text-customblack">Click on the link in the email we sent to nisha.bhatt@codalien.com</span>
                <span class="d-block text-customblack mt-2">Haven't received it? <NuxtLink class="text-decoration-underline ">Resend email</NuxtLink></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.account_verification_page {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
}

.section_height {
  min-height: 100vh;
}
.logo_text_area {
  max-width: 380px;
  padding: 0px 6px;
  position: relative;

}

.section_height .logo_text_area {
    max-width: 800px;
    width: 100%;
    margin: auto;
    position: relative;
    top: -70px;
}

.logo_panel,
.form_section {
  height: 100%;
}

.logo_panel {
  background: $bluegreen;
  display: flex;
}

.emailer_logo {
  margin: auto;
}

.form_section {
  padding: 20px;
}

.inner_container {
  max-width: 800px;
  width: 100%;
}


.login_title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 23px;
}

.verification_image_container {
  width: 353px;
  height: 317px;
  margin: 40px 0;
}

@media (max-width: 1024px) {
  .form_section {
    padding: 40px 20px;
  }
}

@media (max-width: 767px) {
  .form_section {
    padding: 20px;
  }
}
</style>
