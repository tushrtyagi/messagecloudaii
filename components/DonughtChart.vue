<template>
  <div class="row g-4">
    <div class="col-lg-12">
      <div class="donut_chart bg-darkgrey">
        <CChart
          type="doughnut"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { CChart } from "@coreui/vue-chartjs";

export default {
  name: "DonughtChart",
  components: { CChart },
  setup() {},
  data() {
    return {
      chartData: {
        datasets: [
          {
            backgroundColor: ["#02487B", "#00D8FF", "#17B2F4"],
            data: [40, 20, 80],
          },
        ],
        labels: ["Delivered", "Clicked", "Spam Reports"], 
      },
      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: 'left', 
            labels: {
              boxWidth: 12, 
              padding: 30, 
            },
          },
        },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
.chart-wrapper {
  // padding: 20px 30px 20px 30px;
  height: 100%;
  width: 300px;
  margin-right: 35px;
}

.donut_chart {
  display: flex;
  justify-content: center;
  align-items: left;
  box-shadow: 0 4px 4px #00000040;
}

canvas {
  display: block;
  box-sizing: border-box;
  height: 295px;
  width: 298px;
}
</style>
