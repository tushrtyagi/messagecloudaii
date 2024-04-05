<template>
  <div>
    <div class="tabs">
      <div class="row g-0">
        <div class="d-flex justify-content-between  tabs_border">
          <button
             v-for="(tab, index) in tabs"
              :key="index"
              @click="changeTab(index)"
              class="text-aliceblue"
              :class="{ activepills: activeTab === index }"
          >
            {{ tab }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      this.$emit("changeTab" , index)
    }
  },
};
</script>
<style lang="scss">
@import "../assets/scss/colors.scss";
.tabs {
  .tabs_border {
    border-bottom: 2px solid #e4e4e4;
  }
  button {
    background: none;
    padding: 10px 0px 10px 0;
    margin-bottom: -2px;
  }
  .activepills {
    color: $aliceblue;
    border-bottom: 2px s4pxolid $aliceblue;
  }
}
</style>
