<template>
  <div class="basic_information_page">
    <div class="section_height w-100">
      <div class="row g-0 vh-100">
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
                  Let’s start with the basics.
                </div>
              </div>
              <div class="form__row">
                <form>
                  <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-6 col-lg-6 row_input">
                      <label
                        class="d-flex align-items-center text-customblack"
                        for="email"
                        >First name<sup class="text-maximumred mendratory_sign"
                          >*</sup
                        ></label
                      >
                      <input
                        placeholder="Enter your First Name"
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="text"
                        name="firstName"
                        required
                      />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 row_input">
                      <label
                        class="d-flex align-items-center text-customblack"
                        for="email"
                        >Last name<sup class="text-maximumred mendratory_sign"
                          >*</sup
                        ></label
                      >
                      <input
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="text"
                        placeholder="Enter your Last Name"
                        name="lastname"
                        required
                      />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-12 row_input">
                      <label
                        class="d-flex align-items-center text-customblack"
                        for="email"
                        >Company<sup class="text-maximumred mendratory_sign"
                          >*</sup
                        ></label
                      >
                      <input
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="text"
                        placeholder="Enter your Company"
                        name="companyname"
                        required
                      />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-12 row_input">
                      <label
                        class="d-flex align-items-center text-customblack"
                        for="email"
                        >Website</label
                      >
                      <input
                        class="input w-100 bg-white"
                        autocomplete="off"
                        type="text"
                        placeholder="Enter your Website"
                        name="companyname"
                        required
                      />
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-12 row_input">
                      <button class="login_btn bg-darkcerulean text-white next_btn me-4">
                        Next
                      </button>
                      <button class="text-customblack bg-white next_btn later_answer_btn">
                        Answer later
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


.basic_information_page {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;

  .section_height {
    min-height: 100vh;

    .row {
      height: 100%;
    }

    .col-lg-6 {
      height: 100%;
    }
    .logo_text_area {
    max-width: 800px;
    width: 100%;
    margin: auto;
    position: relative;
    top: -65px;
}
  }
}

.logo_panel {
  background: $bluegreen;
  display: flex;
  .emailer_logo {
    margin: 0 auto;
  }
}



.login_title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 23px;
}
.later_answer_btn{
    padding: 12px 27px;
  font-size: 1.2rem;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  font-weight: 600;
  }
 
  .later_answer_btn:hover{
    color: #7e7e7e;
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
