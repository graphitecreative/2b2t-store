import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
// Routes
import Home from "./pages/Home.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
	],
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
