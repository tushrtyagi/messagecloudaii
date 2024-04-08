<template>
    <div>
      <div class="api_tabs bg-aliceblue">
        <div class="row g-0">
          <div class="col-lg-12 col-md-7 d-flex justify-content-between align-items-center tabs_border">
            <div class="head-text">
              <p class="text-white m-0 mr-3 p-3 ">Add the TXT and CNAME records, Hostnames, and Values for this domain in the settings section of your DNS provider.</p>
            </div>
           <!-- <NuxtLink to="/coworker" >
             <button class="text-customeblack activetab">Forward To Colleague</button>
           </NuxtLink> -->
          </div>
        </div>
      </div>
      <div class="api-tab-content first">
      
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-12 m-0">
              <form>
                <div class="mb-4 ">
                  <h4 for="head1" class=" head ">Add DKIM Record</h4>
                  
                </div>
                <div class="mb-3 d-inline-block mr-4  ">
                  <label for="exampleInputEmail1" class="form-label mb-2 ">Type</label>
                  <p class="text-muted"><strong>TXT</strong></p>
                </div>
                <div class="mb-3  d-inline-block mx-5">
                  <label for="exampleInputEmail1" class="form-label mb-2 me-3">Hostname</label>
                  <div class="input-group d-flex align-items-center">
                    <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> -->
                    <!-- <button type="button" class="btn  btn-sm">Copy</button> -->
                    <p>_dmarc.test.codalien.com</p>

                    <img src="../assets/image/copy_link.svg" alt="copy_icon" class= "copy-icon ms-2 mb-3" />

                  </div>
                </div> 
                <div class="mb-3 d-inline-block mx-4">
                  <label for="exampleInputPassword1" class="form-label mb-2 me-3">Value</label>
                  <div class="input-group d-flex align-items-center">
                    <!-- <input type="text" class="form-control" id="exampleInputPassword1"> -->
                    <!-- <button type="button" class="btn  btn-sm">Copy</button> -->
                    <p>v=DMARC1; p=none;</p>
                    <img src="../assets/image/copy_link.svg" alt="copy_icon" class="copy-icon ms-2 mb-3" />

                  </div>
                </div>
                <hr class="my-4">
                <div class="mb-4 ">
                  <h4 for="head1" class=" head ">Add SPF Record</h4>
                </div>
            <div class="mb-3 d-inline-block  mr-3">
              <label for="exampleInputEmail1" class="form-label mb-2 me-3">Type</label>
              <p class="text-muted"><strong>CNAME</strong></p>
            </div>
            <div class="mb-3 d-inline-block mx-5">
              <label for="exampleInputEmail1" class="form-label mb-2 me-3">Hostname</label>
              <div class="input-group d-flex align-items-center">
                <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> -->
                <!-- <button type="button" class="btn  btn-sm">Copy</button> -->
                <p>s2._domainkey.test.codalien.com</p>
                <img src="../assets/image/copy_link.svg" alt="copy_icon" class="copy-icon  ms-2 mb-3" />

              </div>
            </div>
            <div class="mb-3 d-inline-block mx-4">
              <label for="exampleInputPassword1" class="form-label mb-2 me-3">Value</label>
              <div class="input-group d-flex align-items-center">
                <!-- <input type="text" class="form-control" id="exampleInputPassword1"> -->
                <!-- <button type="button" class="btn  btn-sm">Copy</button> -->
                <p>u43392630.wl131.sendgrid.net</p>
                <img src="../assets/image/copy_link.svg" alt="copy_icon" class="copy-icon  ms-2 mb-3" />

              </div>
            </div>
            <div class="mb-1  ">
              <CFormCheck label="The TXT and  CNAME record has been added to the DNS provider."  v-model="checked" class="formcheck text-muted mt-2" />
              <p v-if="!checked" class="text-danger">Please confirm you have added the records to your DNS provider.</p>
            </div>
            <div class="mb-2 mt-4">
              <NuxtLink to="/createDomain">
                <button type="submit" class="submit-btn bg-aliceblue text-white btn-sm">Save</button>
              </NuxtLink>
              <NuxtLink to="/coworker">
                <button type="submit" class="submit-btn bg-aliceblue text-white btn-sm ms-5">Forward to Colleague</button>
              </NuxtLink>
              
            </div>
               
              </form>
            </div>
       
        </div>

      </div>
      
    </div>
  </template>
  
  <script>
  import { CFormCheck } from '@coreui/vue';
  
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      cname:{
        type:String,
        required:true,
      }
    },
    components: {CFormCheck},
    data() {
      return {
        checked: false ,
      };
    },
  };
  </script>
  
  <style lang="scss">
  @import "../assets/scss/colors.scss";
  .api_tabs {
    border-radius: 7px 7px 0px 0px;
    padding: 13px 26px;
    button {
      font-size: 14px; 
      padding: 4px 12px;
      background: none;
      color: white;
    }
     .head-text{
      p{
        width:90%;
      }
     }
    button.activetab {
      background: white;
      color: black;
      font-weight:800 ;
      padding: 10px 26px; /* Adjusted padding */
      border-radius: 7px;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    }
    button.activetab:hover {
      box-shadow: 0px 0px 5px 0px;
    }
  }
  
  .btn{
    position: relative;
    right:270px;
    padding: 7px 30px;
    font-size: 0.8rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    font-weight: 600;
  }
  
  
  form{
    .formcheck input[type=checkbox] {
    box-shadow: none;
}
     
     .head{
        font-weight: 900;
        margin-bottom: 15px;
     }
  .submit-btn{
    padding: 7px 30px;
    font-size: 1rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  }
    .submit-btn:hover{
      background-color: #6eb9e1 !important;
  color:white;
    }
    .form-control{

    
     margin-right:300px;
   
     
    }
    .form-label{
      font-size: 15px;
      font-weight: bold;
    }
    .formcheck input[type="checkbox"] {
      border-color: $aliceblue; 
    }
    .formcheck label {
      font-weight:400;
      font-size: 14px;
    
    }
    .position-relative {
      position: relative;
    }
    .input-group {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    .input-group .form-control {
      flex: 1;
    }
    button{
      display: inline;
      position:relative;
    }
   }
   .api-tab-content{
    border-radius: 4px;
    border: 0.1px solid #D9D9D9;
    padding: 35px;
    .pills_content {
    padding: 32px;
   
  }
   }
  </style>
  