import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import Font Awesome into app
import { faWrench, faList } from "@fortawesome/free-solid-svg-icons";
library.add(faList, faWrench);

const Vue = createApp(App).use(router);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.mount("#app");
