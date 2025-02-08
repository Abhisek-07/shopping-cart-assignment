import ShoppingCart from "./cart";


(async () => {
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("weetabix", 1);
    console.log(ShoppingCart.getCartState());
})();