<script>
import graph from "../assets/image/analytics.svg";
export default {
  name: "EmailActivityScore",
  components: {},
  setup() {},
  data() {
    return {
        scores:[
        {
          title:'Requests',
          number:'01',
          graphImage:graph
         },
         {
          title:'Delivered',
          number:'01',
          graphImage: graph
         },
         {
          title:'Opened',
          number:'01',
          graphImage:graph
         },
         {
          title:'Clicked',
          number:'01',
          graphImage:graph
         },
         {
          title:'Bounces',
          number:'01',
          graphImage:graph
         },
          {
          title:'Spam Reports',
          number:'01',
          graphImage:graph
         }
        ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<template>
  <div class="row g-4">
    <div v-for="score in scores" class="col-lg-6">
      <div class="score_container bg-darkgrey d-flex align-items-center justify-content-between">
        <div class="graph_image bg-linear-bluegreen">
          <img :src="score.graphImage" alt="analytics" />
        </div>
        <div class="score_info">
          <label class="text-center text-customblack">
            {{score.title}}
            <span class="d-block text-customblack">{{score.number}}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/colors.scss";
.score_container {
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  // padding: 20px 30px 20px 30px;
  padding: 20px 20px;
//   display: flex;
//   align-items: center; // Align items vertically
// flex-shrink: 0;
  &:hover {
    background: $bluegreen;
  }

  .score_info {
    flex:1; // Take remaining space
    padding-left: 10px; // Adjust spacing between image and label
    label {
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      align-items: center;
      padding-top: 10px;

      span {
        font-size: 18px;
    margin-top: 8px;
    padding: 0 30px;
      }
    }
  }

  .graph_image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      filter: invert(1);
    }
  }
}

.score_container:hover label,
.score_container:hover label span {
  color: black;
}

.score_container:hover .graph_image {
  background: white;
}

.score_container:hover .graph_image img {
  filter: invert(0);
}
</style>
