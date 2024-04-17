<template>
  <div class="build-component-div">
    <div class="border-bottom">
      <i class="fa fa-picture-o" aria-hidden="true"></i>
      Image
    </div>
    <div class="border-bottom">
      <i class="fa fa-file-text-o" aria-hidden="true"></i>
      Text
    </div>
    <div class="border-bottom">
      <i class="fa fa-columns" aria-hidden="true"></i>
      Columns
    </div>
    <div class="border-bottom">
      <i class="fa fa-file-image-o" aria-hidden="true"></i>
      Image & Text
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.build-component-div {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.border-bottom {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
}

.fa {
  margin-right: 5px;
}
</style>
