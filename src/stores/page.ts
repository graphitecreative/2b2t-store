import { defineStore } from "pinia";
import { get_all_packages, type Package } from "../tebex";

export const usePageStore = defineStore("page", {
	state: () => ({
		loading: true,
		items: [] as Array<Package>,
	}),
	actions: {
		async initialise() {
			const items = await get_all_packages(import.meta.env.VITE_JAVA_API_KEY);
			this.items = items;
		},
	},
});
