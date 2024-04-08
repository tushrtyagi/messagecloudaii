<script>
import { CSidebar } from "@coreui/vue";
import { store } from '../stores/store';
export default {
  name: "Sidebar",
  components: { CSidebar },
  setup() {
    return {
      store
    };
  },
  data() {
    return {
      
    };
  },
  mounted() {
  
  },
  methods: {
    togglemenu() {
      store.toggleSidebar();
     
    },
    toggleDropdownmenu() {
     
      store.toggleDropdown();
    },
  }
};
</script>

<template>
  
  <!-- <Header @toggle-menu="togglemenu"></Header> -->
  <div
    class="sidebar"
    id="sidemenu"
  
    :class="`${!store.isSidebarExpanded ? 'shrink bg-sidegrey' : 'shrink expend bg-sidegrey'}`"
  >
 
    <div class="toggle_menu_wrap " >
      <ul class="sidebar-nav ">
        <li> 
          <NuxtLink class="text-customblack " to="/">
              <span class="dash-icon"    @click="togglemenu" >
                <img src="../assets/image/home.svg" alt="search"  />
              </span>
              <label class="ms-3 ">Dashboard</label>
          
            </NuxtLink>
        </li>
        <li @click="toggleDropdownmenu" class="position-relative d-block ">
          
          <div class="configuration_nav d-flex text-customblack">

            <span class ="config-icon" @click="togglemenu" > <img src="../assets/image/configuration_1.svg" alt="configuration" />
            </span>
            <label class="ms-3">Configuration</label>
            <span class="dropdown-icon" >
              <img src="../assets/image/dropdown.svg" alt="down-arrow" :class ="{ 'rotated': store.isDropdownExpanded } " v-if="store.isSidebarExpanded"/>
            </span>
          
          </div>
 

          <ol class="dropdowncustom" v-show="store.isDropdownExpanded">
            <li >
              <NuxtLink class="text-customblack" to="/firstdomain" @click.stop>
                <label> Domain</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack" to="/apiKey" @click.stop>
                <label>API Key</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack" to="/smtp" @click.stop>
                <label>SMTP</label>
              </NuxtLink>
            </li>
          </ol>
        </li>
        <li>
          <NuxtLink class="text-customblack" to="/stats">
            <span class="icon-wrapper"   @click="togglemenu"><img
               
                src="../assets/image/nimbus_stats.svg"
                alt="analytics" /></span
            ><label class="ms-3">Statistics</label>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-customblack" to="/suppression">
            <span class="icon-wrapper" @click="togglemenu"><img
             
                src="../assets/image/suppression.svg"
                alt="analytics" /></span
            ><label class="ms-3">Suppression</label>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-customblack settings_page" to="/profile">
            <span class=" icon-wrapper"   @click="togglemenu"><img
            
                src="../assets/image/settings.svg"
                alt="analytics" /></span
            ><label class="ms-3">Settings</label>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/colors.scss";



.logo_hemburger_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.config-icon{
  position: relative;
  left:1.5px;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 1px 2px black ;
  border-radius: 6px;
  border: 1px solid white;
  img{
    width: 20px;
  height: 20px;
  margin-left: 3px;
  margin-top:3px;
  // border: 1px ;
  }
}

.dash-icon{
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 1px 2px black ;
  border-radius: 6px;
  border: 1px solid white;
  img{
    width: 20px;
  height: 20px;
  margin-left: 3px;
  margin-top:3px;
 
  }
}





.icon-wrapper {
  position: relative;
  right: 2px;
  width: 31px;
  height: 31px;
  background: white;
  box-shadow: 0px 1px 2px ;
  border-radius: 6px;
  border: 1px solid white;
  img{
    width: 20px;
  height: 20px;
  margin-left: 3px;
  margin-top:3px;
  // border: 1px ;
  }
}



.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 60px;
 
  margin-top: -30px;
  min-height: 10vh;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 2;
  transition: width 0.3s;
}

.sidebar.shrink {
    width: 60px;
    padding: 0px 0px 8px 0px;
}

.shrink {
  width:60px;
  padding: 20px 0px 15px 0px;
  &.expend {
    width: calc(10rem + 32px);
  }
  .logo {
    height: 100px;
    width: 350px;
    position: absolute;
    top:20px;
    left:15px;
    display: block;
    margin: auto;
    cursor: pointer;
  
  }
}

.shrink.expend {
  width: calc(10rem + 32px);
}


ul.sidebar-nav {
  height: calc(100vh - 60px);
  position: relative;
  padding-bottom: 60px !important;
  display: block !important;
  flex: none;
  flex-direction: unset;
  overflow: unset ;
  margin-bottom: 1px;
  // overflow-x: hidden;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  a{
    padding: 16px 17px 16px !important;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
  }
  a.settings_page {
    margin-top: 200px !important;
  }
}

.nav-link {
  span {
    width: 20px;
    display: block;
    height: 26px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

 .sidebar.shrink .dash-icon, .sidebar.shrink .icon-wrapper {
  width: 30px;
  height: 30px;
  position: relative;
  right: 2px;
}
.sidebar.shrink .config-icon{
  width: 30px;
  height: 30px;
  
}
.sidebar.shrink .config-icon img, .sidebar.shrink .dash-icon img, .sidebar.shrink .icon-wrapper img {
  width: 20px;
    height: 15px;
    position: relative;
    right: 0.8px;
    box-shadow:none;
}


.sidebar-nav .nav-group {
  display: block !important;
}

.sidebar-nav .nav-group.show .nav-group-toggle {
  color: black !important;
}

.sidebar-nav .nav-group-toggle::after {
  background-image: url("../assets/image/dropdown.svg");
  flex: 0 20px;
  height: 20px;
}

.sidebar-nav .nav-link:hover.nav-group-toggle::after {
  background-image: url("../assets/image/dropdown.svg");
  flex: 0 20px;
  height: 20px;
}

.sidebar-nav .nav-group.show .nav-group-toggle::after {
  filter: invert(0);
}

.shrink div.toggle_menu_wrap ul.sidebar-nav a label {
  display: none;
}

.shrink.expend div.toggle_menu_wrap ul.sidebar-nav a label {
  display: unset;
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;

}
.shrink.expend div.toggle_menu_wrap ul.sidebar-nav a.router-link-active.router-link-exact-active label {
    display: unset;
    font-size: 15px;
    cursor: pointer;
    font-family: Inter;
    font-weight: 550;
    line-height: 24px;
}

.shrink.expend div.toggle_menu_wrap ul.sidebar-nav .configuration_nav label {
  display: unset;
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
  margin-right: 14px;
  color:black;
}

.toggle_menu_wrap ul.sidebar-nav li a {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  color: black;
  // 
}


div.toggle_menu_wrap ul.sidebar-nav li a {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 95%;
}

.shrink.expend .logo_hemburger_container {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: flex-end;
}

.shrink.expend .logo {
  margin: unset;
}

.sidebar.shrink .sidebar-nav .nav-group-toggle::after {
  display: none;
}

.sidebar.shrink.expend .sidebar-nav .nav-group-toggle::after {
  display: block;
}

ol.dropdowncustom li a {
  list-style-type: disc;
  padding: 12px 48px 12px !important;
}


.sidebar.shrink .sidebar-nav .nav-group-items {
  display: none;
}

.sidebar.shrink.expend .sidebar-nav .nav-group-items {
  display: block;
}

.sidebar .nav-group.show .nav-link.nav-group-toggle {
  padding-bottom: 5px !important;
}

.sidebar-nav .nav-group.show {
  background: transparent;
}

a.router-link-active.router-link-exact-active {
  background-color: $white;
  width: 182px;
  height: 55px;
  padding: 0 10px;
  box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  
}
a.configuration_nav.router-link-active.router-link-exact-active {
  background-color: $white;
  width: 182px;
  height: 55px;
  padding: 0 10px;
  box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

ol.dropdowncustom a.router-link-active.router-link-exact-active {
  background:none;
  
 
  // box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
  // border-radius: 10px;
}

ol.dropdowncustom {
  list-style-type: disc; // Remove default list style
  padding-left: 20px; // Add left padding for bullets
}

ol.dropdowncustom li {
  position: relative; // Set position relative to create space for bullets
}

ol.dropdowncustom li::before {
  content: "\2022"; 
  position: absolute;
  left: 11px;
  top: 48%; 
  transform: translateY(-50%);
  color: black; 
}



// a.router-link-active.router-link-exact-active.company_logo {
//   background: transparent;
//   box-shadow: none;
 
// }
// a.router-link-active.router-link-exact-active.company_logo img {
//   background: transparent;
//     height: 31px;
//     width: 179px;
//     position: fixed;
//     top: 20px;
//     left: 16px;
 
// }


a.router-link-active.router-link-exact-active .dash-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(179deg, #18A2F0 0%, #3469EF 100%);
  align-items:center;
  padding-left: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.19);
  border-radius: 6px;
  border: 1px solid none;
  position: relative;
  right: 5px;
  img{
    width: 20px;
    height: 20px;
    position: relative;
    right: 2.8px;
    padding: 0 2px;
   
    filter: invert(100%);
    border-radius: 6px;}

}

a.router-link-active.router-link-exact-active .icon-wrapper {

    width: 30px;
    height: 30px;
    background: linear-gradient(179deg, #18A2F0 0%, #3469EF 100%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.19);
    border-radius: 6px;
    border: 1px solid none;
    position: relative;
    right: 4px;
    padding: 0 3px;



  img{
  width: 20px;
  height: 20px;
  filter: invert(100%);
  border-radius: 6px;}
}



a.router-link-active.router-link-exact-active label {
  color: black;
  font-weight: 700px;

  
}

.configuration_nav {
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-y: hidden;
  width: 100%;
  padding: 18px 17px 18px !important;
  cursor: pointer;

  .dropdown-icon {
  display: flex;
  align-items: center;
  img {
    transition: transform 0.3s ease;
   width: 10px; 
   height: 10px; 
   margin-left: 5px; 
 }
 .rotated{
  transform: rotate(-90deg);
 }
}
}
// .configuration_nav.router-link-active {
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   width: 100%;
//   padding: 18px 17px 18px !important;
//   cursor: pointer;
//   background-color: $white;
//   width: 194px;
//   height: 55px;
//   box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
//   border-radius: 10px;
// }


.shrink div.toggle_menu_wrap ul.sidebar-nav .configuration_nav label {
  display: none;
}

.shrink div.toggle_menu_wrap ul.sidebar-nav ul.dropdowncustom {
  display: none;
}

.shrink.expend div.toggle_menu_wrap ul.sidebar-nav ul.dropdowncustom {
  display: block;
}

.toggle_menu_wrap {
  margin-top: 70px;
}

</style>
