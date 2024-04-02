<template>
  <div class="tab_content">
    <div class="row mt-4">
      <div class="col-lg-3">
        <h2 class="text-customblack">Personal Information</h2>
      </div>
      <div class="col-lg-7">
        <div class="personal_info_tab bg-white">
          <div class="form">
            <div class="row">
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Email address<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="nisha.bhatt@codalien.com"
                />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >First name<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="Kavita" />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >Last name<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="Negi" />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >Phone Number<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="9576978110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-3">
        <h2 class="text-customblack">Company Information</h2>
      </div>
      <div class="col-lg-7">
        <div class="personal_info_tab bg-white">
          <div class="form">
            <div class="row">
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >Company / Organization<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter your company name"
                />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack">Website (optional)</label>
                <input class="bg-white w-100" type="text" placeholder="Website" />
              </div>
              <div class="col-lg-12 mb-2">
                <label class="d-block text-customblack"
                  >Street address<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter your street address"
                />
              </div>
              <div class="col-lg-6 mb-2">
                <label class="d-block text-customblack"
                  >ZIP Code<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter your Zip Code"
                />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >City<sup class="text-maximumred">*</sup></label
                >
                <input class="bg-white w-100" type="text" placeholder="Enter Your City" />
              </div>
              <div class="col-lg-6">
                <label class="d-block text-customblack"
                  >Country<sup class="text-maximumred">*</sup></label
                >
                <input
                  class="bg-white w-100"
                  type="text"
                  placeholder="Enter Your Country"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="update_btn_container mt-5">
          <button class="login_btn bg-aliceblue text-white">Update</button>
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
};
</script>

<style lang="scss">
.personal_info_tab {
  border-radius: 7px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 26px;
  .form {
    label {
      font-weight: 500;
    }
    sup {
      font-weight: 500;
    }
    input {
      border: 1px solid #d9d9d9;
      margin: 10px 0 14px;
      padding: 12px 20px;
      border-radius: 7px;
    }
  }
}
.update_btn_container {
  button.login_btn {
    font-size: 1.063rem;
    font-weight: 400;
  }
}
</style>
