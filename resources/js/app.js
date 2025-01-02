//import './bootstrap';


// Import dependencies
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Ensure NProgress styles are loaded
import { router } from '@inertiajs/vue3'; // Corrected from `route` to `router`

// Initialize Inertia app
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
// Configure NProgress for Inertia.js navigation
router.on('start', () => {
    NProgress.start();
});

router.on('finish', () => {
    NProgress.done();
});


