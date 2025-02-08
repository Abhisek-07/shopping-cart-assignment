import { fetchProductPrice } from "./price_fetcher";

type CartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
};

class ShoppingCart {
    private items: CartItem[] = [];
    private readonly TAX_RATE = 0.125;

    async addProduct(id: string, quantity: number) {
        const product = await fetchProductPrice(id);
        if (!product) throw new Error(`Price not found for product: ${id}`);

        const existingItem = this.items.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ id, name: product.title, quantity, price: product.price });
        }
    }

    getCartState() {
        const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = Math.round(subtotal * this.TAX_RATE * 100) / 100;
        const total = Math.round((subtotal + tax) * 100) / 100;
        return { items: this.items, subtotal, tax, total };
    }
}

export default new ShoppingCart();