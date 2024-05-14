<template>
  <div class="app_body">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { store } from "../stores/store";
const layout = "custom";
export default {
  setup() {
   return {
     store
   };
 },
  beforeMount() {
    if (!store.isLoggedIn) {
      this.$router.push('/login');
    }

    
  },
  components: {
  }
};

</script>