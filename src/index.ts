import ShoppingCart from "./cart";
import { execSync } from "child_process";
import os from "os";

// Detect OS and use appropriate commands
const isWindows = os.platform() === "win32";

const copyCmd = isWindows ? "copy db.json db.temp.json" : "cp db.json db.temp.json";
const moveCmd = isWindows ? "move /Y db.temp.json db.json" : "mv db.temp.json db.json";

// Backup db.json before running
execSync(copyCmd, { stdio: "inherit" });

process.on("exit", () => {
    execSync(moveCmd, { stdio: "inherit" });
});

(async () => {
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("cornflakes", 1);
    await ShoppingCart.addProduct("weetabix", 1);
    console.log(ShoppingCart.getCartState());
})();