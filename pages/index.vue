<template>
  <div class="home_page bg-sidegrey h-100 ">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="dashboard_section">
            <div class="dashboard_page bg-white mb-0 ">
              <div class="container-fluid p-0">
                <div class="row g-0 ">
                  <div class="col-lg-5 col-md-6 col-sm-12 col-12  ">
                    <div class="heading">
                      <div class="main my-0" style="width: 100%; height: 100%; color: black; font-size: 22px; font-family: Poppins; font-weight: 600; line-height: 6px; word-wrap: break-word">Fast & Reliable Email Delivery System<br/><br/><br/><br/></div>
                      <div class="text-customblack mt-3 content">Ensure high deliverability and make every email count with MessageCloud.AI’s Robust Email Delivery System</div>
                    </div>
                   
                  </div>
                </div>
                <div class="figures_section">
                  <div class="activity">
                    <div class="row g-0">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div class="text-customblack mb-0 recent-heading">Recent Email Activity</div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                        <div class="blue-border">
                          <button :class="{ 'bg-aliceblue text-white pills_tab wk': activeTab === 'wk', 'text-aliceblue pills_tab bg-white month': activeTab === 'mo'}" @click="toggleTab('wk')">Wk</button>
                          <button  :class="{ 'bg-aliceblue text-white pills_tab mo': activeTab === 'mo', 'text-aliceblue  pills_tab bg-white month': activeTab === 'wk' }" @click="toggleTab('mo')">Mo</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row g-0 justify-content-between">
                    <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                      <EmailActivityScore />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                      <DonughtChart />
                    </div>
                  </div>
                </div>
                <div class="row g-0  mb-4">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 class="text-customblack mb-3 graph-title">Graph </h2>
                  </div>
                </div>
                <div class="row justify-content-between ">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 graph-img my-5">
                    <img src="../assets/image/graph.png" alt="" srcset="">
                    <!-- <div class="rectangle-box">
                    
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'; // assuming you are using Vue 3
import { store } from "../stores/store";

export default defineComponent({
  setup() {
    const activeTab = ref('wk');

    const toggleTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      toggleTab,
      store
    };
  }
});
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.right_panel {
  width: calc(100% - 80px);
  margin-left: 80px;
}
.graph-img{
  position: relative;
  margin: 80px 35px;
  margin-bottom: auto;
  width: calc(100% - 70px);
  height: 300px;
  border-radius: 20px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
}
.shrink_screen.right_panel {
  width: calc(100% - 14rem);
  margin-left: 14rem;
}

.figures_section {
  padding: 0px 30px;
  .donut_chart {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    padding-bottom: 50px;
  }
}

.dashboard_section {
  padding: 0px 31px 0px 0; 
  border-radius: 1px solid;
  .dashboard_page {
    position: relative;
    z-index: 1;
    border-radius: 7px;

    .activity {
      padding: 22px 30px;
    margin-top: 72px;
    border-top: 1px solid #d5d5d5;
      .recent-heading {
        position: relative;
        right: 30px;
        top:9px;
        font-weight: 500;
        font-size: 25px;
        font-family: Poppins;
        line-height: 25px;
        word-wrap: break-word;
      }
    }
    .pills_tab {
      border: 1px solid white;
      border-radius: 0px;
      font-size: 14px;
      font-weight: 500;
      padding: 5px 16px;
      // margin-right: 5px;
      transition: background-color 0.3s;
    }
    .dashboard-icon {
      position: absolute;
      top: 43px;
      right: 80px;
    }
  }
  .heading {
    position: relative;
    top: 41px;
    left: 35px;
  }
  .graph-title {
    position: relative;
    font-size:30px;
    top: 50px;
    left: 35px;
   font-family:Poppins;
  }
  .content {
    margin: 5px 0;
    font-size: 15px;
  }

  .blue-border {
    border: 1px solid #18A2F0;
    display: inline-block;
    padding:6px;
  }
 
}
.month {
  background:white;
  border-radius: 7px;
  border: 1px #18A2F0 solid;
  color: #18A2F0;
}

.hover-grey{
  background-color: gray;
}

.wk {
  border-right: 4px solid $aliceblue;
}

.mo {
  border-left: 4px solid $aliceblue;
}

.rectangle-box {
  position: relative;
  margin: 80px 35px;
  margin-bottom: auto;
  width: calc(100% - 70px);
  height: 250px;
  background: #f8f8f8;
  border-radius: 20px;
}

.domain-btn {
  position: absolute;
  top: 5%;
  right: 4%;
  font-style: poppins;
}
</style>
