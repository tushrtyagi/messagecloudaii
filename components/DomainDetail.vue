<template>
    <div>
      <div class="api_tabs bg-aliceblue">
        <div class="row g-0">
          <div class="col-lg-12 col-md-7 d-flex justify-content-between align-items-center tabs_border">
            <div class="head-text">
              <p class="text-white m-0  p-3 ">You will need to install the following records to complete the process..</p>
            </div>
            <NuxtLink to ="/coworker">
              <button class="text-customeblack activetab"><strong>Forward To Colleague</strong></button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="api-tab-content mb-4 ">
      
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-12 m-0">
               
                <div class="d-flex align-items-center justify-content-between ">
                    <div class=" ml-5 my-1">
  <h3 class="ml-3 text-aliceblue my-3 domain-head" >codalien.com</h3>

  <CIcon :icon="cilClipboard" />

  </div>
  <CFormCheck label="Use as default domain" class="formcheck text-muted" />
</div>

                <div class="table_data mt-4 bg-white">
          <table class="table">
            <thead>
              <tr>
                <th>STATUS</th>
                <th>TYPE</th>
                <th>HOST</th>
                <th>VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>
                    <p>
                        FAILED
                    </p>
                 </td>
                <td>
                    <p><strong>CNAME</strong></p> 
                </td>
                <td><div class="input-group d-flex align-items-center">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="HOST NAME">
                </div></td>
                <td>
                    <div class="input-group d-flex align-items-center">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="VALUE">
                </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
              
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
      return {


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
    
  .form-control {
    padding: 5px 135px;
    text-align: left;
    margin-right: 300px;
}
    .form-label{
      font-size: 15px;
      font-weight: bold;
    }
    .formcheck input[type="checkbox"] {
      border-color: $aliceblue; 
      box-shadow: none;
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
    }
    .input-group .form-control {
      flex: 1;
    }
    button{
      display: inline;
      position:relative;
    }
   }

   .table_data td {
    border: none;
    span{
      display:block;
      margin:auto;
      padding:0 0;
    }}
   .api-tab-content{
    border-radius: 4px;
    border: 0.1px solid #D9D9D9;
    padding: 35px;
    .formcheck input[type=checkbox] {
    box-shadow: none;
}
    
    .domain-head{
        font-weight: bold;
    }
    .pills_content {
    padding: 32px;
   
  }
   }
  </style>
  