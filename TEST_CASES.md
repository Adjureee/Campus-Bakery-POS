# Test record — Campus Bakery POS

Run date: 13 October 2026. Local browser: Chromium Preview at `http://127.0.0.1:8765/`. Automated tests: `node --test app.test.js` (4 passed, 0 failed at initial run; rerun after final edits).

| Test | Expected | Actual / evidence | Status |
|---|---|---|---|
| PDF catalog | All six exact names and prices | Browser accessibility tree showed six cards with ₱25/20/15/30/55/25; automated test checked names/centavos | Pass |
| Empty cart checkout | Error, no receipt | Browser showed “Add an item before confirming payment.” | Pass |
| Repeated add / cart | Same row quantity increases | Browser showed 2 Pandesal with ₱50 subtotal | Pass |
| Quantity controls and Remove | Recompute, no quantity below 1, delete only selected row | Browser incremented Pandesal 1→2 (₱50), decremented 2→1 (₱25; decrease disabled), removed row (₱0) | Pass |
| Sample total | 2 Pandesal + Ensaymada + coffee = ₱95 | Browser showed 4 items, ₱50 + ₱20 + ₱25 and ₱95 total; automated calculation test passed | Pass |
| Blank / non-numeric / negative / >2 decimals | Inline invalid amount error | Blank and negative browser submissions showed inline error; parser/validator automated assertions cover text and over-precision, but numeric browser field may prevent typing letters | Pass (logic); non-numeric browser entry not reproducible |
| Zero / ₱94 on ₱95 order | Inline insufficient error, no checkout | Browser ₱94 displayed “Insufficient payment. Please enter at least ₱95.00.”; automated checks cover zero and ₱94.99 | Pass |
| Corrected ₱100 payment | Clears error, confirms, gives ₱5 | Browser updated ₱94 to ₱100; showed payment successful, receipt ₱95 total / ₱100 paid / ₱5 change | Pass |
| Exact payment | ₱0 change | Automated ₱95 assertion passed; browser second transaction with ₱20 exact cash showed ₱0 receipt | Pass |
| Receipt / lock | Itemized snapshot/reference, editing and repeat checkout blocked | Browser showed itemized reference and disabled Add, qty, Remove, cash and Confirm; duplicate click should be rechecked | Pass |
| Reset / second order | Clears everything and gives a new reference | Browser reset from paid coffee to empty cart/cash/receipt, then completed sample and later a paid Ensaymada; observed references differ | Pass |
| Keyboard, responsive layout, contrast/targets | Visible focus, desktop columns, mobile stack, WCAG 2.2 AA target | Browser measured 782px/521px desktop columns, single 341px mobile column at 390px, no horizontal overflow, 44px Add control; Tab focus had solid outline; re-render retained focus on quantity control. Full contrast/target audit pending | Pending |
| Console / network | No errors | Preview logs returned no console or network errors in tested browser tab | Pass |

Evidence still needed before submission: save genuine screenshots of product list, populated cart, payment error/success, receipt, and GitHub commit history in `screenshots/`; obtain actual GitHub URL and push. Do not mark pending rows Pass without executing them.
