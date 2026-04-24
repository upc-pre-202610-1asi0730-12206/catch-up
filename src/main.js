import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Material from '@primeuix/themes/material';
import './style.css'
import App from './app.vue'
import {Avatar, Button, Card, Drawer,
    Image, Menu, Menubar, SelectButton,
    Toolbar, Tooltip} from "primevue";
import i18n from "./i18n.js";

createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { preset: Material}})
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-card', Card)
    .component('pv-image', Image)
    .component('pv-toolbar', Toolbar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-drawer', Drawer)
    .directive('tooltip', Tooltip)
    .mount('#app')
