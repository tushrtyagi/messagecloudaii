<template>
  <header :class="{ 'sticky-header': isSticky, 'shrink bg-sidegrey' :!store.isSidebarExpanded, 'shrink expend bg-sidegrey':store.isSidebarExpanded }" class="header_bar ">
    <div class="container-fluid d-block">
      <div class="row align-items-center">
        
        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
         
      <div class="logo"  >
        <NuxtLink to="/" class="nav-link text-customblack company_logo">
             
            <div class="full_icon">
                  <img
                        v-if="store.isSidebarExpanded"
                        src="../assets/image/logo.svg"
                        alt="Full Logo"
                       
                        @click="toggleSidebar"
                        />
            </div>
                <div class="logo_icon">
                <img
                v-if="!store.isSidebarExpanded"
               
                  src="../assets/image/dropdownlogo.svg"
                  alt="Dropdown Logo"
                  @click="toggleSidebar"
                />
              </div>
            </NuxtLink>
            <span class="user_greet-not text-black"
            v-if="!store.isSidebarExpanded"
        >Welcome back,
              <label >Nisha Bhatt</label></span
            >
            <span class="user_greet text-black"
            v-if="store.isSidebarExpanded"
        >Welcome back,
              <label >Nisha Bhatt</label></span
            >
      </div>
      
    
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
          <div class="d-flex align-items-center justify-content-end">
              <div class="icon_container-bell icon_container ms-0 " style="padding:2px">
                <img
                  src="../assets/image/notification_1.svg"
                  alt="notification"
                />
              </div>

              
              <div class="icon_container-admin icon-container" style="padding:2px">
                <img
                  src="../assets/image/admin_1.svg"
                  alt="admin"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { store } from '../stores/store';
export default {
  components: {},
  setup() {
    return { store };
  },
  data() {
    return {
      isSticky: false,      isDropdownRotated:false,
      

    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    toggleSidebar ()  {
      store.toggleSidebar();
    }
 
  }
};
</script>
<style lang="scss">
@import "../assets/scss/colors.scss";
.header_bar {
  height: 60px;
  position: relative;
  padding: 20px 20px 26px;
  display: flex;
  align-items: center;
  
  .listing-elements li {

margin: 10px; // Adjust spacing between items as needed
color: white;
font-size: 15px;
font-family: Inter;
font-weight: 500;
line-height: 14px;
word-wrap: break-word;
}
  z-index: 999;
  background-color: $bluegreen;
  // width: 100%; // Set the width to 100%
  .user_greet {
    position: fixed;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    top: 22px;
    left: 250px;
    label{
      color:$darkcerulean;
    }
  }
  .user_greet-not {
    position: fixed;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    top: 22px;
    left: 125px;
    label{
      color:$darkcerulean;
    }
  }

  .logo {
    position: fixed;
    left:10px;
  display: inline-block; 
  width:auto;
  margin-right: 20px;
  .full_icon img{
  background: transparent;
    height: 31px;
    width: 179px;
    position: fixed;
    top: 20px;
    left: 16px;
    
  }
  .logo_icon img{
  background: transparent;
    height: 23px;
    width: 40px;
    position: fixed;
    top: 24px;
    left: 16px;
    
  }

  }
// .dropdown-icon{
//   position: fixed;
//     left: 176px;
//     width: 17px;
//     height: 17px;
//     transform: rotate(-90.52deg);
//     transform-origin: 0 0;
//     background: #EAEAEA;
//     border-radius: 9999px;
//     border: 0.25px #BBBBBB solid;
//     top: 43px;

//     img{
//       position: fixed;
//     top: 3px;
//     width: 7px;
//     height: 10px;
//     -o-object-fit: contain;
//     object-fit: contain;
//     left: 3px;
    
//   }
// }
.rotated {
transform: rotate(90deg);
}



  .icon_container-bell {
  
    width: 26px;
    height: 30px;
    position: fixed;
    right: 130px;

    //  background-color: $aliceblue;
    img {
      width: 100%;
      height: 100%;
      // filter: invert(100%);
      object-fit: contain;
    }
  }
 
  
  .icon_container-admin{
    
    width: 26px;
    height: 30px;
    position: fixed;
    right: 80px;
    top:16px;
    img {
      position: relative;
      top:-4px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  }

.sticky-header {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 2;
  top: 0px;
  width: calc(100% - 60px);
  left: 60px;
  background-color: $sidegrey;
}
.right_panel.shrink_screen .sticky-header {
  width: calc(100% - 192px);
  left: 192px;
}




a.router-link-active.router-link-exact-active.company_logo {
  background: transparent;
  box-shadow: none;
 
}
a.router-link-active.router-link-exact-active.company_logo .full_icon img{
  background: transparent;
    height: 34px;
    width: 186px;
    position: fixed;
    top: 17px;
    left: 6px;
    
  }
  
  a.router-link-active.router-link-exact-active.company_logo .logo_icon img{
    background: transparent;
    height: 12px;
    width: 33px;
    position: fixed;
    top: 29px;
    left: 18px;
  }
  
  // .dropdown-icon{
  //   position: relative;
  //   right: 10px;
  //   height: 20px;
  // }

 
  .adjust-left{
    position: absolute;
    right:20px;
    top:10px;
  }

</style>
