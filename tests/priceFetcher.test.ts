import { fetchProductPrice } from "../src/price_fetcher";

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ title: "Cornflakes", price: 4.99 }),
    })
) as jest.Mock;

describe("fetchProductPrice", () => {
    test("should return product price", async () => {
        const product = await fetchProductPrice("cornflakes");
        expect(product).toEqual({ title: "Cornflakes", price: 4.99 });
    });

    test("should return null if product is not found", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
        const product = await fetchProductPrice("invalid_product");
        expect(product).toBeNull();
    });
});
