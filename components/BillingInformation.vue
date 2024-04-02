<template>
  <div class="tab_content">
    <div class="row">
      <div class="billing_info mt-4">
        <p class="text-nickel">
          Your billing information may be different from your account's profile
          information. Billing information appears in the invoices.
        </p>
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          <div class="personal_info_tab bg-white mt-5">
            <div class="form">
              <div class="row">
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
                <div class="col-lg-8 mb-2">
                  <label class="d-block text-customblack"
                    >Address<sup class="text-maximumred">*</sup></label
                  >
                  <input class="bg-white w-100" type="text" placeholder="9576978110" />
                </div>
                <div class="col-lg-4 mb-2">
                  <label class="d-block text-customblack"
                    >Postal code<sup class="text-maximumred">*</sup></label
                  >
                  <input class="bg-white w-100" type="text" placeholder="110085" />
                </div>
                <div class="col-lg-12 mb-2">
                  <label class="d-block text-customblack"
                    >Company<sup class="text-maximumred">*</sup></label
                  >
                  <input
                    class="bg-white w-100"
                    type="text"
                    placeholder="Enter Your Company Name"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="d-block text-customblack"
                    >City<sup class="text-maximumred">*</sup></label
                  >
                  <input
                    class="bg-white w-100"
                    type="text"
                    placeholder="Enter Your City"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="d-block text-customblack"
                    >Country<sup class="text-maximumred">*</sup></label
                  >
                  <input
                    class="bg-white w-100"
                    type="text"
                    placeholder="Enter Your Country"
                  />
                </div>
                <div class="col-lg-12 mb-2">
                  <label class="d-block text-customblack"
                    >GSTIN<sup class="text-maximumred">*</sup></label
                  >
                  <div class="for_row">
                    <div class="have_gst d-flex my-2">
                      <CFormCheck
                        type="radio"
                        class="mb-0"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        label="I have a GSTIN number"
                      />
                      <CFormCheck
                        type="radio"
                        class="mb-0 ms-5"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        label="I don't have GSTIN number"
                        checked
                      />
                    </div>
                     <input
                    class="bg-white w-50"
                    type="text"
                    placeholder="GSTIN number"
                  />
                  </div>
                </div>
                <div class="col-lg-12">
                  <label class="d-block text-customblack"
                    >Invoice recipient Email<sup class="text-maximumred">*</sup></label
                  >
                  <input class="bg-white w-100" type="text" placeholder="mail" />
                </div>
                <div class="col-lg-12">
                 <div class="update_btn_container mt-4">
                <button class="login_btn bg-darkcerulean text-white">Confirm billing information</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CFormCheck } from "@coreui/vue";
export default {
  components: { CFormCheck },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.billing_info {
  .personal_info_tab {
    border-radius: 7px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 56px 76px;
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
      .have_gst {
        .form-check {
          padding: 0;
          align-items: center;
          display: flex;
          label {
            margin-bottom: 0;
            color: #000;
            font-size: 15px;
            font-weight: 400;
            padding-left: 15px;
          }
          input {
            margin: 0px 0 0px;
            padding: 0;
            border: 1px solid #02487b;
          }
        }
        .form-check-input:focus{
            box-shadow: none;
        }
        .form-check-input:checked {
    background-color: #02487B;
        }
      }
    }
  }
  .update_btn_container {
    button.login_btn {
      font-size: 1.063rem;
      font-weight: 400;
    }
  }
}
</style>
