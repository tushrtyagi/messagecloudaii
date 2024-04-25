<template>
    <div>
      
      
      
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-12 m-0">
               
               

                <div class="table_data mt-4">
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
                  
                    <img src="../assets/image/pass.svg" alt="" class="mx-3">
                  
                 </td>
                <td>
                    <p>CNAME</p> 
                </td>
                <td><div class="input-group d-flex align-items-center">
                  <p>em3178.test.codalien.com</p>
                  <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="HOST NAME" >  -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-5 mb-3 copy-icon" />
                
                
                </div></td>
                <td>
                    <div class="input-group d-flex align-items-center">
                      <p>_dmarc.test.codalien.com</p>
                  <!-- <input type="text" class="form-control" id="exampleInputPassword1" placeholder="VALUE"> -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy_icon" />
                </div>
                </td>
                
              </tr>
              <tr >
                <td>
                    <p>
                      <img src="../assets/image/pass.svg" alt="" class="mx-3">
                    </p>
                 </td>
                <td>
                    <p>CNAME</p> 
                </td>
                <td><div class="input-group d-flex align-items-center">
                  <p>s1._domainkey.test.codalien.com</p>
                  <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="HOST NAME" >  -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy-icon" />
                
                
                </div></td>
                <td>
                    <div class="input-group d-flex align-items-center">
                      <p>_dmarc.test.codalien.com</p>
                  <!-- <input type="text" class="form-control" id="exampleInputPassword1" placeholder="VALUE"> -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy_icon" />
                </div>
                </td>
                
              </tr>
              <tr >
                <td>
                    <p>
                      <img src="../assets/image/pass.svg" alt="" class="mx-3">
                    </p>
                 </td>
                <td>
                    <p>CNAME</p> 
                </td>
                <td><div class="input-group d-flex align-items-center">
                  <p>s2._domainkey.test.codalien.com</p>
                  <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="HOST NAME" >  -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy-icon" />
                
                
                </div></td>
                <td>
                    <div class="input-group d-flex align-items-center">
                      <p>_dmarc.test.codalien.com</p>
                  <!-- <input type="text" class="form-control" id="exampleInputPassword1" placeholder="VALUE"> -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy_icon" />
                </div>
                </td>
                
              </tr>
              <tr >
                <td>
                    <p>
                      <img src="../assets/image/failed.svg" alt="" class="mx-3">
                    </p>
                 </td>
                <td>
                    <p>TXT</p> 
                </td>
                <td><div class="input-group d-flex align-items-center">
                  <p>s3.domainkey.test.codalien.com</p>
                  <!-- <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="HOST NAME" >  -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-3 mb-3 copy-icon" />
                
                
                </div></td>
                <td>
                    <div class="input-group d-flex align-items-center">
                      <p>_dmarc.test.codalien.com</p>
                  <!-- <input type="text" class="form-control" id="exampleInputPassword1" placeholder="VALUE"> -->
                  <img src="../assets/image/copy_link.svg" alt="copy_icon" class="ms-2 mb-3 copy_icon" />
                </div>
                </td>
                
              </tr>

            </tbody>
          </table>
        </div>
        <div class=" btns d-inline-block my-3 ">
        <NuxtLink to="/createDomain">
  <button type="submit" class="login_btn  bg-aliceblue text-white btn-sm mt-4 ms-1 ">Verify </button>
</NuxtLink>
<NuxtLink to="/coworker">
  <button type="submit" class="login_btn bg-aliceblue text-white btn-sm mb-3 ms-5">Forward to Colleague</button>
</NuxtLink>
       
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
      width: 79%;
      p{
        width:100%;
     
      }
     }
    button.activetab {
      background: white;
      color: black;
      padding: 16px 27px; /* Adjusted padding */
      border-radius: 7px;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.27);
    }
  }
  
  .btn{
    position: relative;
    right:270px;
    padding: 7px 22px;
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
    

    .form-label{
      font-size: 15px;
      font-weight: bold;
    }
   
    .position-relative {
      position: relative;
    }
    .input-group {
      display: flex;
    
      align-items: center;
      .form-control {
        flex:1;
    padding: 5px 200px;
    text-align: left;
    margin-right: 320px;
  }
 

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
   .btns button{
  font-size: 15px;
}

  
  </style>
  