import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

import UnrealUI from 'unreal-ui-next'
import 'unreal-ui-next/lib/ur-index/style.css';

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.use(UnrealUI)
app.mount('#app')
