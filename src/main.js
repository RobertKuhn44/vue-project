import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-adgmlmeg.us.auth0.com",
    client_id: "InqzEkl6l0pFfzTl2bJZYQXiq8MiHIij",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
