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
                <div class="login_title text-customblack text-center mb-0">Log In</div>
              </div>
              <div class="form__row">
                <form @submit.prevent="login">
                  <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-12 col-lg-10 row_input">
                      <label class="d-flex align-items-center text-customblack" for="email"
                        >Business Email<sup class="text-maximumred  mendratory_sign">*</sup></label
                      >
                      <input
                        placeholder="Email"
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="email"
                        v-model="login.email"
                        id="email"
                        name="businessEmail"
                        required
                      />
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-10 position-relative">
                      <label class="d-flex align-items-center text-customblack" for="email"
                        >Password<sup class="text-maximumred mendratory_sign">*</sup></label
                      >
                      <input
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="password"
                        id="password"
                        v-model="login.password"
                        placeholder="Enter your Password"
                        name="userPassword"
                        required
                      />
                      <img
                        class="eye_icon"
                        src="../assets/image/eye_icon.png"
                        alt="eye_icon"
                        @click="showPassword"
                        v-if="!toggleImage"
                      />
                      <img
                        class="close_eye"
                        src="../assets/image/cross-eye.svg"
                        alt="eye___icon"
                        @click="showPassword"
                        v-if="toggleImage"
                      />
                    </div>
                  </div>

                  <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-12 col-lg-10 pt-4 text-center">
                      <button
                        v-if="!loading"
                        type="submit"
                        class="text-white bg-darkcerulean login_btn w-100"
                      >
                        Log In
                      </button>
                      <button
                        type="submit"
                        @click.prevent="false"
                        v-if="loading"
                        :disabled="true"
                        class="mt-2 text-white bg-darkcerulean login_btn w-100"
                      >
                        <CSpinner color="white" />
                      </button>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-8 pt-4 d-flex justify-content-evenly user_activity">
                      <NuxtLink class="text-customblack text-decoration-underline" to="signUp">Create an account</NuxtLink>
                      <NuxtLink class="text-customblack text-decoration-underline" to="forgotpassword">Forgot my password</NuxtLink>
                    </div>
                    <div
                      class="col-sm-12 col-md-12 col-lg-10 pt-2 mt-3 text-center position-relative"
                    >
                      <span class="text-customblack or_section bg-white">OR</span>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-10 pt-2 text-center">
                      <button type="submit" class="custom_btn text-customblack bg-white login_btn w-100">
                        <img src="../assets/image/google.svg" alt="google_icon" />Sign in
                        with Google
                      </button>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-10 pt-3 text-center">
                      <button type="submit" class="custom_btn text-customblack bg-white login_btn w-100">
                        <img src="../assets/image/icon-microsoft.svg" alt="apple_icon" />
                        Sign in with Microsoft
                      </button>
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
import { store } from "../stores/store";


export default {
  components: { CSpinner },
  setup() {
   
   return {
  
     store
   }},
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      toggleImage:false,
 
    };
  },
  methods: {
     login() {
  this.loading = true;
  // Assuming you receive a token from the server upon successful login
  const token = 'USER';

  // Simulating async operation with setTimeout
  setTimeout(() => {
    // Store the token locally for authentication
    localStorage.setItem('token', token);
    
    // Set the isLoggedIn state to true
    this.store.isLoggedIn = true;

    // Redirect to other page or perform any necessary actions
    // For example:
    this.$router.push('/');

    this.loading = false;
  }, 3000); // Change 3000 to your actual delay
},
    showPassword(){
        var InputType = document.getElementById("password");
        if(InputType.type == "password"){
            InputType.type = "text"
        }
        else{
            InputType.type = "password"
        }
        this.toggleImage = !this.toggleImage;
    }
  },
};
</script>
<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.row_input {
   margin-bottom: 23px;
}
label{
      sup.mendratory_sign{
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
    .user_activity{
      a{
      font-size:1rem;
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
    top:-70px;

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
    right: 3px;
    top: 42px; /* Maintain aspect ratio */
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
.close_eye {
  position: absolute;
    top: auto;
    right: 5%;
    left: auto;
    bottom: 11%;
    filter: grayscale(100%);
    width:26px;
}

.login_page .section_height .logo_text_area{
   padding:97px 60px;
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
