// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare class Product {
	id: string    // Stripe ID
	name: string  // "Coffee"
	price: number // 5
}

declare class CartItem {
	id: string
	quantity: number
}

export {};
