// const new_basket =
// const packages = "GET https://headless.tebex.io/api/accounts/{token}/packages";
// const add_to_basket =
// 	"POST https://headless.tebex.io/api/baskets/{basketIdent}/packages"; // package_id, quantity
// const remove_from_basket =
// 	"POST https://headless.tebex.io/api/baskets/{basketIdent}/packages/remove"; // package_id

export interface Basket {
	id: number;
	ident: string;
	complete: boolean;
	email: string;
	username: any;
	coupons: Coupon[];
	giftcards: Giftcard[];
	creator_code: string;
	cancel_url: string;
	complete_url: any;
	complete_auto_redirect: boolean;
	country: string;
	ip: string;
	username_id: number;
	base_price: number;
	sales_tax: number;
	total_price: number;
	currency: string;
	packages: BasketPackage[];
	custom: Record<string, string | number>;
	links: Links;
}

export interface Coupon {
	coupon_code: string;
}

export interface Giftcard {
	card_number: string;
}

export interface BasketPackage {
	qty: number;
	type: string;
	revenue_share: RevenueShare[];
}

export interface RevenueShare {
	wallet_ref: string;
	amount: number;
	gateway_fee_percent: number;
}

export interface Links {
	payment: string;
	checkout: string;
}

export interface Package {
	id: string;
	name: string;
	description: string;
	image: any;
	type: string;
	category: {
		id: number;
		name: string;
	};
	base_price: number;
	sales_tax: number;
	total_price: number;
	currency: string;
	discount: number;
	disable_quantity: boolean;
	disable_gifting: boolean;
	expiration_date: any;
	created_at: string;
	updated_at: string;
}

class TebexError extends Error {
	public tebex_status: number;
	public tebex_body: string;
	public path: string;

	constructor(status: number, body: string, path: string) {
		super();
		this.tebex_status = status;
		this.tebex_body = body;
		this.path = path;
	}

	public toString() {
		return `Tebex Error #${this.tebex_status}\n\tat${this.path} \n${this.tebex_body}\n\nMessage: ${this.message}\n\n${this.stack}`;
	}
}

async function handle_tebex_return<T>(res: Response): Promise<T> {
	if (res.status < 200 || res.status > 299) {
		throw new TebexError(res.status, await res.text(), res.url);
	}

	const body = (await res.json()).data as T;
	return body;
}

export const new_basket = async (
	token: string,
	username: string,
): Promise<Basket> => {
	const res = await fetch(
		`https://headless.tebex.io/api/accounts/${token}/baskets`,
		{
			method: "POST",
			body: JSON.stringify({ complete_url: "", cancel_url: "", username }),
		},
	);

	return handle_tebex_return<Basket>(res);
};

export const retrieve_basket = async (
	token: string,
	basket_ident: string,
): Promise<Basket> => {
	const res = await fetch(
		`https://headless.tebex.io/api/accounts/${token}/baskets/${basket_ident}`,
	);

	return handle_tebex_return<Basket>(res);
};

export const get_all_packages = async (
	token: string,
): Promise<Array<Package>> => {
	console.log(`https://headless.tebex.io/api/accounts/${token}/packages`);
	const res = await fetch(
		`https://headless.tebex.io/api/accounts/${token}/packages`,
	);

	return handle_tebex_return<Array<Package>>(res);
};
