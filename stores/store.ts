import { reactive } from 'vue';

interface Store {
  isSidebarExpanded: boolean;
  isDropdownExpanded: boolean;
  toggleSidebar(): void;
  toggleDropdown(): void;
}

export const store = reactive<Store>({
  isSidebarExpanded: false,
  isDropdownExpanded: false,
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;

    this.isDropdownExpanded = false;
  },
  toggleDropdown() {
  
    this.isDropdownExpanded = !this.isDropdownExpanded;
  }
});