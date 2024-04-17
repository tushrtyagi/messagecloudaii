<template>
  <div class="home_page bg-antiflashwhite pb-5 h-100">
    <div class="container-fluid p-0">
      <div class="d-flex justify-content-between w-100 vh-100">
        <Sidebar />
        <div :class="`${store.isSidebarExpanded ? 'shrink_screen' : ''}`" class="right_panel">
          <Header />
          <div class="sub_container api_container">
            <div class="sub_section api_section bg-white">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumbs">
                    <CBreadcrumb style="--cui-breadcrumb-divider: '>'">
                      <CBreadcrumbItem href="#">SenderSetup</CBreadcrumbItem>
                      <CBreadcrumbItem active>API key</CBreadcrumbItem>
                    </CBreadcrumb>
                  </div>
                  <div class="col-lg-12">
                    <div class="api_flex bg-white">
                      <h3 class="text-customblack mb-4">Create API Keys</h3>
                      <h4 class="text-customblack mb-4">API Key Name</h4>
                      <input
                        placeholder="enter your key name"
                        class="bg-white"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_panel_global_section">
                <div class="row">
                  <div class="col-lg-12">
                    <h4 class="text-customblack">API Permission</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div
                      v-for="(permission, index) in permissions"
                      :key="index"
                      class="permision_container mt-3 d-flex bg-white"
                    >
                      <div class="custom_radio me-3 d-flex align-items-center">
                        <input type="radio" :id="permission.inputId" /><label
                          :for="permission.inputId"
                        ></label>
                      </div>
                      <div class="permission_content">
                        <h4 class="text-customblack permission_text">
                          {{ permission.type }}
                        </h4>
                        <p class="permission_container text-nickel mb-0">
                          {{ permission.content }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 btn_conatiner d-flex mt-5">
                    <CButton
                      class="login_btn bg-aliceblue text-white"
                      @click="
                        () => {
                          visibleLiveDemo = true;
                        }
                      "
                    >
                      Create API Key
                    </CButton>
                    <ApiKeyModal
                      :backdrop="true"
                      :keyboard="false"
                      @closemodal="closemodal"
                      :visible="visibleLiveDemo"
                    />
                    <button class="login_btn sending_doc_btn bg-white text-black ms-4">
                      API Key Documentation
                    </button>
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
import { CButton } from "@coreui/vue";
import {store} from "../stores/store"
export default defineComponent({
  components: { CButton },
  setup() {
    const expanded = useExpanded();
    return {
      expanded,
      store
    };
  },
  data() {
    return {
      visibleLiveDemo: false,
      permissions: [
        {
          type: "Full Access",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          inputId: "radio1",
        },
        {
          type: "Full Access",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          inputId: "radio2",
        },
        {
          type: "Full Access",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          inputId: "radio3",
        },
      ],
    };
  },
  methods: {
    closemodal(value){
      this.visibleLiveDemo = value; 
    }
  },
});
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";
@import "../assets/scss/style.scss";

.right_panel {
  width: calc(100% - 80px);
  margin-left: 80px;
}
.shrink_screen.right_panel {
  width: calc(100% - 14rem);
  margin-left: 14rem;
}
.api_flex {
  border-bottom: 1px solid #dcdcdc;
  padding: 24px;
  input {
    border-radius: 7px;
    border: 1px solid #02487b;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.19);
    padding: 16px 30px;
    width: 70%;
  }
}
.permision_container {
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  padding: 16px 24px;
  width: 70%;
}
.btn_conatiner {
  button {
    font-weight: 400;
    font-size: 1.063rem;
  }
  .sending_doc_btn {
    border: 1px solid black;
  }
}
.custom_radio input[type="radio"] {
  opacity: 0;
  position: absolute;
}

.custom_radio label {
  position: relative;
  cursor: pointer;
  padding-left: 25px;
}

.custom_radio label:before {
  content: "";
  position: absolute;
  top: -10px;
  left: -2px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #02487b;
  border-radius: 50%;
}

.custom_radio input[type="radio"]:checked + label:before {
  background-color: #02487b;
}
.custom_radio input[type="radio"]:checked + label:before {
  content: "\2022";
  content: "•";
  color: #fff;
  font-size: 26px;
  text-align: center;
  line-height: 15px;
}
</style>
