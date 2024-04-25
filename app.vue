<template>
  <div class="app_body">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
const layout = "custom";
export default {
  components: {
  }
};

</script>