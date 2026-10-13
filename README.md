# Campus Bakery POS — IT 415 Scenario 2

A small desktop-browser point-of-sale app for the individual DNSC IT 415 practical exam. Six fixed products and prices match Scenario 2 of the examination PDF. No accounts, database, payment processor, or build dependencies.

## Run

Open `index.html` in a modern desktop browser, or run `python -m http.server 8765 --bind 127.0.0.1` here and visit `http://127.0.0.1:8765/`. Use a keyboard and mouse. JavaScript and a browser with Web Crypto are required. To run pure calculation tests with Node.js: `node --test app.test.js`.

## Transaction

Choose products with Add item, use +/− or Remove in the cart, and review the total in the order panel. On desktop the order panel stays in view as the product page scrolls. Select Review & pay to open a keyboard-accessible checkout dialog with an itemized review and cash input (pesos, up to two decimals). Before payment, Close, Escape, or the backdrop returns to editing without losing the order. Invalid payment displays an inline error inside the dialog. Successful payment displays confirmation, change, and the receipt in the same dialog; all order editing is disabled. New transaction clears the order, cash, errors, and receipt. Refreshing also discards the in-memory transaction.

Sample: two Pandesal packs (₱50), one Ensaymada (₱20), one Brewed Coffee (₱25) = ₱95. Cash ₱100 gives ₱5 change; exact ₱95 gives ₱0 change.

## Explain the implementation

- `index.html` contains semantic sections, a native `<dialog>` for review/payment/receipt, and an explicitly labeled cash field; `styles.css` defines the responsive two-column interface, sticky desktop order panel, feedback styles, and focus outlines. The native modal traps focus; Escape closes unpaid checkout, while a completed sale requires New transaction.
- `app.js` keeps the six products in a fixed array with stable IDs and prices in integer centavos. The cart maps product IDs to positive integer quantities; `orderLines` and `orderTotal` derive the display on every change rather than maintaining a competing total.
- `parseCash` checks decimal text first and converts it to centavos. `validateCash` rejects malformed or insufficient amounts in application logic, not just via HTML attributes. Change is integer paid minus integer due.
- Checkout copies the paid lines and totals into a receipt snapshot with a timestamp-plus-random reference. A paid flag (the presence of this receipt) blocks editing and duplicate checkout. New transaction replaces the cart, removes the receipt, resets cash/messages, and enables controls again.
- `app.test.js` exercises catalog and money functions; the browser walkthrough and remaining evidence are in `TEST_CASES.md`.

## Submission and limitations

The POS is local and intentionally keeps transaction state only in browser memory. The receipt is digital on screen, not stored after reset/refresh. GitHub URL, push status, and deployment evidence must be recorded from the actual accounts; see `TEST_CASES.md` and `AI_USAGE.md` for honest evidence tracking. Never add fictitious screenshots or student evaluations.
