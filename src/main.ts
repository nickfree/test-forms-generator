import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { App, router } from './app';
import { store } from './shared';

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(store);
app.use(router);

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')