import ShoppingCart from "./cart";
import { execSync } from "child_process";

// Backup db.json before running
execSync("cp db.json db.temp.json");

process.on("exit", () => {
    execSync("mv db.temp.json db.json");
});

(async () => {
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("weetabix", 1);
    console.log(ShoppingCart.getCartState());
})();