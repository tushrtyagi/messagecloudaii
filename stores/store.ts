import { reactive } from 'vue';

interface Store {
  isSidebarExpanded: boolean;
  isDropdownExpanded: boolean;
  isDropdownsenderExpanded: boolean;
  toggleSidebar(): void;
  toggleDropdown(): void;
  toggleDropdownsender():void;
}

export const store = reactive<Store>({
  isSidebarExpanded: false,
  isDropdownExpanded: false,
  isDropdownsenderExpanded: false,
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;

    this.isDropdownExpanded = false;
    this.isDropdownsenderExpanded=false;
  },
  toggleDropdown() {
  
    this.isDropdownExpanded = !this.isDropdownExpanded;
  },
  toggleDropdownsender() {
    this.isDropdownsenderExpanded = !this.isDropdownsenderExpanded;
  }
 
});