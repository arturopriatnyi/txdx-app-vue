import Unicon from 'vue-unicons';
import { uniExclamationCircle, uniTrash } from 'vue-unicons/dist/icons';

import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';

Unicon.add([uniExclamationCircle, uniTrash]);

createApp(App).use(store).use(Unicon).mount('#app');
