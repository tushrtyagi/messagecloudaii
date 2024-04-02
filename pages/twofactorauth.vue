<template>
    <div class="login_page">
      <div class="section_height w-100">
        <div class="row g-0 vh-100 d-flex">
          <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <div class="logo_panel d-flex align-items-center">
              <div class="logo_text_area text-center text-white">
                <div class="emailer_logo">
                  <img src="../assets/image/logo.svg" alt="logo" />
                </div>
                <div class="logo_text">
                  Fast & Reliable Email Delivery System<br/><br/><br/><br/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="form_section d-flex justify-content-center">
              <div class="inner_container">
                <div class="header_form">
                  <div class="login_title text-customblack text-center mb-0">Verify Phone Number</div>
                </div>
                <div class="form__row">
                  <form @submit.prevent="sendVerificationCode">
                    <div class="row justify-content-center">
                      <div class="col-sm-12 col-md-12 col-lg-10 row_input" v-if="!showVerification">
                        <label class="d-flex align-items-center text-customblack" for="phone">
                          Phone Number<sup class="text-maximumred  mendratory_sign">*</sup>
                        </label>
                        <input
                          placeholder="Phone Number"
                          class="input w-100 bg-white"
                          autocomplete="off"
                          type="tel"
                          v-model="phoneNumber"
                          id="phone"
                          name="phoneNumber"
                          required
                        />
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-10 pt-4 text-center" v-if="!showVerification">
                        <button type="submit" class="text-white bg-darkcerulean login_btn w-100">
                          Send Verification Code
                        </button>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-10 pt-4 row_input" v-if="showVerification">
                        <label class="d-flex align-items-center text-customblack" for="verificationCode">
                          Verification Code<sup class="text-maximumred  mendratory_sign">*</sup>
                        </label>
                        <input
                          placeholder="Verification Code"
                          class="input w-100 bg-white"
                          autocomplete="off"
                          type="text"
                          v-model="verificationCode"
                          id="verificationCode"
                          name="verificationCode"
                          required
                        />
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-10 pt-4 text-center" v-if="showVerification">
                        <NuxtLink to="/">
                            <button type="submit" class="text-white bg-darkcerulean login_btn w-100">
                              Verify
                            </button>
                        </NuxtLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CSpinner } from "@coreui/vue";
  
  export default {
    components: { CSpinner },
    data() {
      return {
        loading: false,
        phoneNumber: "",
        verificationCode: "",
        toggleImage: false,
        showVerification: false
      };
    },
    methods: {
      async sendVerificationCode() {
        // Simulated logic for sending verification code
        console.log("Sending verification code to:", this.phoneNumber);
        // Set showVerification to true to reveal verification code input
        this.showVerification = true;
      },
      async verifyCode() {
        // Simulated logic for verifying the code
        console.log("Verifying code:", this.verificationCode);
        // You can perform API calls or other actions here to verify the code
        // Upon successful verification, you can proceed with login or any other action
        // Example:
        // if (codeVerifiedSuccessfully) {
        //   // Proceed with login or other actions
        // }
      },
      showPassword() {
        var InputType = document.getElementById("password");
        if (InputType.type == "password") {
          InputType.type = "text";
        } else {
          InputType.type = "password";
        }
        this.toggleImage = !this.toggleImage;
      }
    }
  };
  </script>
  
  <style lang="scss">
  @import "../assets/scss/colors.scss";
  @import "../assets/scss/style.scss";
  
  .row_input {
    margin-bottom: 23px;
  }
  
  label {
    sup.mendratory_sign {
      padding-top: 11px;
      font-size: 16px;
      font-weight: 400;
      padding-left: 2px;
    }
  }
  
  .form_section {
    min-height: 100%;
    padding: 20px 20px 20px;
    flex-direction: column;
    .inner_container {
      max-width: 670px;
      width: 100%;
      margin: 69px 0px;
      .user_activity {
        a {
          font-size: 1rem;
        }
      }
    }
    .form__row {
      margin-top: 57px;
      label {
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.438rem;
      }
      .custom_btn {
        border: 1px solid #d9d9d9;
        box-shadow: unset;
        font-size: 15px;
        font-weight: 400;
        img {
          margin-right: 10px;
          width: 15px;
          height: 15px;
        }
      }
    }
    input:-internal-autofill-selected {
      background-color: white !important;
    }
    .input {
      color: #282828 !important;
      font-size: 0.9rem;
      font-weight: 400;
      border-radius: 7px;
      border: 1px solid #d9d9d9;
      padding: 13px 21px;
      margin-top: 16px;
    }
    .input::placeholder {
      color: #8c8c8c !important;
    }
  }
  
  .login_page {
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
    .logo_text_area {
      max-width: 800px;
      width: 100%;
      margin: auto;
      position: relative;
      top: -70px;
    }
  }
  .logo_panel {
    background: $bluegreen;
    min-height: 100%;
    padding: 40px 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logo_text_area {
      .logo_text {
        width: 100%;
        height: auto;
        text-align: center;
        color: #070585;
        font-size: 35px; /* Increase font size for text */
        
        font-family: Poppins;
      font-weight: 600;
      line-height: 41px;
      word-wrap: break-word;
      margin-bottom: 20px;
    }

    .emailer_logo {
      padding: 6px 0px;
      width: 100%;
      max-width: 300px;
      margin: 0 auto; /* Center-align the logo */
      display: flex;
      justify-content: center;

      img {
        width: 100%; /* Increase image width */
        height: auto;
        position: relative;
        right: 28px;
        top: 35px; /* Maintain aspect ratio */
      }
    }
  }
}

.form_title {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
.login_title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 23px;
}
span.or_section::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  left: 0%;
  top: 57%;
  background: $gainsboro;
  z-index: -1;
}
span.or_section {
  font-size: 20px;
  font-weight: 400;
}
.eye_icon {
  position: absolute;
  top: auto;
  right: 5%;
  left: auto;
  bottom: 11%;
}
.login_page .section_height .logo_text_area {
  padding: 97px 60px;
}
@media (max-width: 1024px) {
  .form_title {
    font-size: 20px;
  }

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
  