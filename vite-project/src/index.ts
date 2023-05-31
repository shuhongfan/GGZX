import SvgIcon from '@/components/SvgIcon/index.vue';
import type { App, Component } from 'vue';
import gloablComponent from './components/index';
import app from "@/App.vue";
app.use(gloablComponent);
const components: { [name: string]: Component } = { SvgIcon };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
    }
}