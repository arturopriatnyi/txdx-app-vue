import Unicon from 'vue-unicons';
import { uniExclamationCircle, uniTrash } from 'vue-unicons/dist/icons';

import { createApp } from 'vue';
import App from './App.vue';

Unicon.add([uniExclamationCircle, uniTrash]);

createApp(App).use(Unicon).mount('#app');
