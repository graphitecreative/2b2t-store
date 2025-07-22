import { test, expect } from "vitest";
import { get_all_packages } from "./tebex.ts";

const DEMO_TOKEN = "yy7-6e7fe0ee11b433a4a3eb5d8f619848a4d235f2e4";

test("demo store has 24 packages", async () => {
	const packages = await get_all_packages(DEMO_TOKEN);
	expect(packages.length).toEqual(24);
});

test("using a false key errors", async () => {
	await expect(
		get_all_packages("yy7-thisisademotestandiamtesting"),
	).rejects.toThrowError();
});
