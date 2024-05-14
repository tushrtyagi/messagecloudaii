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
    toggleDropdownsender() {

      store.toggleDropdownsender();
    },
    toggleSidebar() {
      store.toggleSidebar();
    }
  }
};
</script>

<template>
  <div class="sidebar" id="sidemenu"
    :class="`${!store.isSidebarExpanded ? 'shrink bg-sidegrey' : 'shrink expend bg-sidegrey'}`">
    <div v-if="store.isSidebarExpanded" class="full_icon">
      <img  src="../assets/image/logo.svg" alt="Full Logo" @click="toggleSidebar" />
    </div>
    <div v-if="!store.isSidebarExpanded" class="logo_icon">
      <img  src="../assets/image/dropdownlogo.svg" alt="Dropdown Logo"
        @click="toggleSidebar" />
    </div>
    <div class="toggle_menu_wrap ">
      <ul class="sidebar-nav ">
        <li>
          <NuxtLink class="text-customblack " to="/">
            <span class="dash-icon" @click="togglemenu">
              <img src="../assets/image/home.svg" alt="search" />
            </span>
            <label class="ms-3 ">Dashboard</label>

          </NuxtLink>
        </li>
        <li @click="toggleDropdownmenu" class="position-relative d-block ">
          <!-- <div class="configuration_nav  d-flex text-customblack"> -->
            <NuxtLink class="text-customblack" to="/createdomain">
              <span class="dash-icon" @click="togglemenu"> <img src="../assets/image/configuration.svg"
                  alt="configuration" />
              </span>
              <label class="ms-3">Sender Identity</label>
              <!-- <span class="dropdown-icon" >
               <img src="../assets/image/dropdown.svg" alt="down-arrow" :class ="{ 'rotated': store.isDropdownExpanded } " v-if="store.isSidebarExpanded"/>
             </span> -->
            </NuxtLink>
          <!-- </div> -->
          <ul class="dropdowncustom pb-0 mt-3 mb-0" v-show="store.isDropdownExpanded">
            <li>
              <NuxtLink class="text-customblack " to="/firstdomain" @click.stop>
                <label> Domain</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack " to="/senders" @click.stop>
                <label> Senders</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack " to="/apiKey" @click.stop>
                <label>API Key</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack" to="/smtp" @click.stop>
                <label>SMTP</label>
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink class="text-customblack mt-3" to="/stats">
            <span class="icon-wrapper"   @click="togglemenu"><img
               
                src="../assets/image/Statistics.svg"
                alt="analytics" /></span
            ><label class="ms-3">Statistics</label>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-customblack " to="/suppression">
            <span class="icon-wrapper" @click="togglemenu"><img src="../assets/image/suppression.svg"
                alt="analytics" /></span><label class="ms-3">Suppression</label>
          </NuxtLink>
        </li>
        <li @click="toggleDropdownsender" class="senderlist">
          <NuxtLink class="text-customblack" to="/send">
            <span class="icon-wrapper" @click="togglemenu">
              <img src="../assets/image/campaigning.svg" alt="analytics" />
            </span>
            <label class="ms-3">Campaigning</label>
          </NuxtLink>
          <ul class="dropdowncustom p-0  ms-3 mt-3 m-0" v-show="store.isDropdownsenderExpanded">
            <li>
              <NuxtLink class="text-customblack" to="/singlesend" @click.stop>
                <label> Single Send</label>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-customblack" to="/contacts" @click.stop>
                <label> Contacts</label>
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink class="text-customblack settings_page" to="/profile">
            <span class=" icon-wrapper" @click="togglemenu"><img src="../assets/image/settings.svg"
                alt="analytics" /></span><label class="ms-3">Settings</label>
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

.config-icon {

  // position: relative;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 1px 2px black;
  border-radius: 6px;
  border: 1px solid white;
  // right: 2px;

  img {
    width: 20px;
    height: 20px;
    // margin-left: 3px;
    // margin-top: 3px;
    // border: 1px ;
  }
}

.dash-icon {
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 1px 2px black;
  border-radius: 6px;
  border: 1px solid white;

  img {
    width: 20px;
    height: 20px;

  }
}





.icon-wrapper {
  position: relative;
  right: 2px;
  width: 31px;
  height: 31px;
  background: white;
  box-shadow: 0px 1px 2px;
  border-radius: 6px;
  border: 1px solid white;

  img {
    width: 20px;
    height: 20px;
    // margin-left: 3px;
    // margin-top: 3px;
    // border: 1px ;
  }
}

.senderlist {
  display: flex;
  flex-direction: column;

}

.sidebar {
  position: fixed;
  top: 0px;
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
  width: 80px;
  padding: 56px 10px 8px 10px;
}

.shrink {
  width: 60px;
  padding: 20px 0px 15px 0px;

  &.expend {
    width: calc(10rem + 32px);
  }

  .logo {
    height: 100px;
    // width: 350px;
    position: absolute;
    top: 20px;
    left: 15px;
    display: block;
    margin: auto;
    cursor: pointer;
    width: auto;

  }
}

.shrink.expend {
  width: calc(13rem + 14px);
}
.shrink ul.sidebar-nav a{
  padding: 1px 7px!important;
  width: calc(100% - 10px) !important;
}
.shrink.expend ul.sidebar-nav a{
  padding: 8px 16px 8px !important;
  width: calc(90% - 10px)!important;
}

ul.sidebar-nav {
  height: calc(100vh - 60px);
  padding-bottom: 60px !important;
  display: block !important;

  // overflow-x: hidden;
  li {
    cursor: pointer;
    margin-bottom: 25px;
  }

  a {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
  }

  a.settings_page {
    margin-top: 0px !important;
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

.sidebar.shrink .dash-icon,
.sidebar.shrink .icon-wrapper {
  width: 30px;
  height: 30px;
  display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar.shrink .config-icon {
  width: 30px;
  height: 30px;
  display: flex;
    justify-content: center;
    align-items: center;

}

.sidebar.shrink .config-icon img,
.sidebar.shrink .dash-icon img,
.sidebar.shrink .icon-wrapper img {
  width: 20px;
  height: 15px;
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
  font-size: 15px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
}

.shrink.expend div.toggle_menu_wrap ul.sidebar-nav .dropdowncustom a label {
  display: unset;
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
}
.shrink.expend div.toggle_menu_wrap ul.sidebar-nav .dropdowncustom a.router-link-active.router-link-exact-active label {
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
  font-weight: 500;
  line-height: 24px;


 
}




.shrink.expend div.toggle_menu_wrap ul.sidebar-nav a ul.dropdowncustom a.router-link-active.router-link-exact-active label {
  display: unset;
  font-size: 13px;
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;

  
 
}

.shrink.expend div.toggle_menu_wrap ul.sidebar-nav .configuration_nav label {
  display: unset;
  font-size: 12px;
  cursor: pointer;
  font-weight: 400;
  line-height: 30px;
  margin-right: 0px;
  color: black;
}

.toggle_menu_wrap ul.sidebar-nav li a {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  color: black;
  // 
}

.toggle_menu_wrap ul.sidebar-nav li .configuration_nav a {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 89%;
  color: black;
  position: absolute;
  right: 6%;
  top: 1%;
  margin-bottom: 9px;
  margin: 0px 5px;
}

div.toggle_menu_wrap ul.sidebar-nav li a {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 5px;
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

ul.dropdowncustom li a {
  list-style-type: disc;
  padding: 7px 48px 7px !important;
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

.configuration_nav a.router-link-active.router-link-exact-active {
  background-color: $white;
  width: 182px;
  height: 55px;
  padding: 0 10px;
  box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}


ul.dropdowncustom a.router-link-active.router-link-exact-active {
  background: none;


  // box-shadow: 3px 5px 12px -1px rgba(0, 0, 0, 0.12);
  // border-radius: 10px;
}
ul.dropdowncustom {
  list-style-type: none; // Remove default list style
  padding-left: 20px; // Add left padding for bullets
}

ul.dropdowncustom li {
  display: flex; // Use flex to align items in the same line
  align-items: center; // Align items vertically
  margin-bottom: 5px; // Adjust margin between list items
}

ul.dropdowncustom li::before {
  content: "•";
    margin-right: 0;
    color: black;
    padding: 0px 14px;

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


.configuration_nav a.router-link-active.router-link-exact-active {
  position: relative;
  top: 20px;

  .config-icon {
    width: 35px;
    height: 35px;
    background: linear-gradient(179deg, #18A2F0 0%, #3469EF 100%);
    align-items: center;
    display: flex;
    justify-content: center;
    // padding-left: 2px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.19);
    border-radius: 6px;
    border: 1px solid none;
    // position: relative;

    // right: 0px;

    img {
      width: 20px;
      height: 20px;
      // position: relative;
      // right: 2.8px;
      padding: 0 2px;

      filter: invert(100%);
      border-radius: 6px;
    }

  }
}

a.router-link-active.router-link-exact-active .dash-icon {
  width: 35px;
  height: 35px;
  background: linear-gradient(179deg, #18A2F0 0%, #3469EF 100%);
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.19);
  border-radius: 6px;

  img {
    width: 20px;
    height: 20px;
    filter: invert(100%);
  }
}

a.router-link-active.router-link-exact-active .icon-wrapper {
  width: 30px;
  height: 30px;
  background: linear-gradient(179deg, #18A2F0 0%, #3469EF 100%);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.19);
  border-radius: 6px;
  border: 1px solid none;
  padding: 0 3px;
  margin: 0 5px;
  img {
    width: 20px;
    height: 20px;
    filter: invert(100%);
  }
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
      margin-left: 10px;
    }

    .rotated {
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

.shrink.expend .toggle_menu_wrap {
  margin-top: 23px;
}
.shrink .toggle_menu_wrap{
  margin-top: 30px;
}
.full_icon{
  width: 175px;
  height: 29px;
  img{
    height:100%;
    width:116%;
    object-fit:contain;
  }
}
.logo_icon{
  width:60px;
  height:24px;
  img{
    width: 100%;
    object-fit: contain;
    padding: 0 8px;
    height: 100%;
  }
}
li::marker{
  display:none;
}
a.router-link-active.router-link-exact-active.text-customblack.settings_page {
    margin: 0 -3px;
}
</style>