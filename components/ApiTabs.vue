<template>
  <div>
    <div class="api_tabs bg-aliceblue">
      <div class="row g-0">
        <div class="col-lg-5 col-md-7 d-flex justify-content-between tabs_border">
          <button
            @click="setActiveTab(0)"
            class="text-customeblack"
            :class="{ activetab: activeTab === 0 }"
          >
            Curl
          </button>
          <button
            @click="setActiveTab(1)"
            class="text-customeblack"
            :class="{ activetab: activeTab === 1 }"
          >
            Ruby
          </button>
          <button
            @click="setActiveTab(2)"
            class="text-customeblack"
            :class="{ activetab: activeTab === 2 }"
          >
            Php
          </button>
          <button
            @click="setActiveTab(3)"
            class="text-customeblack"
            :class="{ activetab: activeTab === 3 }"
          >
            Python
          </button>
          <button
            @click="setActiveTab(4)"
            class="text-customeblack"
            :class="{ activetab: activeTab === 4 }"
          >
            Node Js
          </button>
        </div>
      </div>
    </div>
    <div class="api-tab-content " v-for="(ele, idx) in arr" :key="idx">
      <div v-if="activeTab === idx" class="pills_content">
      <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <p class="mb-0 text-customblack">{{ ele.content }}</p>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      activeTab: 0,
      arr: [
        {
          content: `# ------------------
            # Create a campaign\
            # ------------------
            # Include the Brevo library\
            from __future__ import print_function
            import time
            import sib_api_v3_sdk
            from sib_api_v3_sdk.rest import ApiException
            from pprint import pprint
            # Instantiate the client\
            sib_api_v3_sdk.configuration.api_key['api-key'] = 'YOUR_API_V3_KEY'
            api_instance = sib_api_v3_sdk.EmailCampaignsApi()
            # Define the campaign settings\
            email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
            name= "Campaign sent via the API",
            `,
        },
        {
          content: `# ------------------
                # Create a campaign\
                # ------------------
                # Include the Brevo library\
                from __future__ import print_function
                import time
                import sib_api_v3_sdk
                from sib_api_v3_sdk.rest import ApiException
                from pprint import pprint
                # Instantiate the client\
                sib_api_v3_sdk.configuration.api_key['api-key'] = 'YOUR_API_V3_KEY'
                api_instance = sib_api_v3_sdk.EmailCampaignsApi()
                # Define the campaign settings\
                email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
                name= "Campaign sent via the API",
                `,
        },
        {
          content: `# ------------------
            # Create a campaign\
            # ------------------
            # Include the Brevo library\
            from __future__ import print_function
            import time
            import sib_api_v3_sdk
            from sib_api_v3_sdk.rest import ApiException
            from pprint import pprint
            # Instantiate the client\
            sib_api_v3_sdk.configuration.api_key['api-key'] = 'YOUR_API_V3_KEY'
            api_instance = sib_api_v3_sdk.EmailCampaignsApi()
            # Define the campaign settings\
            email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
            name= "Campaign sent via the API",
            `,
        },
        {
          content: `# ------------------
            # Create a campaign\
            # ------------------
            # Include the Brevo library\
            from __future__ import print_function
            import time
            import sib_api_v3_sdk
            from sib_api_v3_sdk.rest import ApiException
            from pprint import pprint
            # Instantiate the client\
            sib_api_v3_sdk.configuration.api_key['api-key'] = 'YOUR_API_V3_KEY'
            api_instance = sib_api_v3_sdk.EmailCampaignsApi()
            # Define the campaign settings\
            email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
            name= "Campaign sent via the API",
            `,
        },
        {
          content: `# ------------------
            # Create a campaign\
            # ------------------
            # Include the Brevo library\
            from __future__ import print_function
            import time
            import sib_api_v3_sdk
            from sib_api_v3_sdk.rest import ApiException
            from pprint import pprint
            # Instantiate the client\
            sib_api_v3_sdk.configuration.api_key['api-key'] = 'YOUR_API_V3_KEY'
            api_instance = sib_api_v3_sdk.EmailCampaignsApi()
            # Define the campaign settings\
            email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
            name= "Campaign sent via the API",
            `,
        },
      ],
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/colors.scss";
.api_tabs {
  border-radius: 7px 7px 0px 0px;
  padding: 13px 26px;
  button {
    font-size: 15px;
    padding: 0 18px;
    background: none;
    color: white;
  }
  button.activetab {
    background: white;
    border-radius: 21px;
    color: black;
  }
}
.pills_content {
   padding: 27px;
    height: 314px;
    overflow-y: scroll;
  p{
      font-size:13px;
  }
}
</style>
