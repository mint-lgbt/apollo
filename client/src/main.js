import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

createApp(App)
  .use(store)
  .use(router)
  .use(apolloProvider)
  .use(VueApollo)
  .mount("#app");
