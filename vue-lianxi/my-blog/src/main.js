import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

var app = createApp(App);
app.directive('rainbow', {
    mounted(el) {
        //el.style.color="red"
        el.style.color = "#" + Math.random().toString(16).slice(2, 8)
    }
}
);
app.directive('them', {
    mounted(el, binding) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1260px"
        };
        if (binding.arg == 'cloumn') {
            el.style.background = "#6677cc";
            el.style.padding = "20px"
        }
    }
}
);

// createApp(App).use(store).use(router).mount("#app");
app.use(store).use(router).mount("#app");


