<template>
    <div>
      <div class="api_tabs bg-aliceblue">
        <div class="row g-0">
          <div class="col-lg-12 col-md-7 d-flex justify-content-between align-items-center tabs_border">
            <div class="head-text">
              <p class="text-white m-0 mr-3 p-3 ">Enter a coworker's email address to add them to the domain and we'll send them everything they need to install these records</p>
            </div>
           
          </div>
        </div>
      </div>
      <div class="api-tab-content mb-4 ">
      
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-12 m-0">
              <form>
               
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label mb-2 me-3">To</label>
                  <div class="input-group d-flex ">
                    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp">
                 
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label mb-2 me-3">Message</label>
                  <div class="input-group d-flex ">
                    <textarea type="text" class="form-control text-muted  " id="exampleInputmessage" />
                   
                  </div>
                </div>
              <!-- placeholder="Hi , i'm trying to authenticate our domain with MessageCloud , but i don't have the ability to modify our DNS records. Can you help me add these records , so that i can complete the process ?" -->
                <div class="mb-3 mt-4">
                  <button type="submit" class="submit-btn bg-aliceblue text-white btn-sm">Send</button>
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
      type: {
        type: String,
        required: true,
      },
    },
    components: {CFormCheck},
    data() {
      return {};
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
      padding: 10px 26px; /* Adjusted padding */
      border-radius: 7px;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
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
     
  .submit-btn{
    padding: 7px 30px;
    font-size: 1rem;
    border-radius: 7px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
  }
    
    // .form-control{
    //  margin-right:300px;
   
     
    // }
    .form-control[placeholder] {
      position: relative;
      left: 0;
      
    }
    .form-label{
      font-size: 15px;
      font-weight: bold;
    }
    .formcheck input[type="checkbox"] {
      // border-color: $aliceblue; 
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
      align-items: left;
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
  