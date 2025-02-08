import ShoppingCart from "../src/cart";

describe("ShoppingCart", () => {
    beforeEach(() => {
        (ShoppingCart as any).items = []; // Reset cart before each test
    });

    test("should add a product to the cart", async () => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({ title: "Cornflakes", price: 4.99 }),
        } as Response);

        await ShoppingCart.addProduct("cornflakes", 1);
        expect(ShoppingCart.getCartState().items).toHaveLength(1);
        expect(ShoppingCart.getCartState().subtotal).toBe(4.99);
    });

    test("should correctly calculate totals", async () => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({ title: "Cornflakes", price: 4.99 }),
        } as Response);

        await ShoppingCart.addProduct("cornflakes", 2);
        expect(ShoppingCart.getCartState().subtotal).toBe(9.98);
        expect(ShoppingCart.getCartState().tax).toBe(1.25);
        expect(ShoppingCart.getCartState().total).toBe(11.23);
    });
});
