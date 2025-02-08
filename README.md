# Shopping Cart Assignment

## Project Overview

This is a **TypeScript-based shopping cart module** that integrates with a **mock price API**. It supports:

- **Adding products**
- **Fetching prices dynamically**
- **Calculating totals (subtotal, tax, total)**
- **Unit tests to ensure correctness**

---

## 1️⃣ Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-forked-repo-url>
cd shopping-cart-assignment
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Mock Price API

```sh
npm run serve-products
```

This will start `json-server` at `http://localhost:3001/products`.

---

## 2️⃣ Running the Shopping Cart

To execute the shopping cart logic:

```sh
npx ts-node src/index.ts
```

✅ **Expected Output Example**

```json
{
  "items": [
    { "id": "cornflakes", "name": "Cornflakes", "quantity": 2, "price": 4.99 },
    { "id": "weetabix", "name": "Weetabix", "quantity": 1, "price": 7.29 }
  ],
  "subtotal": 17.27,
  "tax": 2.16,
  "total": 19.43
}
```

---

## 3️⃣ Running Unit Tests

To run unit tests:

```sh
npx jest
```

✅ **What Gets Tested?**

- `cart.ts` → Adding products & price calculations
- `priceFetcher.ts` → API integration

---

## 4️⃣ Resetting `db.json` After Running

This project \*\*automatically resets \*\***`db.json`** after each run. No need to manually restore it! 🚀

---

## 5️⃣ Folder Structure

```
shopping-cart-assignment
│── src/
│   ├── cart.ts         # Shopping cart logic
│   ├── priceFetcher.ts # Fetches product prices
│   ├── index.ts        # Runs cart logic
│── tests/              # Unit tests
│   ├── cart.test.ts
│   ├── priceFetcher.test.ts
│── db.json             # Mock API data
│── package.json        # Project metadata
│── jest.config.js      # Jest configuration
│── README.md           # This file
```

---

## Final Notes

- **Your ********************`db.json`******************** will reset after each app run.**
- **Make sure ********************`serve-products`******************** is running before executing the cart logic.**
- **Check expected API responses before running the cart.**

🚀 **Your shopping cart is ready to go!** 🚀



